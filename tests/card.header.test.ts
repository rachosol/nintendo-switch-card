import { describe, it, expect } from "vitest";
import "../src/nintendo-switch-card";
import { CARD_NAME } from "../src/const";
import { mockHass, type MockHassOpts } from "./fixtures/hass";
import type { NintendoSwitchCardConfig } from "../src/types";

interface CardEl extends HTMLElement {
  setConfig(c: NintendoSwitchCardConfig): void;
  hass: ReturnType<typeof mockHass>;
  updateComplete: Promise<boolean>;
}

async function mountCard(opts: MockHassOpts = {}): Promise<CardEl> {
  const c = document.createElement(CARD_NAME) as CardEl;
  c.setConfig({ type: `custom:${CARD_NAME}`, entity: "ns" });
  c.hass = mockHass(opts);
  document.body.appendChild(c);
  await c.updateComplete;
  return c;
}

describe("header", () => {
  it("shows battery percentage", async () => {
    const c = await mountCard({ battery_level: "66" });
    const html = c.shadowRoot?.innerHTML ?? "";
    expect(html).toContain("66");
    c.remove();
  });

  it("shows charging state and battery voltage", async () => {
    const c = await mountCard({ is_charging: "on", battery_voltage: "4123" });
    const html = c.shadowRoot?.innerHTML ?? "";
    expect(html).toContain("Charging");
    expect(html).toContain("4.12 V");
    c.remove();
  });

  it("shows the disconnected charger icon", async () => {
    const c = await mountCard({ charger_type: "unconnected" });
    expect(c.shadowRoot?.querySelector(".header-item.charge ha-icon")?.getAttribute("icon")).toBe("mdi:power-plug-off");
    c.remove();
  });

  it("applies charging-pulse class when charging", async () => {
    const c = await mountCard({ is_charging: "on" });
    expect(c.shadowRoot?.querySelector(".header-item.charging-pulse")).not.toBeNull();
    c.remove();
  });

  it("applies battery-low class below 15% when not charging", async () => {
    const c = await mountCard({ battery_level: "10", is_charging: "off" });
    expect(c.shadowRoot?.querySelector(".header-item.battery-low")).not.toBeNull();
    c.remove();
  });
});
