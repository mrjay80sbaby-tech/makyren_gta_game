# MAKYREN-031 — Static-World Vehicle Collision + Mission-Safe Reset

Status: Implemented

## Objective
Add lightweight static-world collision boundaries for the player vehicle and recover the vehicle to its last safe position without resetting mission progress.

## Implemented
- Added vehicle collision state and diagnostics at `window.MakyrenVehicleCollision`.
- Added static road/curb/end-of-block collision bounds for the hero vehicle.
- Vehicle restores to its last safe position when crossing a static collision boundary.
- Existing mission state is preserved during collision recovery.
- Manual `R` reset still performs the full mission replay reset and now also clears collision state.
- Hero GLB position remains synchronized after collision recovery.
- No physics engine or new dependency added.

## Preserved
- Traffic collision response
- District-aware traffic metadata
- Traffic signals and pedestrian systems
- Character/vehicle controls
- Mission checkpoint flow
- Mobile quality limits

## Verification
Implementation committed. Runtime/build verification is pending.

## Next
MAKYREN-032 — Vehicle-to-static-prop collision volumes and recovery telemetry.
