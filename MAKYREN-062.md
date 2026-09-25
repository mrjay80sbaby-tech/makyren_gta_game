# MAKYREN-062 — On-Foot Collision Type Telemetry

## Scope
Classify the source of the latest on-foot traffic collision in the existing collision telemetry.

## Implemented
- Added `collisionState.lastType`.
- Records `pedestrian` when pedestrian separation triggers a collision.
- Records `vehicle` when ambient-vehicle separation triggers a collision.
- Preserves existing separation, cooldown, and impact behavior.
- Bumped traffic-system telemetry version from `034` to `035`.

## Verification
Source inspection confirmed both on-foot collision paths already update the shared collision state. The correction adds source classification without changing collision thresholds or movement. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-063 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
