# MAKYREN-043 — Mission replay feedback and transition polish

## Scope
Polish mission replay and state transitions with clear transient feedback and lightweight telemetry, without changing the underlying mission rules.

## Implemented
- Added mission transition telemetry for replays, vehicle-entry drive transitions, and checkpoint completions.
- Replay now presents `MISSION REPLAYED • RETURN TO VEHICLE` feedback.
- Entering the vehicle from the approach state presents `VEHICLE ENTERED • DRIVE TO NORTH CHECKPOINT`.
- Checkpoint completion retains the existing `CHECKPOINT REACHED • BLOCK SECURED` feedback while recording the completion transition.
- Exposed mission telemetry through `window.MakyrenMissionProgress.telemetry`.
- Existing mission persistence, replay API, checkpoint marker behavior, vehicle service, traffic, and collision systems remain intact.
- No backend or external dependency added.

## Verification
Implementation committed. Runtime/build verification is pending.

## Next
MAKYREN-044 — Mission HUD and objective readability polish.
