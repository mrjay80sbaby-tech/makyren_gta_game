# MAKYREN-133 — Cache Mission Checkpoint Coordinate

## Scope
Reuse the mission checkpoint coordinate within the same gameplay frame instead of repeatedly reading the mission object property during progression and HUD distance work.

## Implemented
- Cache `mission.checkpointZ` once per gameplay frame.
- Reuse the cached coordinate for checkpoint completion and displayed distance.
- Preserve mission progression and HUD behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-134 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
