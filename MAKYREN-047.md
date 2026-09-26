# MAKYREN-047 — Mobile Touch Control Release Safety

## Scope
Harden the existing Visual-004 touch controls so interrupted or canceled pointer interactions cannot leave movement keys latched.

## Implemented
- Added pointer capture for active touch movement buttons.
- Added cleanup on `pointerup`, `pointercancel`, and lost pointer capture.
- Added global pointer-release cleanup for active touch movement keys.
- Preserved the existing WASD/arrow mapping and desktop behavior.

## Implementation
- Commit: `d7ebf747fe022208052bbbbb30f9c1336e821973`

## Verification
The current production source was inspected before the change and the implementation was committed. No local/runtime build was executed, so no successful build or device smoke test is claimed.

## Next
MAKYREN-048 — inspect the current Visual-004 production state and execute the next smallest scoped improvement.
