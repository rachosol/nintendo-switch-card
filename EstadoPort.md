# Nintendo Switch Card port

## Objective

Maintain a user-owned port of `hudsonbrendon/nintendo-switch-card` for the
native MQTT telemetry produced by Switch HA Native.

## Current state

- Keeps the compatible card type `custom:nintendo-switch-card`.
- Shows battery percentage, charging state and voltage in a three-part header.
- Uses a white Joy-Con illustration by default.
- Uses native telemetry for game, console state, heartbeat, health and
  temperature; the four default statistics are voltage, temperature, health
  and telemetry heartbeat. Retired Switch Assistant-only features are not
  presented.
- Supports manual entity overrides, including Home Assistant IDs with `_2`
  suffixes after MQTT discovery cleanup.
- Carries the upstream MIT license and port attribution.

## Deployment status (2026-08-03)

Version `0.1.5` implements the white Joy-Con visual variant and replaces the
unused charger-type statistic with the native MQTT telemetry heartbeat. It was
verified with 79 tests, TypeScript type checking and a Rollup build. The built
asset SHA-256 is
`e398438323c296994b6b7d6ed17d847075a4fdec6b269eb88f67352893530fb5`.

It is deployed to Home Assistant at
`/config/www/nintendo-switch-card.js`; the Lovelace resource is
`/local/nintendo-switch-card.js?v=0.1.5-white-telemetry`. Backups of both the
previous JavaScript file and `lovelace_resources` were created before the
switch, and `ha core check` passed after Core restarted.

## Freshness correction (2026-08-03)

Version `0.1.6` fixes a visual stale-state edge case: retained MQTT telemetry
may stop when the console sleeps, but Home Assistant emits no later state
change to trigger a card render. The card now reevaluates the heartbeat age
once per minute and changes to possible sleep after three minutes without a
publication. The verified build SHA-256 is
`04239ec2f0910e9b70207a15336abd96ba9dcbb79f869a5a95f3335fd8a1aea8`; it is
deployed with the resource query
`v=0.1.6-heartbeat-refresh`, with pre-deployment backups and a successful
`ha core check`.

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

For clients that retained the old URL despite that query, commit `94f703d`
adds `assets/example-native-mqtt.png` and points the README to this new path.
