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

async function mountCard(
  config: Partial<NintendoSwitchCardConfig>,
  hassOpts: MockHassOpts = {}
): Promise<CardEl> {
  const c = document.createElement(CARD_NAME) as CardEl;
  c.setConfig({ type: `custom:${CARD_NAME}`, ...config } as NintendoSwitchCardConfig);
  c.hass = mockHass(hassOpts);
  document.body.appendChild(c);
  await c.updateComplete;
  return c;
}

describe("toolbar actions", () => {
  it("does not render unavailable default console controls", async () => {
    const c = await mountCard({ entity: "ns" });
    expect(c.shadowRoot?.querySelectorAll("button.tool").length).toBe(0);
    c.remove();
  });

  it("custom actions override defaults", async () => {
    const c = await mountCard({
      entity: "ns",
      actions: [
        {
          service: "scene.turn_on",
          service_data: { entity_id: "scene.gaming" },
          icon: "mdi:gamepad",
          name: "Gaming mode",
        },
      ],
    });
    const tools = c.shadowRoot?.querySelectorAll(".tool");
    expect(tools!.length).toBeGreaterThanOrEqual(1);
    (tools![0] as HTMLButtonElement).click();
    await c.updateComplete;
    expect(c.hass._calls[0].service).toBe("turn_on");
    expect(c.hass._calls[0].domain).toBe("scene");
    c.remove();
  });
});
