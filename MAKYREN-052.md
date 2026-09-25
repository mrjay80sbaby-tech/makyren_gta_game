# MAKYREN-052 — Correct Red-Light Stop-Line Clamping

## Scope
Fix the directional stop-line clamp used by Visual-004 ambient traffic during red signals.

## Implemented
- Corrected the red-light position clamp for vehicles traveling in the positive-Z direction to prevent them from crossing the stop line.
- Corrected the negative-Z direction clamp to use the corresponding opposite-side boundary.
- Preserved the existing stop positions, signal cycle, speed handling, and traffic movement architecture.
- This removes the prior directional inversion that could snap an approaching vehicle toward the stop line from the wrong side.

## Verification
Source inspection identified the clamp inequalities as reversed relative to each vehicle's movement direction. The implementation was corrected directly in the production Visual-004 traffic system. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-053 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
