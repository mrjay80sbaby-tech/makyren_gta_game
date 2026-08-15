# MAKYREN-026 — Production Hooks, Boundaries, and Performance Instrumentation

Status: implemented and smoke-tested

## Objective

Harden the playable Visual-004 slice for continued production work by adding world-boundary clamps, an optional GLB asset loader with procedural fallback, and an opt-in performance HUD.

## Implemented

The playable character and vehicle are constrained to the authored street block. The renderer exposes `window.MakyrenLoadAsset(slot)` for future free licensed GLB replacements while leaving the procedural scene active when an asset is unavailable. Loading `?debug=1` adds a performance overlay and publishes `window.MakyrenPerf` with the selected tier, frames per second, active mesh count, and total mesh count.

## Verification

The Visual-004 production build passes syntax and Vite validation. Desktop movement, vehicle entry and exit, reset, mission completion, local mission persistence, and mobile touch-control initialization all pass Playwright smoke tests without page errors. The performance HUD initializes on the mobile tier with WebGL readiness.

## Next

MAKYREN-027 — add collision-aware interaction prompts, animation hooks, traffic/ambient integration, and replace the highest-visibility procedural assets with verified free GLB/PBR content.
