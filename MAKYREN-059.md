# MAKYREN-059 — Sync Signal Remaining on Phase Transition

## Scope
Keep exposed traffic-signal remaining-time telemetry synchronized at the exact moment a signal changes phase.

## Implemented
- Reset `signalState.remaining` to the new phase duration immediately after `setSignal()`.
- Preserves the existing elapsed-time reset and signal-cycle behavior.
- Bumped the traffic-system telemetry version from `031` to `032`.
- No gameplay or signal timing changes.

## Verification
Source inspection confirmed the normal per-frame calculation updates remaining time, but a phase transition could briefly retain the previous phase's remaining value until the next render update. The correction synchronizes it immediately. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-060 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
