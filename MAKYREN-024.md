# MAKYREN-024 — Dynamic Lighting + Vehicle Headlights

Status: implementation started

## Objective

Complete the post-MAKYREN-023 preview gate by integrating the world clock into the Visual-004 renderer. The street scene should visibly transition between day and night, with dynamic ambient/sun lighting, street lamps, and vehicle headlights.

## Implemented in this slice

- Added a lightweight in-scene clock starting at 18:30 for an immediately observable evening transition.
- Added day/night interpolation for the hemispheric sky light, directional sun intensity, and scene clear color.
- Added alternating street-lamp poles, emissive bulbs, and point lights along the street.
- Added vehicle headlight meshes and point lights that activate at night.
- Added HUD status text showing the current in-game time and whether day or night lighting is active.

## Acceptance criteria

- Visual-004 builds with Vite without module-resolution errors.
- The browser preview displays the Visual-004 HUD and scene canvas.
- The renderer updates lighting state continuously without throwing runtime errors.
- The implementation remains dependency-light and compatible with the existing GitHub Pages base path.

## Remaining follow-up work

- Add shadow-casting street lights when the mobile performance tier permits.
- Connect the clock to traffic signals, pedestrian schedules, and the main non-Visual-004 game loop.
- Add district-specific lighting profiles and a settings toggle for reduced mobile lighting.

Next: MAKYREN-025 — connect dynamic lighting to live traffic, districts, and performance tiers.
