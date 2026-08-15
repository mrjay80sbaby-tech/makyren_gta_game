# MAKYREN-027 — World Guidance and Ambient Traffic

Status: implemented and smoke-tested

## Objective

Make the first playable objective readable in the world and add lightweight ambient traffic so the vertical slice communicates movement, direction, and activity without requiring a large asset download.

## Implemented

Visual-004 now displays an animated emissive checkpoint ring while the player is in driving mode. The marker disappears after the north checkpoint is reached. Ambient traffic uses tier-aware entity counts: five vehicles on high and medium tiers, two on mobile, with road-bound wrapping movement.

## Verification

The fresh Visual-004 build passes syntax and Vite production validation. Desktop movement, vehicle entry and exit, mission completion and persistence, mobile touch controls, and page-error checks pass against the marker build. The high-tier capture shows the added traffic vehicles alongside the existing street dressing.

## Next

MAKYREN-028 — integrate collision-aware traffic proximity, simple pedestrian/traffic signal behavior, animation hooks, and the first verified free GLB/PBR replacement asset.
