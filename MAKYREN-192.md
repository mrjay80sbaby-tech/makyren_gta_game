# MAKYREN-192 — Normalize Diagonal Movement

- Scale simultaneous forward/back and strafe input by `Math.SQRT1_2` so diagonal movement has the same intended speed as movement on a single axis.
- Apply consistently to on-foot and vehicle controls without changing straight-line speed or sprint settings.
- Verification: source inspection only; no local build or runtime test performed.
- Next: MAKYREN-193
