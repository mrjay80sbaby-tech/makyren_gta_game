# MAKYREN-162 — Name Pedestrian Base-Speed Progression

## Scope
Make the ambient pedestrian base-speed starting value and per-pedestrian increment explicit.

## Implemented
- Added `pedestrianBaseSpeedStart` (`.75`) and `pedestrianBaseSpeedStep` (`.08`).
- Reused the constants in pedestrian spawn speed initialization.
- Preserved the existing speed progression and district adjustments.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-163 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
