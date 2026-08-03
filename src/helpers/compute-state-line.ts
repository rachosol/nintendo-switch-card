import { localize } from "../localize";
import type { StateLine } from "../types";

export interface StateLineInput {
  isCharging: string;
  gameRunning: string;
  currentGame: string;
  chargerType: string;
  telemetryFresh: boolean;
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

  if (!input.telemetryFresh) {
    return { text: localize("state.possible_sleep", input.lang), color: "muted" };
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
