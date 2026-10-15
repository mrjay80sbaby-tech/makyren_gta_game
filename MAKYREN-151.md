# MAKYREN-151 — Name On-Foot Collision Thresholds

## Scope
Replace inline squared-distance thresholds in on-foot pedestrian and vehicle collision checks with named constants.

## Implemented
- Added `pedestrianCollisionRadiusSquared` for pedestrian separation.
- Added `onFootVehicleCollisionRadiusSquared` for on-foot ambient-vehicle separation.
- Preserved the exact threshold values and collision behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-152 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
