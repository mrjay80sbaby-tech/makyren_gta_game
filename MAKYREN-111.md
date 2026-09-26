# MAKYREN-111 — Gate Checkpoint Distance Calculation

## Scope
Avoid checkpoint-distance square-root work when the mission is not in the active drive stage.

## Implemented
- Compute checkpoint distance squared once for the HUD path.
- Only convert it to a distance while the mission is in the `drive` state.
- Preserve the displayed checkpoint distance and mission behavior.

## Verification
Source inspection confirmed the checkpoint distance conversion is now gated to the active drive stage. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-112 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
