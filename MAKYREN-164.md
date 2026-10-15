# MAKYREN-164 — Gate SSR Performance Guard

## Scope
Avoid advancing and checking the screen-space-reflection performance guard when SSR is unavailable or already disabled.

## Implemented
- Accumulate the two-second guard interval only while `ssr.isEnabled` is true.
- Reset the interval while SSR is disabled, preventing a stale timer from triggering immediately if SSR is later re-enabled.
- Preserve the existing low-FPS threshold and fallback marker.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-165 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
