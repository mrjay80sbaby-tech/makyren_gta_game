# MAKYREN-138 — Cache Vehicle Entry Proximity Gate

## Scope
Cache the existing vehicle-entry proximity comparison so the E-key transition branch reuses a boolean instead of repeating the threshold comparison.

## Implemented
- Added `canEnterVehicle` from the existing squared-distance value.
- Reused it for vehicle entry without changing the 25-unit threshold or behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-139 — inspect the current Visual-004 production state and execute the next smallest scoped correction or optimization.
