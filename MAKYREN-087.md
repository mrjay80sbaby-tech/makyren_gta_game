# MAKYREN-087 — Cache Ambient Traffic Base-Speed Fallbacks

## Scope
Remove a repeated per-frame array lookup from the active Visual-004 traffic update while preserving the existing defensive base-speed fallback behavior.

## Implemented
- Cached each ambient vehicle's fallback base speed once during traffic-system initialization.
- Replaced `traffic.indexOf(vehicle)` inside the per-frame traffic loop with an O(1) map lookup.
- Preserved the existing `metadata.baseSpeed` value as the primary source when present.
- Preserved the prior numeric fallback behavior for any vehicle missing metadata.

## Verification
Source inspection confirmed the traffic render callback no longer calls `traffic.indexOf(vehicle)` for base-speed fallback resolution. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-088 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
