# MAKYREN-060 — Centralize Signal Phase Telemetry Sync

## Scope
Make the existing signal phase setter the single synchronization point for exposed phase timing.

## Implemented
- `setSignal(phase)` now updates `signalState.remaining` from the selected phase duration.
- Preserves the existing light-material updates and phase state.
- Bumped traffic-system telemetry version from `032` to `033`.
- No gameplay or signal-cycle behavior changed.

## Verification
Source inspection confirmed signal phase changes already flow through `setSignal()`. Centralizing the remaining-time assignment there reduces duplicated transition synchronization while preserving the existing per-frame countdown. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-061 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
