# MAKYREN-069 — Remove Duplicate Visual-004 Render Call

## Scope
Remove the redundant per-frame Babylon.js render invocation from the gameplay update path.

## Implemented
- Removed the `scene.render()` call immediately after `updateGameplay()` state updates.
- Preserved the single render call owned by the existing engine render loop.
- No gameplay, camera, HUD, traffic, collision, or mission logic changed.

## Verification
Source inspection confirmed two per-frame `scene.render()` calls existed in `visual-004/src/main.js`: one after gameplay updates and one in the engine render loop. The gameplay-path call was redundant because the render loop already renders the completed frame. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-070 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
