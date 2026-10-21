# Nintendo Switch Card port

## Objective

Maintain a user-owned port of `hudsonbrendon/nintendo-switch-card` for the
native MQTT telemetry produced by Switch HA Native.

## Current state

- Keeps the compatible card type `custom:nintendo-switch-card`.
- Shows only charging state and battery percentage in the header; voltage is
  shown once as the first lower statistic.
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

## Sleep heartbeat cadence (2026-08-03)

Version `0.1.7` adds an optional `telemetry_online` binary-entity override.
When supplied, it is authoritative for the state line; otherwise the card
keeps the generic heartbeat-age fallback. In this Home Assistant installation
it is bound to `binary_sensor.nintendo_switch_telemetry_online`, whose package
requires a heartbeat train for at least 45 seconds with gaps below one minute.
This filters isolated sleep pulses sent roughly every three minutes. The build
SHA-256 is
`84aa42ebe67f8f503b3b18adb923ec9f30537daf6cbf8dafba8310cbd753fb52`; it is
deployed as `v=0.1.7-telemetry-cadence` after backing up the card, Lovelace
resource registry and dashboard. `ha core check` passed.

## Telemetry cadence neutralization (2026-08-28)

The owner verified that telemetry continues in sleep, but at a lower cadence;
the same lower cadence also occurs while the console runs only on battery.
Cadence therefore cannot establish either sleep or active use. Version `0.1.8`
removes the heartbeat-age timer and the optional `telemetry_online` override
from the card's state line. It now reports only the game and charging states,
while actual unavailable essential entities still show an error. The verified
build SHA-256 is
`40a37471d818715e7362a8c337a4fdb9d3594915d4302479d0f39615be3630d3`.

It is deployed at `/config/www/nintendo-switch-card.js`; the Lovelace resource
is `/local/nintendo-switch-card.js?v=0.1.8-cadence-neutral`. A pre-change
backup is in Home Assistant at
`.codex-backups/nintendo-switch-card-v0.1.8-20260828-214054`, and `ha core
check` completed successfully.

The change is published on GitHub `main` as commit `5feec9d`.

## Header cleanup (2026-10-21)

Version `0.1.10` removes the duplicate battery-voltage indicator from the
header. Voltage remains the first item in the statistics row, so no telemetry
or entity mapping was removed. The v0.1.9 activity-confidence correction is
preserved.

The built asset SHA-256 is
`ec788224d124c4f519dcfe3142440c39c33830885e1da291a4fe65fff60bd3d1`.
It is deployed at `/config/www/nintendo-switch-card.js`; the Lovelace resource
is `/local/nintendo-switch-card.js?v=0.1.10-no-header-voltage`. The replaced
asset and resource registry are backed up under
`.codex-backups/nintendo-switch-card-v0.1.10-20261021`. TypeScript, ESLint,
80 tests, the Rollup build, deployed SHA-256 and `ha core check` passed. To
roll back, restore both backup files and return the resource query to
`v=0.1.9-activity-confidence`.

## README reference capture (2026-10-21)

`assets/example-native-mqtt.png` is a user-supplied capture of the deployed
Home Assistant card, not a mockup. It documents the default configuration
shown in this installation: a charge indicator and battery percentage in the
header, the white-console hero, the state line, and the four lower statistics.
It deliberately contains no refresh button, overflow menu, submenu or action
toolbar because no actions are configured for that card. The README points
directly to this PNG.

## Activity confidence correction (2026-08-28)

Version `0.1.9` distinguishes a current game from retained game state when
the configured optional `telemetry_online` helper is `off`. Rather than
claiming that the console is playing, it renders `Activity not confirmed ·
Last session: <game>` (localized), which correctly represents the observed
sleep case where Horizon still exposes the suspended game's process. It does
not infer that the console is definitively asleep, because low telemetry
cadence can also occur during battery-powered use.

The card is deployed at `/config/www/nintendo-switch-card.js` with SHA-256
`7237413295546bf7bf624342c940d040b960733ea78cb931ec263c958daadfe1`; the
Lovelace resource is `/local/nintendo-switch-card.js?v=0.1.9-activity-confidence`.
A pre-deployment copy is stored in Home Assistant under
`.codex-backups/nintendo-switch-card-v0.1.9-20260828-2310`. The 80 tests,
TypeScript type check, Rollup build, deployed hash and `ha core check` all
passed. This local implementation has not yet been published to GitHub.

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
