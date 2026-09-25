# MAKYREN-054 — Live Pedestrian Traffic Metadata

## Scope
Expose the same live district/profile telemetry pattern for pedestrians that the traffic system already exposes for ambient vehicles.

## Implemented
- Added live `districtLabel` metadata to each pedestrian.
- Added live `targetSpeed` metadata based on the pedestrian's base speed and current district profile.
- Kept `speed` synchronized to `targetSpeed` before movement.
- Preserved existing pedestrian direction, district transitions, looping bounds, and animation hooks.

## Verification
Source inspection confirmed the dynamic pedestrian district-speed correction from MAKYREN-053 was active. This ticket adds observability without changing the movement architecture. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-055 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
