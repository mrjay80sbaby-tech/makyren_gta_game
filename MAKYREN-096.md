# MAKYREN-096 — Cache On-Foot Mode State Per Traffic Frame

## Scope
Avoid repeated `playerRoot?.isEnabled()` checks inside the active traffic frame by caching the player's current movement mode once.

## Implemented
- Cached `onFoot` once at the start of the traffic frame.
- Reused it for pedestrian nearest-distance tracking and on-foot collision handling.
- Preserved the existing mode checks and proximity behavior.

## Verification
Source inspection confirmed the frame callback now evaluates player on-foot state once. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-097 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
