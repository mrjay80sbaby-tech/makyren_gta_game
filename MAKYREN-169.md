# MAKYREN-169 — Avoid Redundant Ambient Traffic Speed Sync

## Scope
Avoid reassigning an ambient traffic entry's cached speed when its mesh does not expose a changed speed override.

## Implemented
- Synchronize `traffic.speed` only when `mesh.speed` is non-nullish and differs from the cached speed.
- Preserve the existing nullish fallback behavior, including externally supplied zero-speed overrides.
- Leave movement and wrap-boundary calculations unchanged.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-170 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
