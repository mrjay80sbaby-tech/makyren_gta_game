# MAKYREN-193 — Separate Keyboard and Touch Input

- Track physical keyboard state and touch-control state in independent sets, and resolve gameplay input through a shared `isKeyDown` check.
- Releasing a physical key no longer cancels a matching held touch control, and releasing a touch control no longer clears a held keyboard key.
- Preserve keyboard focus-loss cleanup and per-button multi-touch release behavior.
- Verification: source inspection only; no local build or runtime test performed.
- Next: MAKYREN-194
