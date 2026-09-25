# MAKYREN-078 — Avoid Redundant Performance HUD Writes

## Scope
Reduce unnecessary DOM text updates in the Visual-004 performance HUD.

## Implemented
- Cached the last performance HUD string.
- Only updates `perfHud.textContent` when the displayed FPS/active-mesh string changes.
- Preserved the existing 500ms telemetry cadence and `window.MakyrenPerf` data.
- Preserved the SSR low-FPS fallback behavior.

## Verification
Source inspection identified a periodic performance HUD write that could assign the same text repeatedly. The correction adds a small markup cache without changing telemetry timing or fallback logic. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-079 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
