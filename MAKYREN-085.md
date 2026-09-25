# MAKYREN-085 — Correct Vehicle Collision Telemetry Type

## Scope
Correct the Visual-004 collision telemetry label for ambient vehicle impacts against the player vehicle.

## Implemented
- Changed the player-vehicle versus ambient-vehicle collision path to record `lastType: 'vehicle'`.
- Preserved the existing collision push, impact counting, and active-state behavior.
- Left the on-foot pedestrian and vehicle collision telemetry paths unchanged.

## Verification
Source inspection confirmed the targeted collision branch now reports `vehicle` instead of `pedestrian`. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-086 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
