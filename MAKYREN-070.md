# MAKYREN-070 — Avoid Redundant HUD DOM Writes

## Scope
Reduce unnecessary per-frame DOM mutation in the Visual-004 mission HUD.

## Implemented
- Added a cached `lastHudMarkup` value.
- Build the mission HUD markup as a string each update.
- Only assign `hud.innerHTML` when the generated markup differs from the previous frame.
- Preserved all existing HUD content and mission behavior.

## Verification
Source inspection identified the mission HUD as an unconditional `innerHTML` write inside the per-frame gameplay update. The correction keeps the same rendered markup while avoiding redundant DOM replacement when HUD state has not changed. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-071 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
