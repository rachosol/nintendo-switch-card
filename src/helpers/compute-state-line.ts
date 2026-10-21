import { localize } from "../localize";
import type { StateLine } from "../types";

export interface StateLineInput {
  isCharging: string;
  gameRunning: string;
  currentGame: string;
  chargerType: string;
  telemetryOnline: string;
  anyUnavailable: boolean;
  lang: string;
}

export function computeStateLine(input: StateLineInput): StateLine {
  if (input.anyUnavailable) {
    return { text: localize("state.unavailable", input.lang), color: "error" };
  }

  const charging = input.isCharging === "on";
  const running = input.gameRunning === "on";
  const gameLabel = input.currentGame && input.currentGame !== "Unknown"
    ? input.currentGame
    : localize("state.running", input.lang);

  /* `game_running` is retained MQTT state.  The native module can still
   * report the suspended game's process while the console sleeps, so only
   * present it as a current activity if HA has observed a continuous
   * telemetry session.  `unknown` preserves the historical behaviour for
   * configurations that do not opt into this optional helper. */
  if (running && input.telemetryOnline === "off") {
    return {
      text: `${localize("state.activity_unconfirmed", input.lang)} · ${localize("state.last_session", input.lang)}: ${gameLabel}`,
      color: "muted",
    };
  }

  if (charging && running) {
    return {
      text: `⚡ ${localize("state.charging", input.lang)} · ▶ ${gameLabel}`,
      color: "charging",
    };
  }
  if (charging) {
    return {
      text: `⚡ ${localize("state.charging", input.lang)} · ${localize("state.awake", input.lang)}`,
      color: "charging",
    };
  }
  if (running) {
    return { text: `▶ ${gameLabel}`, color: "default" };
  }
  return { text: localize("state.awake", input.lang), color: "default" };
}
