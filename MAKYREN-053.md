# MAKYREN-053 — Dynamic Pedestrian District Profiles

## Scope
Make the existing district pedestrian speed profiles follow pedestrians as they move between districts.

## Implemented
- Added an explicit base speed to each pedestrian's metadata.
- During pedestrian movement, the current district is recalculated from the pedestrian's live Z position.
- The district's pedestrian multiplier is reapplied to the base speed each frame.
- Existing pedestrian direction, looping bounds, animation hooks, and traffic profiles remain unchanged.

## Verification
Source inspection confirmed pedestrian profiles were previously calculated only at spawn time, while pedestrians continuously moved across district boundaries. The correction makes the existing profile data dynamic without changing the pedestrian movement architecture. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-054 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
