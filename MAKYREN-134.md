# MAKYREN-134 — Carry Cached Mission State Through Frame

## Scope
Avoid rereading `mission.state` after mission input/progression has already established the state for the current gameplay frame.

## Implemented
- Cache mission state after replay/input handling.
- Update the cached state when vehicle entry advances APPROACH to DRIVE.
- Update the cached state when checkpoint completion advances DRIVE to COMPLETE.
- Reuse the cached state for checkpoint logic and HUD presentation.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-135 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
