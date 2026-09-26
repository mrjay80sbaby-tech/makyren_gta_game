# MAKYREN-135 — Correct Mission State Cache Initialization

## Scope
Correct the mission-state cache introduced by MAKYREN-134 so it is initialized before the E-key transition logic and refreshed after replay handling.

## Implemented
- Initialize `missionState` before vehicle-entry logic uses it.
- Refresh the cached state after replay handling so replay resets are reflected in the current frame.
- Preserve the MAKYREN-134 cached-state reuse through checkpoint/HUD logic.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-136 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
