import { describe, it, expect } from "vitest";
import { computeStateLine, type StateLineInput } from "../../src/helpers/compute-state-line";

const baseInputs = (over: Partial<StateLineInput> = {}): StateLineInput => ({
  isCharging: "off",
  gameRunning: "off",
  currentGame: "Unknown",
  chargerType: "none",
  anyUnavailable: false,
  lang: "en",
  ...over,
  telemetryFresh: over.telemetryFresh ?? true,
});

describe("computeStateLine", () => {
  it("returns awake by default", () => {
    expect(computeStateLine(baseInputs())).toEqual({ text: "Awake · no game", color: "default" });
  });

  it("reports possible sleep when telemetry is stale", () => {
    expect(computeStateLine(baseInputs({ telemetryFresh: false }))).toEqual({ text: "No telemetry · possibly asleep", color: "muted" });
  });

  it("returns running with game name when game_running=on", () => {
    const r = computeStateLine(baseInputs({ gameRunning: "on", currentGame: "Zelda: TOTK" }));
    expect(r).toEqual({ text: "▶ Zelda: TOTK", color: "default" });
  });

  it("returns running with localized fallback when current_game is Unknown", () => {
    const r = computeStateLine(baseInputs({ gameRunning: "on", currentGame: "Unknown" }));
    expect(r).toEqual({ text: "▶ Running", color: "default" });
  });

  it("returns charging when is_charging=on and not running", () => {
    const r = computeStateLine(baseInputs({ isCharging: "on", chargerType: "enough_power" }));
    expect(r).toEqual({ text: "⚡ Charging · Awake · no game", color: "charging" });
  });

  it("returns charging+running when both on", () => {
    const r = computeStateLine(
      baseInputs({ isCharging: "on", gameRunning: "on", currentGame: "Mario" })
    );
    expect(r).toEqual({ text: "⚡ Charging · ▶ Mario", color: "charging" });
  });

  it("returns unavailable when any essential entity is unavailable", () => {
    const r = computeStateLine(baseInputs({ anyUnavailable: true }));
    expect(r).toEqual({ text: "Unavailable", color: "error" });
  });

  it("uses pt-BR localization", () => {
    const r = computeStateLine(baseInputs({ lang: "pt-BR" }));
    expect(r.text).toBe("Ligada · sem jogo");
  });
});
