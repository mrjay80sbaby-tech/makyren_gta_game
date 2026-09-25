# MAKYREN-075 — Reuse Mode-Aware Traffic Distance Telemetry

## Scope
Remove duplicated nearest-traffic distance calculation from the proximity HUD.

## Implemented
- Reused the existing `window.MakyrenTraffic.nearestTrafficDistance` getter in the proximity HUD.
- Preserved mode-aware behavior: ambient vehicles while driving and pedestrians while on foot.
- Preserved the existing proximity thresholds and messages.
- Eliminated a second per-frame distance reduction over the same traffic collections.

## Verification
Source inspection confirmed the telemetry getter already provided the exact mode-aware distance required by the HUD. The HUD now consumes that shared value instead of recalculating it. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-076 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
