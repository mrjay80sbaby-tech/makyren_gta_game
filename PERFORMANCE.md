# Visual-004 Performance Validation

Visual-004 exposes three explicit quality tiers: `high`, `medium`, and `mobile`. The tier changes hardware scaling, glow intensity, fog density, window detail, and optional environmental props. The runtime also exposes `window.MakyrenPerf` when loaded with `?debug=1` and renders a small performance HUD.

| Tier | Intended use | Runtime behavior |
|---|---|---|
| High | Desktop and capable tablets | Higher render resolution, glow, emissive windows, trees, benches, and full street dressing. |
| Medium | Mid-range laptops and tablets | Reduced render resolution with most visual detail retained. |
| Mobile | Phones and low-power hardware | Higher hardware scaling, reduced glow and fog cost, no window grid or heavy environmental props. |

The first release candidate should record frame rate and active mesh counts on at least one representative desktop and one representative mobile device. These measurements are not a substitute for testing on the final target hardware, but they provide a repeatable regression signal during development.

Use the following preview query for the diagnostics overlay:

```text
?quality=mobile&debug=1
```

The latest smoke check confirmed WebGL initialization, a ready Babylon engine, a mobile HUD, touch-control creation, and no page errors. The current build remains a procedural vertical slice; final performance gates must be rerun after licensed GLB/PBR content is added.
