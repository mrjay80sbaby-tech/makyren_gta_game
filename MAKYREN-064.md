# MAKYREN-064 — Mode-Aware Traffic Distance Telemetry

## Scope
Provide one traffic-distance telemetry value that follows the player's current mode.

## Implemented
- Added `nearestTrafficDistance` to `window.MakyrenTraffic`.
- Uses nearest ambient vehicle distance while the player vehicle is enabled.
- Uses nearest pedestrian distance while on foot.
- Bumped traffic-system telemetry version from `036` to `037`.
- Existing individual distance getters remain unchanged.

## Verification
Source inspection confirmed the system already exposed separate nearest-vehicle and nearest-pedestrian values. The new getter provides a single mode-aware surface without changing movement, collision, or HUD behavior. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-065 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
