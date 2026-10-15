# MAKYREN-188 — Normalize Restored Vehicle Damage

- Derive restored damage state from the validated damage level to prevent contradictory saved values.
- Normalize saved hit and repair counters to non-negative integers; clamp health to its supported range.
- Verification: source inspection only; no local build or runtime test performed.
- Next: MAKYREN-189
