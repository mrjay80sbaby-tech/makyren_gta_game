# MAKYREN-081 — Correct Gameplay Timestamp and Pulse Cache

## Scope
Correct the gameplay-frame timestamp introduced by the preceding performance cleanup and reuse the shared marker pulse calculation.

## Implemented
- Restored a valid `performance.now()` read at the start of `updateGameplay()`.
- Removed the invalid self-referential `const now=now` declaration.
- Cached the shared `Math.sin(now*.006)` phase and pulse used by service/checkpoint marker animation.
- Preserved mission timing, HUD feedback timing, and marker animation behavior.

## Verification
Source inspection of the resulting commit confirmed one valid gameplay timestamp initialization, no remaining `const now=now` self-assignment, one cached pulse phase, and reuse of that pulse across marker animation. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-082 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
