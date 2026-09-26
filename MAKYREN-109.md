# MAKYREN-109 — Gate Nearest Vehicle Scan by Drive Mode

## Scope
Avoid per-vehicle player-distance work when the player is on foot, where nearest vehicle telemetry is not the active proximity source.

## Implemented
- Skip nearest-vehicle distance and vehicle-proximity calculations unless the player vehicle is active.
- Preserve the existing nearest vehicle telemetry and driving proximity behavior.
- Keep pedestrian telemetry active independently for on-foot mode.

## Verification
Source inspection confirmed the ambient vehicle distance scan is now gated by drive mode. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-110 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
