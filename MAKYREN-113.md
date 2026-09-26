# MAKYREN-113 — Gate Checkpoint Distance Math

## Scope
Remove checkpoint-distance arithmetic outside the active drive stage while preserving the mission HUD output.

## Implemented
- Moved checkpoint squared-distance math inside the drive-state conditional expression.
- Preserve zero distance when the mission is not in the drive stage.
- Preserve the existing rounded HUD distance during the drive stage.

## Verification
Source inspection confirmed checkpoint distance math is now gated by mission state. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-114 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
