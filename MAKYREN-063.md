# MAKYREN-063 — Clear Stale Collision Type Telemetry

## Scope
Keep collision-source telemetry synchronized with the existing collision-active cooldown.

## Implemented
- Clear `collisionState.lastType` when the 350 ms collision window expires.
- Preserve the existing `collisionState.active` cooldown behavior.
- Bumped traffic-system telemetry version from `035` to `036`.
- No collision thresholds, movement, or damage behavior changed.

## Verification
Source inspection confirmed `lastType` could remain populated after `active` became false. The correction keeps source classification aligned with active collision state. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-064 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
