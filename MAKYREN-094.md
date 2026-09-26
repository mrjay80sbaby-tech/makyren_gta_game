# MAKYREN-094 — Reuse Cached Signal Index in Signal Setup

## Scope
Remove the remaining signal-cycle search from `setSignal()` by using the already cached phase index.

## Implemented
- `setSignal()` now reads the active duration directly from `signalCycle[signalIndex]`.
- Preserved the public phase string and lamp-state behavior.
- Preserved the existing initialization and transition flow, where `signalIndex` is authoritative for the active cycle entry.

## Verification
Source inspection confirmed `setSignal()` no longer searches the signal-cycle array. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-095 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
