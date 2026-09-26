# MAKYREN-104 — Reuse Squared Vehicle-Collision Distance

## Scope
Remove a redundant distance calculation in the on-foot ambient-vehicle collision response.

## Implemented
- Reused the already-computed squared distance from the collision gate.
- Replaced `Math.hypot(dx, dz)` with `Math.sqrt(distanceSquared)` for the normalization step.
- Preserved the collision threshold and push behavior.

## Verification
Source inspection confirmed the collision response now reuses the existing squared-distance calculation rather than recomputing the same distance from `dx` and `dz`. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-105 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
