# MAKYREN-089 — Avoid Per-Frame Signal Phase Lookup

## Scope
Remove a repeated `signalCycle.find()` allocation/scan from the active Visual-004 traffic frame loop while preserving signal timing behavior.

## Implemented
- Replaced the per-frame signal phase search with direct indexing based on the three known signal phases.
- Preserved the existing green/yellow/red cycle order and durations.
- Left `setSignal()` phase lookup unchanged because it runs only on signal phase transitions.

## Verification
Source inspection confirmed the active frame callback no longer performs `signalCycle.find()` for the current phase. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-090 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
