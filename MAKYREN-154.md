# MAKYREN-154 — Name District Boundary

## Scope
Replace the inline Z-axis threshold used by the traffic/pedestrian district classifier with a named constant.

## Implemented
- Added `districtBoundaryZ` with the existing value of `10`.
- Reused it in the downtown district boundary check.
- Preserved district assignments and behavior at all coordinates.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-155 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
