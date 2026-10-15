# MAKYREN-150 — Consolidate Nearest Pedestrian Distance Update

## Scope
Make nearest-pedestrian distance telemetry update in one explicit post-scan assignment.

## Implemented
- Removed the frame-start reset of `nearestPedestrianDistance`.
- Replaced the conditional post-scan update with one assignment that sets the measured distance or `Infinity` when no pedestrian distance was measured.
- Preserved the externally visible empty-scan value and nearest-distance calculation.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-151 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
