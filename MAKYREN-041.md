# MAKYREN-041 — Mission state/feedback presentation polish

## Scope
Polish mission-state presentation and checkpoint visibility without changing the underlying mission rules.

## Implemented
- Added explicit `APPROACH`, `DRIVE`, and `COMPLETE` mission-stage presentation to the HUD.
- Checkpoint marker presentation now cleanly enables only during the active drive stage.
- Active checkpoint marker receives a subtle pulse/emissive presentation while the objective is active.
- Mission progress API now exposes the current stage and live checkpoint distance.
- Existing mission persistence, checkpoint completion, replay/reset, vehicle service, traffic, and collision systems remain intact.
- No backend or external dependency added.

## Verification
Implementation committed. Runtime/build verification is pending.

## Next
MAKYREN-042 — Mission completion/replay loop polish.
