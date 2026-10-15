# MAKYREN-156 — Name Pedestrian Wrap Boundary

## Scope
Replace the inline pedestrian Z-axis wrap values in the Visual-004 traffic system with a named constant.

## Implemented
- Added `pedestrianWrapBoundaryZ` with the existing value of `34`.
- Reused it for both positive and negative pedestrian wrap checks and destinations.
- Preserved existing pedestrian movement and wrap behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-157 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
