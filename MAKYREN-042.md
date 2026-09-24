# MAKYREN-042 — Mission completion/replay loop polish

## Scope
Polish the completed mission state and make replay/reset behavior explicit and consistent without changing the mission objective or adding backend dependencies.

## Implemented
- Added a shared `replayMission()` path used by the existing `R` reset control.
- Replay now explicitly clears `completedAt` and transient mission feedback before saving the approach state.
- Replay restores the player, vehicle, collision state, vehicle health, and repair feedback to a clean starting state.
- Exposed `window.MakyrenMissionProgress.replay()` for deterministic mission replay/testing.
- Completed missions continue to hide the active checkpoint marker until replay begins.
- Existing checkpoint completion, mission persistence, vehicle service, traffic, and collision systems remain intact.
- No backend or external dependency added.

## Verification
Implementation committed. Runtime/build verification is pending.

## Next
MAKYREN-043 — Mission replay feedback and transition polish.
