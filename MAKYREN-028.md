# MAKYREN-028 — Collision-Aware Traffic + Ambient Behavior

Status: implemented; automated Visual-004 build verification pending

## Objective

Extend the validated Visual-004 vertical slice with safer traffic proximity behavior, lightweight pedestrian and traffic-signal logic, animation hooks, and a production-safe extension point for the existing free GLB/PBR asset pipeline.

## Implemented

- Collision-aware traffic proximity response around the player vehicle
- Traffic separation response with escalating proximity HUD feedback
- Traffic signal cycle with green, yellow, and red phases
- Red-light stopping behavior for ambient traffic approaching the crosswalk
- Lightweight pedestrian population with mobile-scaled counts
- Pedestrian bounded sidewalk movement and animation-ready entity metadata
- Public `window.MakyrenAnimationHooks` registration/update API
- Public `window.MakyrenTraffic` diagnostics/state API
- Visual-004 integration isolated in `src/traffic_system.js` so the validated renderer remains intact
- Existing hero vehicle GLB/PBR asset pipeline preserved; no new binary asset burden added in this slice

## Performance intent

The traffic system uses the existing quality tier: four pedestrians on high/medium and two on mobile. Traffic entities remain the existing lightweight pooled meshes. Signal geometry and proximity UI are intentionally small and procedural.

## Verification

The main branch push triggers the existing Visual-004 Pages workflow, which installs the Visual-004 dependencies and runs the Vite production build. Final smoke-test status will be recorded after that workflow completes.

## Next

MAKYREN-029 — complete the verified GLB/PBR asset replacement pass and integrate district-aware traffic behavior.