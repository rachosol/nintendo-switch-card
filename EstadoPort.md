# Nintendo Switch Card port

## Objective

Maintain a user-owned port of `hudsonbrendon/nintendo-switch-card` for the
native MQTT telemetry produced by Switch HA Native.

## Current state

- Keeps the compatible card type `custom:nintendo-switch-card`.
- Shows battery percentage, charging state and voltage in the header.
- Uses native telemetry for game, console state, heartbeat, health and
  temperature; retired Switch Assistant-only features are not presented.
- Supports manual entity overrides, including Home Assistant IDs with `_2`
  suffixes after MQTT discovery cleanup.
- Carries the upstream MIT license and port attribution.

## Next actions

- Create the public GitHub repository `rachosol/nintendo-switch-card`, then
  set it as `origin` and push the verified initial commit.

## Publication status (2026-08-03)

The local port is committed as `14081ec` and ready to publish. The requested
repository does not yet exist, and this environment has no GitHub HTTPS
credential or GitHub CLI available to create it through the API. SSH access is
valid for pushing to existing repositories only.
