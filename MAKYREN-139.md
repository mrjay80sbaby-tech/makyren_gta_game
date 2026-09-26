# MAKYREN-139 — Cache Traffic Engine Reference

## Scope
Avoid resolving the Babylon engine from the scene on every traffic-system frame.

## Implemented
- Cache `scene.getEngine()` once during traffic-system initialization.
- Reuse the cached engine reference for per-frame delta-time reads.
- Preserve traffic timing behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-140 — inspect the current Visual-004 production state and execute the next smallest scoped correction or optimization.
