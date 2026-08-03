import { describe, it, expect } from "vitest";
import { svgHandheld } from "../../src/assets/switch-svg";

describe("svgHandheld", () => {
  it("is a Lit svg template result with strings array", () => {
    expect(svgHandheld).toBeTruthy();
    expect((svgHandheld as unknown as { strings: TemplateStringsArray }).strings).toBeDefined();
    expect(
      Array.isArray((svgHandheld as unknown as { strings: TemplateStringsArray }).strings)
    ).toBe(true);
  });

  it("uses a white Joy-Con finish", () => {
    const raw = (svgHandheld as unknown as { strings: TemplateStringsArray }).strings.join("");
    expect(raw.toLowerCase()).toContain("#ffffff");
  });

  it("includes a subtle Joy-Con shell outline", () => {
    const raw = (svgHandheld as unknown as { strings: TemplateStringsArray }).strings.join("");
    expect(raw.toLowerCase()).toContain("#b9c0c4");
  });

  it("uses viewBox 0 0 600 200", () => {
    const raw = (svgHandheld as unknown as { strings: TemplateStringsArray }).strings.join("");
    expect(raw).toContain('viewBox="0 0 600 200"');
  });
});
