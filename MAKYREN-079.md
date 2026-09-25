# MAKYREN-079 — Avoid Redundant HUD Feedback Filtering

## Scope
Remove the repeated truthy-filter allocation from the Visual-004 mission HUD feedback composition.

## Implemented
- Replaced the per-update `filter(Boolean)` call with a direct reducer that appends only present feedback segments.
- Preserved the existing feedback ordering and ` • ` separator.
- Preserved the existing HUD markup cache and mission behavior.

## Verification
Source inspection confirmed the feedback expression performed a temporary filtered array on each gameplay HUD update. The correction keeps the same output while avoiding that intermediate filtered-array operation. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-080 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
