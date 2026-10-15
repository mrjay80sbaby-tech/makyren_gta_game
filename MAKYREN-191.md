# MAKYREN-191 — Preserve Multi-Touch Movement

- Remove global pointer-release handlers that cleared every held touch key when any one pointer was released.
- Keep per-button `pointerup`, `pointercancel`, and `lostpointercapture` cleanup so each movement direction releases independently while other fingers remain held.
- Verification: source inspection only; no local build or runtime test performed.
- Next: MAKYREN-192
