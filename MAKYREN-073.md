# MAKYREN-073 — Cache Mission HUD Reference

## Scope
Avoid repeated DOM lookup for the production mission HUD during the per-frame gameplay update.

## Implemented
- Cached the existing `#hud` element once during scene setup.
- Preserved its `role="status"` and `aria-live="polite"` semantics.
- Removed the repeated `getElementById('hud')` lookup from the gameplay loop.
- Preserved the existing cached-markup optimization from MAKYREN-070.
- No mission or gameplay behavior changed.

## Verification
Source inspection identified the HUD element lookup inside the per-frame gameplay path. The reference is now initialized once and reused. The implementation commit was corrected after inspection to preserve the accessibility attributes while removing the repeated lookup. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-074 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
