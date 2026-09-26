# MAKYREN-136 — Restore Cached Entry Distance for HUD

## Scope
Restore the on-foot vehicle-entry distance value consumed by the gameplay HUD after the squared-distance optimization.

## Implemented
- Derive `distance` once from the existing `distanceSquaredToCar` value.
- Skip the square-root calculation while driving, where the HUD entry prompt is not used.
- Preserve the existing `< 5` meter entry prompt behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-137 — inspect the current Visual-004 production state and execute the next smallest scoped correction or optimization.
