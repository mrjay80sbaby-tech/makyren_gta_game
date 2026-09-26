# MAKYREN-050 — On-Foot Traffic Proximity Accuracy

## Scope
Align the Visual-004 traffic proximity HUD distance source with the active player mode.

## Implemented
- On foot, `nearestTrafficDistance` now uses the nearest pedestrian relative to `playerRoot`.
- In vehicle mode, it continues using the nearest ambient vehicle relative to the player vehicle.
- The HUD now matches the same active-mode state used by the proximity interactions.

## Implementation
- Commit: `0b2b273b35630db8fc30d1fc0406c1f2ad082591`

## Verification
Production source was inspected and the correction was committed. No local/runtime build was executed.

## Next
MAKYREN-051 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
