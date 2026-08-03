import { LitElement, html, nothing, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CARD_NAME, CARD_VERSION } from "./const";
import { cardStyles } from "./styles";
import "./editor";
import { svgHandheld } from "./assets/switch-svg";
import { resolveEntities } from "./helpers/resolve-entities";
import { computeStateLine } from "./helpers/compute-state-line";
import { formatStat } from "./helpers/format-stat";
import { localize } from "./localize";
import type {
  ActionConfig,
  HassObject,
  NintendoSwitchCardConfig,
  ResolvedEntities,
  StatConfig,
} from "./types";

console.info(
  `%c NINTENDO-SWITCH-CARD %c v${CARD_VERSION} `,
  "color: white; background: #E60012; font-weight: 700;",
  "color: white; background: #0AB9E6; font-weight: 700;"
);

interface CustomCardWindow extends Window {
  customCards?: Array<{ type: string; name: string; description: string; preview: boolean }>;
}
const w = window as CustomCardWindow;
w.customCards = w.customCards || [];
w.customCards.push({
  type: CARD_NAME,
  name: "Nintendo Switch Card",
  description: "Card for Nintendo Switch via switch-assistant MQTT integration",
  preview: false,
});

@customElement(CARD_NAME)
export class NintendoSwitchCard extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass?: HassObject;
  @state() private _config?: NintendoSwitchCardConfig;
  private _freshnessTimer?: number;

  connectedCallback(): void {
    super.connectedCallback();
    // HA does not emit a state change when the Switch stops publishing. Refresh
    // locally so a previously fresh retained heartbeat can age into sleep.
    this._freshnessTimer = window.setInterval(() => this.requestUpdate(), 60_000);
  }

  disconnectedCallback(): void {
    if (this._freshnessTimer !== undefined) {
      window.clearInterval(this._freshnessTimer);
      this._freshnessTimer = undefined;
    }
    super.disconnectedCallback();
  }

  setConfig(config: NintendoSwitchCardConfig): void {
    if (!config) throw new Error("invalid_config: config is empty");
    const hasPrefix = typeof config.entity === "string" && config.entity.length > 0;
    const ents = config.entities ?? {};
    const hasMinEntities = !!ents.battery_level && !!ents.is_charging;
    if (!hasPrefix && !hasMinEntities) {
      throw new Error(
        "missing required entity: provide `entity:` prefix or `entities.battery_level` + `entities.is_charging`"
      );
    }
    if (config.stats && config.stats.length > 4) {
      throw new Error("invalid_config: stats can have at most 4 items");
    }
    if (config.image && config.image !== "switch-default") {
      try {
        if (!config.image.startsWith("/local/") && !config.image.startsWith("/")) {
          new URL(config.image);
        }
      } catch {
        throw new Error("invalid_config: image must be `switch-default`, a `/local/...` path, or an absolute URL");
      }
    }
    this._config = config;
  }

  getCardSize(): number {
    return 5;
  }

  static getConfigElement(): HTMLElement {
    return document.createElement("nintendo-switch-card-editor");
  }

  static getStubConfig(): { type: string; entity: string } {
    return { type: "custom:nintendo-switch-card", entity: "nintendo_switch" };
  }

  private _stateOf(entityId: string): string {
    if (!this.hass || !entityId) return "unavailable";
    return this.hass.states[entityId]?.state ?? "unavailable";
  }

  private _telemetryFresh(ents: ResolvedEntities): boolean {
    const onlineState = ents.telemetry_online
      ? this.hass?.states[ents.telemetry_online]
      : undefined;
    if (onlineState) return onlineState.state === "on";

    const state = this.hass?.states[ents.telemetry_heartbeat];
    if (!state?.last_updated) return false;
    const ageMs = Date.now() - Date.parse(state.last_updated);
    return Number.isFinite(ageMs) && ageMs >= 0 && ageMs <= 180_000;
  }

  private _resolveLang(): string {
    return this._config?.language ?? this.hass?.locale.language ?? "en";
  }

  private _isAnyEssentialUnavailable(ents: ResolvedEntities): boolean {
    const essentials = [ents.battery_level, ents.is_charging];
    return essentials.some(
      (eid) => !eid || !this.hass!.states[eid] || this.hass!.states[eid].state === "unavailable"
    );
  }

  private _renderHeader(ents: ResolvedEntities): TemplateResult {
    const battery = this._stateOf(ents.battery_level);
    const charging = this._stateOf(ents.is_charging) === "on";
    const voltage = formatStat(this._stateOf(ents.battery_voltage), {
      unit: "V",
      multiply: 0.001,
      precision: 2,
    });
    const chargeText = charging
      ? localize("state.charging", this._resolveLang())
      : localize("state.not_charging", this._resolveLang());
    const batNum = Number(battery);
    const isLow = !charging && Number.isFinite(batNum) && batNum > 0 && batNum < 15;

    return html`
      <div class="header">
        <div class="header-item charge">
          <ha-icon icon="${charging ? "mdi:power-plug" : "mdi:power-plug-off"}"></ha-icon>
          <span>${chargeText}</span>
        </div>
        <div class="header-item voltage">
          <ha-icon icon="mdi:flash-outline"></ha-icon>
          <span>${voltage}</span>
        </div>
        <div class="header-item battery ${charging ? "charging-pulse" : ""} ${isLow ? "battery-low" : ""}">
          <ha-icon icon="${charging ? "mdi:flash" : "mdi:battery"}"></ha-icon>
          <span>${battery === "unavailable" ? "—" : `${battery}%`}</span>
        </div>
      </div>
    `;
  }

  private _renderHero(unavailable: boolean): TemplateResult {
    const image = this._config!.image;
    const useImg = image && image !== "switch-default";
    return html`
      <div class="hero ${unavailable ? "unavailable" : ""}">
        ${useImg
          ? html`<img src=${image!} alt="Nintendo Switch" />`
          : svgHandheld}
      </div>
    `;
  }

  private _renderName(): TemplateResult {
    const name = this._config?.name ?? "Nintendo Switch";
    return html`<div class="name">${name}</div>`;
  }

  private _renderStateLine(ents: ResolvedEntities, anyUnavailable: boolean): TemplateResult {
    const line = computeStateLine({
      isCharging: this._stateOf(ents.is_charging),
      gameRunning: this._stateOf(ents.game_running),
      currentGame: this._stateOf(ents.current_game),
      chargerType: this._stateOf(ents.charger_type),
      telemetryFresh: this._telemetryFresh(ents),
      anyUnavailable,
      lang: this._resolveLang(),
    });
    return html`<div class="state ${line.color}" aria-live="polite">${line.text}</div>`;
  }

  private _defaultStats(ents: ResolvedEntities): StatConfig[] {
    return [
      { entity: ents.battery_voltage, unit: "V", multiply: 0.001, precision: 2, subtitle: "stat.voltage" },
      { entity: ents.battery_temperature, unit: "°C", precision: 1, subtitle: "stat.temperature" },
      { entity: ents.battery_health, unit: "%", precision: 0, subtitle: "stat.health" },
      { entity: ents.telemetry_heartbeat, precision: 0, subtitle: "stat.telemetry" },
    ];
  }

  private _renderStats(ents: ResolvedEntities): TemplateResult {
    const stats = this._config!.stats ?? this._defaultStats(ents);
    const lang = this._resolveLang();
    const visibleStats = stats.filter((s) => this._stateOf(s.entity) !== "unavailable");
    return html`
      <div class="stats">
        ${visibleStats.map((s) => {
          const raw = this._stateOf(s.entity);
          const formatted = formatStat(raw, {
            unit: s.unit,
            multiply: s.multiply,
            precision: s.precision,
            suffix: s.suffix,
          });
          const label = s.subtitle.startsWith("stat.")
            ? localize(s.subtitle, lang)
            : s.subtitle;
          return html`
            <div class="stat">
              <div class="stat-value">${formatted}</div>
              <div class="stat-label">${label}</div>
            </div>
          `;
        })}
      </div>
    `;
  }

  private _defaultActions(): ActionConfig[] {
    return [];
  }

  private _handleAction(action: ActionConfig): void {
    if (!this.hass) return;
    const [domain, service] = action.service.split(".");
    if (!domain || !service) return;
    this.hass.callService(domain, service, action.service_data, action.target);
  }

  private _renderToolbar(ents: ResolvedEntities): TemplateResult | typeof nothing {
    const lang = this._resolveLang();
    const actions = this._config?.actions ?? this._defaultActions();
    const audioState = this._stateOf(ents.audio_output);
    const audioAvailable = audioState !== "unavailable";
    if (actions.length === 0 && !audioAvailable) return nothing;

    return html`
      <div class="toolbar">
        <div class="tool-group">
          ${actions.map((a) => {
            const label = a.name_key ? localize(a.name_key, lang) : (a.name ?? a.service);
            const cls = a.name_key === "action.reboot"
              ? "reboot"
              : a.name_key === "action.shutdown"
              ? "shutdown"
              : "";
            return html`
              <button
                class="tool ${cls}"
                aria-label=${label}
                title=${label}
                @click=${() => this._handleAction(a)}
              >
                <ha-icon icon=${a.icon ?? "mdi:flash"}></ha-icon>
              </button>
            `;
          })}
        </div>
        <div class="tool-group">
          ${audioAvailable ? html`<span class="tool" aria-label="Audio ${audioState}" title="Audio: ${audioState}">
            <ha-icon icon="mdi:speaker"></ha-icon>
          </span>` : nothing}
        </div>
      </div>
    `;
  }

  render() {
    if (!this._config || !this.hass) return nothing;
    const ents = resolveEntities(this._config);
    const unavailable = this._isAnyEssentialUnavailable(ents);
    const compact = this._config.compact ? "compact" : "";
    return html`
      <ha-card class=${compact} role="article" aria-label=${this._config.name ?? "Nintendo Switch"}>
        ${this._renderHeader(ents)}
        ${this._renderHero(unavailable)}
        ${this._renderName()}
        ${this._renderStateLine(ents, unavailable)}
        ${this._renderStats(ents)}
        ${this._renderToolbar(ents)}
      </ha-card>
    `;
  }
}
