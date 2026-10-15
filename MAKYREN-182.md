# MAKYREN-182 — Skip Redundant Inactive Collision Resets

## Scope
Avoid repeating collision-state cleanup on every frame after collision feedback has already expired.

## Implemented
- Added an active-state guard to the existing collision-feedback timeout condition.
- Expiration still clears `active` and `lastType` after the same 350 ms interval.
- Once inactive, the timeout branch no longer repeats the same assignments each frame.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-183 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
