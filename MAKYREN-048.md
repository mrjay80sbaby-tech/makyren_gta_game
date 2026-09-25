# MAKYREN-048 — Activate District Traffic Speed Profiles

## Scope
Make the existing Visual-004 district traffic speed metadata drive the ambient traffic movement without changing traffic lanes, signals, collision behavior, missions, garage systems, or controls.

## Implemented
- Updated `visual-004/src/traffic_system.js` to calculate the existing district-adjusted `targetSpeed` once per traffic update.
- The calculated target speed is now assigned to the live traffic vehicle's `speed` property, which is already consumed by the Visual-004 movement loop.
- Downtown, Southside, and Northside speed profiles now affect actual ambient traffic movement instead of remaining metadata-only.
- Existing base speeds, lane direction, red-light behavior, proximity handling, and collision logic remain unchanged.

## Verification
Repository source inspection confirmed the existing movement loop consumes each traffic vehicle's `speed` property and that the district system already calculates `targetSpeed`. The implementation was committed directly to the production Visual-004 path. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-049 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
