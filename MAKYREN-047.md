# MAKYREN-047 — Mission Replay Input Latch

## Scope
Prevent a held R key from repeatedly resetting the mission every render frame.

## Implemented
- Added a dedicated replay input latch in `visual-004/src/main.js`.
- R now triggers `replayMission()` once per key press.
- Holding R no longer repeatedly increments replay telemetry or continuously resets player, vehicle, damage, and mission state.
- Existing E vehicle/service interaction behavior is unchanged.

## Verification
The current production source was inspected and the change was committed directly to the Visual-004 path. No local/runtime build was executed, so no successful runtime or build verification is claimed.

## Next
MAKYREN-048 — inspect the current Visual-004 production state and make the next smallest scoped gameplay/presentation correction.
