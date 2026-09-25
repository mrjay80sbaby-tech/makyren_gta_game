# MAKYREN-080 — Cache Gameplay Frame Timestamp

## Scope
Avoid repeated high-resolution clock reads during the Visual-004 gameplay update.

## Implemented
- Captured `performance.now()` once at the start of `updateGameplay()`.
- Reused that frame timestamp for mission transition telemetry, vehicle-service marker pulsing, checkpoint animation, and feedback timing within the gameplay update.
- Preserved all timing calculations and visible behavior.

## Verification
Source inspection found seven `performance.now()` calls within the gameplay update. The correction reduces those to one timestamp read per gameplay update while preserving the same timestamp basis for all affected operations. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-081 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
