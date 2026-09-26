# MAKYREN-137 — Gate Entry Distance Square Root

## Scope
Avoid evaluating a square root for the vehicle-entry HUD distance when no E-key proximity check is active.

## Implemented
- Reuse the existing `distanceSquaredToCar` gate.
- Return `Infinity` directly when driving or when the squared distance is not finite.
- Preserve the existing entry prompt threshold and behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-138 — inspect the current Visual-004 production state and execute the next smallest scoped correction or optimization.
