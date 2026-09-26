# MAKYREN-125 — Simplify Service Telemetry Mode Gate

## Scope
Remove a redundant vehicle-mode dependency from the service telemetry calculation while preserving the caller's vehicle-mode gating.

## Implemented
- Keep the nearest service point's radius check independent of the global vehicle mode.
- Cache the nearest point radius once for the final service-zone comparison.
- Preserve the existing out-of-range reset while on foot and all repair behavior.

## Verification
Source inspection confirmed service telemetry now evaluates the nearest point directly, while `updateGameplay` continues to call it only in vehicle mode and resets telemetry on foot. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-126 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
