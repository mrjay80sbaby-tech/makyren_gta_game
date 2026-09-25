# MAKYREN-074 — Cache Vehicle Headlight References

## Scope
Remove an unnecessary per-frame light-array filter from the Visual-004 lighting update.

## Implemented
- Added a `headlightPoints` collection when the two vehicle headlight point lights are created.
- Updated `updateLighting()` to iterate that cached collection directly.
- Removed the per-frame `scene.lights.filter(...)` lookup for headlights.
- Preserved night/day intensity behavior and all existing vehicle lighting.

## Verification
Source inspection confirmed the lighting loop was filtering the entire scene light collection every frame to find the two `headlight_point` lights. The correction keeps direct references to those lights and reuses them. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-075 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
