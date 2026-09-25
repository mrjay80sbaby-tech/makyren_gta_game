# MAKYREN-084 — Cache Checkpoint Emissive Color Object

## Scope
Reduce per-frame allocation in the Visual-004 mission checkpoint marker animation.

## Implemented
- Added a cached base emissive color for the mission checkpoint marker.
- Reused that color object during the checkpoint pulse update with in-place scaling.
- Preserved the existing pulse timing, color, and visual behavior.

## Verification
Source inspection identified a new `Color3` allocation inside the active checkpoint animation path. The implementation now reuses a cached color object instead. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-085 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
