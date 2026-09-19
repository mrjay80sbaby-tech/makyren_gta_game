# MAKYREN-029 — District-Aware Traffic + Asset Replacement Gate

Status: implemented; automated Visual-004 build verification pending

## Objective

Advance the Visual-004 production slice with district-aware ambient behavior while preserving the existing traffic, signal, pedestrian, and asset-loader architecture.

## Implemented

- District classification for Downtown, Southside, and Northside road zones.
- District-specific ambient traffic target-speed profiles.
- District-specific pedestrian movement profiles.
- Per-vehicle district metadata for runtime systems and diagnostics.
- Public district profiles and vehicle district counts through `window.MakyrenTraffic`.
- Existing red-light stopping, proximity separation, pedestrian hooks, and signal-cycle behavior preserved.
- Existing GLB/PBR loader and procedural fallbacks preserved.

## Asset replacement gate

The existing production asset contract remains intact. The verified Street Lamp 01 GLB is already integrated with procedural fallback behavior. The Tree Small 02 source remains documented as a future optimized replacement because its source delivery is too large for direct mobile/browser delivery; no unoptimized binary asset is added merely to mark the milestone complete.

## Performance intent

District logic is metadata and scalar math only. No new per-frame geometry or binary asset burden is introduced. Mobile continues using the reduced traffic/pedestrian counts established in MAKYREN-028.

## Verification

The Visual-004 Pages workflow should validate the production build after the main-branch push. Browser/mobile smoke testing remains the final runtime gate.

## Next

MAKYREN-030 — move from lightweight ambient behavior into stronger pedestrian/vehicle interaction and collision response while preserving the Visual-004 performance tiers.
