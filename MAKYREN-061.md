# MAKYREN-061 — Nearest Pedestrian Telemetry

## Scope
Extend the existing Visual-004 traffic telemetry with nearest pedestrian distance while on foot.

## Implemented
- Added `nearestPedestrianDistance` to `window.MakyrenTraffic`.
- Returns the nearest pedestrian distance only while `playerRoot` is enabled.
- Returns `Infinity` when the player is in vehicle mode or unavailable.
- Bumped traffic-system telemetry version from `033` to `034`.
- No gameplay, collision, or movement behavior changed.

## Verification
Source inspection confirmed pedestrian collision separation already depends on player-root state, making this a consistent telemetry surface for on-foot proximity. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-062 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
