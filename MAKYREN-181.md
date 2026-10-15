# MAKYREN-181 — Name Collision Feedback Duration

## Scope
Make the duration of active collision feedback explicit and easier to maintain.

## Implemented
- Added `collisionActiveDurationMs = 350` beside the existing collision thresholds.
- Replaced the inline 350 ms comparison with the named constant.
- Preserved the existing timeout and collision feedback behavior exactly.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-182 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
