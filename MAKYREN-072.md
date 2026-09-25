# MAKYREN-072 — Add Mission HUD Status Semantics

## Scope
Expose the existing dynamic mission HUD as a semantic status region for assistive technology.

## Implemented
- Added `role="status"` to the existing `#hud` element when first accessed.
- Added `aria-live="polite"` so mission, interaction, repair, and collision feedback can be announced without forcing focus.
- Guarded the attribute setup so it is not repeatedly rewritten each frame.
- Preserved existing HUD markup and gameplay behavior.

## Verification
Source inspection confirmed the mission HUD is dynamically updated but lacked semantic status/live-region attributes. The correction adds those attributes through the existing HUD lookup with a one-time guard. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-073 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
