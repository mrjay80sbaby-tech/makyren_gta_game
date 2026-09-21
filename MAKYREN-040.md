# MAKYREN-040 — Mission objective/checkpoint progression polish

## Scope
Polish the existing first-block mission flow without changing the underlying movement, vehicle, or checkpoint mechanics.

## Implemented
- Added explicit mission progression state persistence for approach, drive, and complete states.
- Added a mission completion timestamp to the persisted mission record.
- Added checkpoint completion feedback: `CHECKPOINT REACHED • BLOCK SECURED`.
- HUD now labels the active objective and shows approximate meters remaining to the north checkpoint while driving.
- HUD now clearly identifies the completed mission state and replay instruction.
- Added `window.MakyrenMissionProgress` for mission feedback/state inspection without introducing a backend dependency.
- Existing checkpoint detection, `R` replay/reset behavior, vehicle service systems, traffic, and collision systems remain intact.
- No backend or external dependency added.

## Verification
Implementation committed. Runtime/build verification is pending.

## Next
MAKYREN-041 — Mission state/feedback presentation polish.
