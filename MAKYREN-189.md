# MAKYREN-189 — Normalize Restored Mission Completion

- Require a finite, positive completion timestamp before restoring a mission in the `complete` state.
- Downgrade stale or malformed completed saves to `approach` and clear completion time for non-completed states.
- Verification: source inspection only; no local build or runtime test performed.
- Next: MAKYREN-190
