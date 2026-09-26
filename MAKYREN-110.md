# MAKYREN-110 — Centralize Traffic Collision Thresholds

## Scope
Centralize the repeated ambient-traffic collision bounds used by the vehicle collision gate without changing collision behavior.

## Implemented
- Added named constants for traffic collision half-width and half-depth.
- Replaced the inline collision literals with those constants.
- Preserved the existing collision thresholds and response logic.

## Verification
Source inspection confirmed the collision gate uses centralized constants with unchanged values. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-111 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
