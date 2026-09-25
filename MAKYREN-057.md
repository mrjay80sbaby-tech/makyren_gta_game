# MAKYREN-057 — Traffic Signal Phase Timing Telemetry

## Scope
Expose the active traffic signal's remaining phase time through the existing signal state.

## Implemented
- Added live `signalState.remaining` timing metadata.
- Remaining time is clamped to zero and derived from the active signal cycle entry.
- Existing signal transitions and red-light behavior remain unchanged.

## Verification
Source inspection confirmed the signal system already tracked elapsed phase time but did not expose the remaining duration. The correction adds telemetry only and does not alter the cycle timings or traffic behavior. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-058 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
