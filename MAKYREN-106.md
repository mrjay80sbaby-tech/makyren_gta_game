# MAKYREN-106 — Avoid Square Root in Vehicle Entry Gate

## Scope
Optimize the per-frame on-foot vehicle-entry proximity check without changing its 5-unit interaction radius.

## Implemented
- Replaced the `Math.hypot` distance calculation with squared horizontal distance.
- Compared against the squared 5-unit entry threshold (`25`).
- Preserved the existing E-key entry behavior and service-point interaction path.

## Verification
Source inspection confirmed the vehicle-entry gate no longer calculates a square root every frame. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-107 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
