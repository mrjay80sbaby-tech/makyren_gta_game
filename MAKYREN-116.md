# MAKYREN-116 — Cache Gameplay Movement State

## Scope
Avoid recomputing the same movement boolean for character animation, movement branching, and walking animation updates within a gameplay frame.

## Implemented
- Added a single `isMoving` boolean derived from the existing forward/strafe input state.
- Reused it for animation activation, movement branching, and body movement animation.
- Preserved existing movement and animation behavior.

## Verification
Source inspection confirmed the repeated movement condition is now evaluated once per gameplay frame. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-117 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
