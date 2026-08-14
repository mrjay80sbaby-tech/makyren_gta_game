# Ma’Kyren Production-Readiness Gates

**Author:** Manus AI

## Scope

The current repository is a browser/mobile prototype with two related surfaces: the root Open City prototype and the Babylon.js Visual-004 renderer. Production-ready in this context means a stable, deployable, free-to-run vertical slice with an integrated gameplay loop, verified controls, reproducible builds, licensed content, and documented performance tiers. It does not mean literal Unreal Engine 5 Nanite/Lumen parity, which is not realistic for a zero-cost browser stack.

## Release gates

| Gate | Required outcome | Current state |
|---|---|---|
| Repository hygiene | Clean `main` branch, no generated dependencies or build output committed accidentally | Passing at the latest audit |
| JavaScript validity | Every browser JavaScript module passes syntax validation | Must be automated and rerun after each milestone |
| Visual-004 build | Vite production build succeeds with the configured GitHub Pages base path | Passing in the latest completed milestone |
| Runtime initialization | Babylon creates a WebGL canvas, reports readiness, and produces no page errors | Passing after the light-constructor fix; needs regression automation |
| Visual quality | High, medium, and mobile tiers render a judgeable scene with clear quality differences | Passing at foundation level; still procedural rather than asset-complete |
| Gameplay integration | Movement, camera, vehicle interaction, mission state, HUD, and at least one complete playable objective work in one runtime | Not yet production-ready; systems remain distributed across prototype modules |
| Input coverage | Desktop keyboard/mouse and mobile touch controls are both verified | Not yet verified for the Visual-004 runtime |
| Asset provenance | Every imported asset has a recorded license and replacement/fallback path | Asset slots exist; final licensed assets are not yet integrated |
| Performance | Mobile tier has a documented scene budget and stable frame-time target on representative hardware | Quality settings exist; measured performance gates remain to be added |
| Deployment | GitHub Pages build and direct preview URL are reproducible from a clean checkout | Workflow exists; clean-checkout validation remains |

## Immediate implementation order

The next production-critical step is to unify the Visual-004 renderer with a small playable vertical slice rather than continuing to add isolated visual primitives. The slice should support a controllable Ma’Kyren character, camera follow, a nearby vehicle interaction, one short mission objective, a visible HUD state, and a reliable reset path. After that integration, the free GLB/PBR assets can replace the procedural fallbacks without changing gameplay contracts.

## Definition of done for the first release candidate

A release candidate is ready when a clean checkout installs successfully, builds both the root prototype and Visual-004, loads without page errors, renders all quality tiers, accepts desktop and mobile input, completes the first mission from start to finish, records asset licenses, and publishes through the repository’s configured Pages workflow. The release must also include a short known-limitations section stating that it is a browser/mobile vertical slice rather than a literal UE5 build.
