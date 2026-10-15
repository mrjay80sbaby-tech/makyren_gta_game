# MAKYREN-170 — Share Traffic Signal Lamp Materials

## Scope
Reduce redundant material instances for traffic signal lamps that always display the same phase color.

## Implemented
- Create one reusable lamp material each for red, yellow, and green.
- Assign the matching shared material to both sides' lamps instead of cloning a separate material for every lamp mesh.
- Keep the existing `setSignal` phase colors and lamp positions unchanged; both signals transition together, so sharing by lamp color preserves the intended behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-171 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
