# MAKYREN-105 — Avoid Empty Animation Hook Allocation

## Scope
Remove a per-update empty-array allocation from the animation hook dispatcher when an entity has no registered hooks.

## Implemented
- Read the existing `animationHooks` metadata directly.
- Return immediately when no hooks are registered.
- Iterate the existing hook array only when present.
- Preserve the public registration/update API and hook execution behavior.

## Verification
Source inspection confirmed entities without animation hooks no longer create an empty array during each update call. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-106 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
