# MAKYREN-098 — Avoid Square Root in On-Foot Vehicle Collision Gate

## Scope
Use squared horizontal distance for the on-foot vehicle collision threshold so the rejection path does not require a square-root calculation.

## Implemented
- Replaced `Vector3.Distance()` with squared-distance comparison for the 1.25-unit collision threshold.
- Preserved the existing `dx`/`dz` values for the actual separation response.
- Kept `Math.hypot()` only for the normalized push calculation after a collision is confirmed.

## Verification
Source inspection confirmed the collision threshold now compares squared distance (`1.25² = 1.5625`) before calculating the normalization length. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-099 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
