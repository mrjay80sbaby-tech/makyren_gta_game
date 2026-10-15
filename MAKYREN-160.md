# MAKYREN-160 — Name Pedestrian Lane Offset

## Scope
Replace the inline horizontal spawn offset for ambient pedestrians with a named constant.

## Implemented
- Added `pedestrianLaneOffsetX` with the existing value `10.25`.
- Reused it in pedestrian spawn placement for both sides of the street.
- Preserved all spawn coordinates and behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-161 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
