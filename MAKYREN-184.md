# MAKYREN-184 — Clear Stuck Input on Focus Loss

## Scope
Prevent held movement keys from remaining active if the browser loses focus before keyup is delivered.

## Implemented
- Clear the gameplay key set when the window blurs.
- Clear held keys when the document becomes hidden.
- Keep existing keydown/keyup and gameplay movement behavior unchanged.

## Verification
Source inspection only; no local build or runtime test performed.

## Next
MAKYREN-185 — inspect current Visual-004 production source and implement one small scoped improvement.
