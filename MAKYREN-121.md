# MAKYREN-121 — Skip Inactive Checkpoint Scaling

## Scope
Avoid writing checkpoint marker scale every gameplay frame when the mission checkpoint is inactive.

## Implemented
- Removed the inactive-state `scaling.setAll(1)` write.
- Preserve the existing enabled/visibility gate so the checkpoint marker remains inactive outside the DRIVE state.
- Preserve active checkpoint pulse scaling and emissive animation.

## Verification
Source inspection confirmed inactive checkpoint frames no longer perform the redundant scale write. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-122 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
