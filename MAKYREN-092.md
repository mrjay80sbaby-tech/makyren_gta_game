# MAKYREN-092 — Reuse Cached Signal Index in Frame Loop

## Scope
Remove the remaining per-frame signal-phase conditional lookup from the Visual-004 traffic loop by using the cached signal index directly.

## Implemented
- Replaced phase-string conditional indexing with `signalCycle[signalIndex]`.
- Preserved the existing signal transition logic and green/yellow/red ordering.
- No changes to public signal telemetry or timing behavior.

## Verification
Source inspection confirmed the active frame loop now reads the current signal directly from the cached index. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-093 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
