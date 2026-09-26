# MAKYREN-122 — Cache Ambient Traffic Mesh Reference

## Scope
Reduce repeated nested property access in the per-frame ambient traffic movement loop.

## Implemented
- Cache each ambient traffic mesh reference once per iteration.
- Reuse the cached mesh for speed fallback, position movement, and wrap checks.
- Preserve traffic movement and wrap behavior.

## Verification
Source inspection confirmed the loop now resolves `traffic.mesh` once per vehicle iteration. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-123 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
