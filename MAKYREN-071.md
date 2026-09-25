# MAKYREN-071 — Preserve Mission HUD Ownership

## Scope
Prevent the lighting update loop from overwriting the production mission HUD every frame.

## Implemented
- Removed the legacy HUD `innerHTML` assignment from `updateLighting()`.
- Preserved all dynamic lighting calculations, street-light state, and headlight state.
- Leaves the mission/gameplay HUD as the single owner of the `#hud` content.
- No mission, traffic, collision, or movement logic changed.

## Verification
Source inspection showed `updateLighting()` was still replacing the mission HUD every frame, undermining the cached HUD update introduced in MAKYREN-070. The correction removes that competing write. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-072 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
