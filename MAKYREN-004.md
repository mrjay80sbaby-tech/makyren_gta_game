# MAKYREN-004 — Living City Foundation

Status: implemented

## Added
- 70 lightweight pedestrian agents
- Randomized pedestrian appearance and skin tones
- Wandering behavior with bounded city movement
- Basic pedestrian animation-ready hierarchy
- Ambient traffic vehicles
- Automatic traffic movement
- Traffic/player vehicle separation
- Mobile-friendly pooled low-poly NPC design

## Performance strategy
NPCs use low-poly geometry and simple steering rather than expensive per-agent pathfinding. This keeps the prototype viable on mobile hardware at $0 cost.

## Next milestone
MAKYREN-005 — Mission system + wanted/heat system + police response foundation.