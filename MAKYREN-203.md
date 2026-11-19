# MAKYREN-203 — Real steering + endless street (2026-11-19)

## Reports (Jay, A35 tap-test, 2026-11-19 ~00:11 EST)
1. "Left and right only move the car side to side instead of actually
   steering."
2. "Environment wldnt expand on its own either."

## Root causes
- The car never had steering: A/D fed the same strafe vector as walking,
  and the car snapped to face the movement direction. No heading state
  existed at all.
- The world was one fixed block (road z -40..40, car clamped to z +/-34,
  collision bounds z +/-31.5). Nothing generated beyond it.
- The camera was fixed at alpha -PI/2.5, so turning would also have
  looked wrong (D moved the car screen-left while looking south).

## Fix (this change)
- Heading-based driving: `carHeading` + `carSpeed` with smooth accel.
  W/Up = gas (11 u/s), S/Down = reverse (5 u/s), A/D steer at 2.1 rad/s
  (0.45x when stationary, inverted while reversing). Touch D-pad maps to
  the same keys. Entering the car faces it north toward the checkpoint;
  exiting drops the player beside the car instead of back at the spawn.
  Replay parks the car facing north again.
- Chase camera: while driving, camera alpha lerps to swing behind the
  car (-carHeading - PI/2); on foot it lerps back to -PI/2.5.
- Endless street: `buildStreetSegment` (40-unit blocks: road, sidewalks,
  lane dashes, buildings with lit window strips, lamp poles, procedural
  trees) + `ensureStreetExpansion` runs every frame. New blocks spawn
  ahead north and south as the car travels; the collision bounds,
  world bounds, and traffic wrap boundary all extend with the street;
  segments more than 160 units behind are disposed (cloned building
  materials disposed too, shared materials kept).
- `window.MakyrenStreet` hook added for tests (segments, northEdge,
  southEdge, carHeading).

## Verification (sandbox)
- `npm run build` passes; smoke check passes; Playwright 5 passed:
  the original 3 plus "steering turns the car instead of strafing it"
  (heading drops, car moves +x while driving) and "street expands north
  as the car drives past the old edge" (car past z=-45, segments >= 1,
  northEdge < -40).
- Walking controls unchanged. Mission checkpoint still z=-22.
