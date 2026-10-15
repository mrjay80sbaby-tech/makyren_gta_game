# MAKYREN-165 — Cache Street Lighting State

## Scope
Avoid repeatedly writing unchanged street-lamp and headlight light properties during every frame.

## Implemented
- Cache the last applied day/night state for street and headlight lighting.
- Update street-lamp intensity, bulb visibility, and headlight-point intensity only when the day/night state changes.
- Preserve the initial lighting update and existing day/night values; continuously changing sun, sky, hero-key, and scene-color updates remain unchanged.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-166 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
