# MAKYREN-058 — Initialize Signal Remaining Telemetry

## Scope
Ensure the traffic signal's newly exposed remaining-phase telemetry is valid immediately at system initialization.

## Implemented
- Initialized `signalState.remaining` to the active green phase duration (7 seconds).
- Bumped the traffic-system telemetry version from `030` to `031`.
- Existing per-frame remaining-time calculation continues to update the value after initialization.
- No signal timings or traffic behavior were changed.

## Verification
Source inspection confirmed the telemetry could otherwise be undefined during the initialization window before the first render update. The correction provides a deterministic initial value. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-059 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
