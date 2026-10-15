# MAKYREN-177 — Keep Signal Countdown Aligned After Transitions

## Scope
Keep the traffic signal countdown synchronized with the active phase when a frame crosses a phase boundary.

## Implemented
- Resolve the active phase after advancing the signal index.
- Calculate `signalState.remaining` after phase-transition handling, using any elapsed-time overshoot carried into the new phase.
- Preserve the existing cycle, durations, and phase progression.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-178 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
