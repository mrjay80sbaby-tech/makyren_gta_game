# MAKYREN-050 — Connect District Traffic Speed to Movement

## Scope
Complete the existing Visual-004 district traffic speed handoff so the speed calculated by the traffic system is actually consumed by the ambient traffic movement loop.

## Implemented
- Updated `visual-004/src/main.js` so each ambient traffic entry synchronizes its movement speed from the live mesh `speed` value when available.
- The district-adjusted speed assigned by `traffic_system.js` now reaches the loop that advances traffic vehicles along the road.
- Existing fallback behavior remains intact when a live mesh speed is unavailable.
- No changes to traffic lanes, signals, collisions, missions, garage systems, or controls.

## Verification
Repository inspection identified that MAKYREN-048 assigned the district-adjusted speed to the mesh while the movement loop still consumed the separate ambient-traffic object speed. This ticket closes that handoff gap. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-051 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
