# MAKYREN-130 — Cache Mission Drive State

## Scope
Avoid repeating the mission drive-state comparison during the per-frame checkpoint and HUD work.

## Implemented
- Cache `mission.state === 'drive'` once as `missionDrive`.
- Reuse it for checkpoint activation, checkpoint distance, and the distance HUD branch.
- Preserve mission progression and HUD behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-131 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
