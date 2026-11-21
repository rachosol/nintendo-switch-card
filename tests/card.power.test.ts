import { describe, it, expect } from "vitest";
import "../src/nintendo-switch-card";
import { CARD_NAME } from "../src/const";
import { mockHass, mockEntity, type MockHassOpts } from "./fixtures/hass";
import type { NintendoSwitchCardConfig } from "../src/types";

interface CardEl extends HTMLElement {
  setConfig(c: NintendoSwitchCardConfig): void;
  hass: ReturnType<typeof mockHass>;
  updateComplete: Promise<boolean>;
}

const PLUG = "switch.charger_plug";

async function mountCard(
  config: Partial<NintendoSwitchCardConfig>,
  plugState: string | null,
  hassOpts: MockHassOpts = {}
): Promise<CardEl> {
  const c = document.createElement(CARD_NAME) as CardEl;
  c.setConfig({ type: `custom:${CARD_NAME}`, entity: "ns", ...config } as NintendoSwitchCardConfig);
  const hass = mockHass(hassOpts);
  if (plugState !== null) hass.states[PLUG] = mockEntity(PLUG, plugState);
  c.hass = hass;
  document.body.appendChild(c);
  await c.updateComplete;
  return c;
}

const powerButton = (c: CardEl) =>
  c.shadowRoot?.querySelector("button.tool.power") as HTMLButtonElement | null;

describe("power switch button", () => {
  it("is not rendered without power_switch (layout unchanged)", async () => {
    const c = await mountCard({}, "on");
    expect(powerButton(c)).toBeNull();
    c.remove();
  });

  it("does not add a toolbar on its own when power_switch is absent", async () => {
    const c = await mountCard({}, "on", { unavailable: ["sensor.ns_audio_output_target"] });
    expect(c.shadowRoot?.querySelector(".toolbar")).toBeNull();
    c.remove();
  });

  it("renders the on state and toggles the plug", async () => {
    const c = await mountCard({ power_switch: PLUG }, "on");
    const b = powerButton(c)!;
    expect(b).not.toBeNull();
    expect(b.classList.contains("on")).toBe(true);
    expect(b.getAttribute("aria-pressed")).toBe("true");
    expect(b.disabled).toBe(false);
    expect(b.title).toBe("Turn charger off");
    expect(b.textContent).toContain("Charger");
    b.click();
    expect(c.hass._calls).toHaveLength(1);
    expect(c.hass._calls[0]).toMatchObject({
      domain: "switch",
      service: "toggle",
      service_data: { entity_id: PLUG },
    });
    c.remove();
  });

  it("renders the off state with a localized label", async () => {
    const c = await mountCard({ power_switch: PLUG, language: "es" }, "off");
    const b = powerButton(c)!;
    expect(b.classList.contains("off")).toBe(true);
    expect(b.getAttribute("aria-pressed")).toBe("false");
    expect(b.title).toBe("Encender cargador");
    expect(b.textContent).toContain("Cargador");
    c.remove();
  });

  it("is disabled when the plug is unavailable or missing", async () => {
    for (const st of ["unavailable", null]) {
      const c = await mountCard({ power_switch: PLUG }, st);
      const b = powerButton(c)!;
      expect(b.disabled).toBe(true);
      b.click();
      expect(c.hass._calls).toHaveLength(0);
      c.remove();
    }
  });

  it("uses the entity domain for the toggle service", async () => {
    const c = document.createElement(CARD_NAME) as CardEl;
    c.setConfig({ type: `custom:${CARD_NAME}`, entity: "ns", power_switch: "input_boolean.charger" });
    const hass = mockHass();
    hass.states["input_boolean.charger"] = mockEntity("input_boolean.charger", "off");
    c.hass = hass;
    document.body.appendChild(c);
    await c.updateComplete;
    powerButton(c)!.click();
    expect(c.hass._calls[0].domain).toBe("input_boolean");
    c.remove();
  });

  it("rejects an invalid power_switch", () => {
    const c = document.createElement(CARD_NAME) as CardEl;
    expect(() =>
      c.setConfig({ type: `custom:${CARD_NAME}`, entity: "ns", power_switch: "not an entity" })
    ).toThrow(/power_switch/);
  });
});
