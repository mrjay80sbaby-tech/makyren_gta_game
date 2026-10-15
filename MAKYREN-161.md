# MAKYREN-161 — Name Pedestrian Animation Phase Spacing

## Scope
Replace the inline per-pedestrian animation phase spacing with a named constant.

## Implemented
- Added `pedestrianBobPhaseSpacing` with the existing value `1.7`.
- Reused it when assigning each pedestrian's animation phase.
- Preserved the existing phase values and animation timing.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-162 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
