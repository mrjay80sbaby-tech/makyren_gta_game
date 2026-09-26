# MAKYREN-131 — Cache Mission State for HUD

## Scope
Reduce repeated `mission.state` property reads during the per-frame checkpoint/HUD presentation work.

## Implemented
- Cache the mission state once after progression logic completes for the frame.
- Reuse the cached state for DRIVE/APPROACH/COMPLETE presentation decisions.
- Preserve mission progression and HUD output.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-132 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
