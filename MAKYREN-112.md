# MAKYREN-112 — Correct Checkpoint Distance Initialization

## Scope
Correct the checkpoint-distance calculation introduced by MAKYREN-111 so its squared-distance value is initialized before use.

## Implemented
- Moved `checkpointDistanceSquared` initialization before the derived checkpoint distance.
- Preserved the drive-state gating introduced by MAKYREN-111.
- No mission behavior or displayed distance changes were intended.

## Verification
Source inspection confirmed the initialization order is valid and the derived distance references an already initialized value. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-113 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
