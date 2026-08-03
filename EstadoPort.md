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

Published at https://github.com/rachosol/nintendo-switch-card as root commit
`5e2a2db` on `main`. The repository uses an independent root history, avoiding
the incomplete object ancestry from the upstream local clone. The upstream
license and attribution remain included. Commit `a11c148` adds an explicit
English and Spanish reference to the original Hudson Brendon repository in the
README.

Commit `4f3d5c1` replaces the README example image with a native-telemetry
mockup that shows charging state, voltage, battery percentage, current game,
temperature, health and telemetry heartbeat.

GitHub serves the new image with the verified hash, but the README URL was
cached by browsers. Commit `6a7e89f` appends the image revision query string
to force the refreshed preview.
