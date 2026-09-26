# MAKYREN-128 — Gate Mission Checkpoint Telemetry

## Scope
Avoid calculating checkpoint distance through the public mission telemetry API when the mission is not in the DRIVE state.

## Implemented
- Return the existing checkpoint distance only during DRIVE.
- Return zero for APPROACH and COMPLETE states.
- Preserve the public `checkpointDistance` API shape and active-drive value.

## Verification
Source inspection confirmed checkpoint distance calculation is now state-gated at the mission telemetry API. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-129 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
