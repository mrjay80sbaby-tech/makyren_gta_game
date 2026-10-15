# MAKYREN-176 — Preserve Traffic Signal Phase Timing

## Scope
Avoid discarding elapsed-time overshoot when a traffic signal changes phase.

## Implemented
- Subtract the completed phase duration from accumulated elapsed time instead of resetting elapsed time to zero.
- Preserve the existing phase-index progression and phase-change call.
- Carry any small frame-time overshoot into the next phase, reducing cumulative timing drift while keeping the same phase durations.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-177 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
