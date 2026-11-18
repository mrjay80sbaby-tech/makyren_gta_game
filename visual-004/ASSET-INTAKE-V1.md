# ASSET INTAKE — Visual-004 (v1)

Date: 2026-11-18. Base: repo `mrjay80sbaby-tech/makyren_gta_game`, branch `main`,
commit `9f761fc`. All files below are new working-tree files; nothing committed.
All sources $0, CC0 — license verified on each source page / in each pack's
`License.txt` before keeping. No Kenney logo anywhere (none of these GLBs
contains one).

Shared dependency (already in repo, NOT re-fetched): every Kenney GLB below
references the external texture `Textures/colormap.png`. **That URI is
resolved relative to the GLB's own folder**, so the shared file at
`visual-004/public/assets/Textures/colormap.png` alone does NOT cover GLBs
in subfolders — the validator proves it (`IO_ERROR`, missing
`traffic/Textures/colormap.png` when the copy was absent). To make the
assets load correctly as placed, an identical 12,371 B copy of the shared
colormap was placed in each subfolder that needs it:

- `visual-004/public/assets/traffic/Textures/colormap.png` (copy of the shared file)
- `visual-004/public/assets/storefronts/Textures/colormap.png` (copy of the shared file)

If the build team would rather remap texture URIs at load time, these two
copies can be deleted — but do not delete them without a remap, or the cars
and storefronts will render untextured.

## 1. Traffic cars — Kenney Car Kit 3.1 (CC0)

Source page: https://www.kenney.nl/assets/car-kit — page states
"Download this package (45 assets) for free, CC0 licensed!"; zip
`License.txt`: "Creative Commons Zero, CC0".
Hero vehicle already in repo is `sedan-sports.glb` (177,676 B) — none of the
four below duplicates it. All single `.glb`, all reference external
`Textures/colormap.png` (yes — shared file above, no new texture needed).

| File | Bytes | Tris | External texture |
|---|---|---|---|
| `visual-004/public/assets/traffic/sedan.glb` | 172,216 | 2,032 | yes — `Textures/colormap.png` |
| `visual-004/public/assets/traffic/hatchback-sports.glb` | 197,804 | 2,088 | yes — `Textures/colormap.png` |
| `visual-004/public/assets/traffic/taxi.glb` | 175,608 | 2,072 | yes — `Textures/colormap.png` |
| `visual-004/public/assets/traffic/police.glb` | 195,336 | 2,304 | yes — `Textures/colormap.png` |

All four validated clean in place (`gltf-transform validate`: no errors,
no warnings) — after placing the `traffic/Textures/colormap.png` copy noted
at the top.

## 2. Protagonist — Kenney Animated Characters Protagonists 1.1 (CC0)

Source page: https://www.kenney.nl/assets/animated-characters-protagonists —
page License field: Creative Commons CC0; zip `License.txt`: CC0.

**Important — no native GLB exists in this pack.** It ships FBX only:
`Model/characterMedium.fbx` (bind-pose mesh, no animation) plus separate
`Animations/idle.fbx`, `run.fbx`, `jump.fbx`. There is **no walk clip** in
the pack at all. `makyren.glb` below is a conversion built for this intake
(three.js FBXLoader + GLTFExporter, run in /tmp — no repo dependencies
added, no `package.json` change):

- merged the three animation FBXs into one file, renamed
  `Idle` (1.07 s), `Run` (0.67 s), `Jump` (0.50 s); dropped the 0.03 s
  "Targeting Pose" clip each FBX also carries;
- normalized scale: the FBX nodes carry a x100 scale and the raw mesh spans
  3.76 units tall; rescaled so the character stands **1.80 m** tall in glTF
  units (verified in three.js: world size 1.73 W x 1.80 H x 0.50 D, feet at
  y = 0);
- baked the mesh node's rotation/scale into the geometry and corrected the
  inverse-bind matrices, so the skinned-mesh node is identity (glTF spec:
  strict loaders such as Babylon.js ignore skinned-mesh node transforms);
- fixed the exported skin's skeleton pointer (three.js wrote the first bone,
  `LeftFootCtrl`); it now points at the common root node `Root`;
- embedded the male skin `criminalMaleA.png` (35,033 B, from the pack's
  `Skins/`) as the `skin` material's baseColorTexture. The same PNG is also
  shipped beside the GLB as the swappable source skin.

| File | Bytes | Tris | Animations | External texture |
|---|---|---|---|---|
| `visual-004/public/assets/character/makyren.glb` | 702,812 | 1,604 | Idle, Run, Jump (no Walk) | no — texture embedded |
| `visual-004/public/assets/character/criminalMaleA.png` | 35,033 | — | — | source skin (also embedded in the GLB) |

Validated clean (`gltf-transform validate`: no errors, no warnings).

**Style verdict — FAILS the repo rule.** VISUAL-003-ASSET-PIPELINE.md
requires realistic proportions and explicitly "no LEGO/voxel/block-person".
This character is a chibi block-person: oversized head (about a third of its
height), stubby limbs, flat cartoon skin (see the pack's own `Preview.png`:
skater / cyborg / criminal). It is the pack's real protagonist rig and it
works, but it reads toy-like next to the realistic target. Do NOT use as the
hero Ma'Kyren. Placeholder / NPC at most. It also has no walk cycle, so
locomotion would need a retargeted walk from elsewhere.

## 3. Fallback character — Quaternius Casual Female (CC0)

Upstream pack: Quaternius "Ultimate Animated Character Pack"
(https://quaternius.com/packs/ultimatedanimatedcharacter.html — 52 animated
characters, formats FBX / OBJ / Blend). Quaternius distributes the pack
itself as FBX/OBJ/.blend; the GLB used here is the mirrored Quaternius file
hosted by Cinevva, which states every file on the page is CC0, original by
Quaternius, and lists this file as checked 2026-09-14: 1,718.7 KiB,
6,624 tris, 23 joints, 17 clips, no external images. Downloaded cleanly from
https://cdn.cinevva.com/assets/packs/quaternius/ultimate-animated-characters/Casual_Female.glb
(no account, no payment). Cross-check: OpenGameArt's "Animated Characters
Pack" entry for the same Quaternius pack lists license CC0.

| File | Bytes | Tris | Animations (17) | External texture |
|---|---|---|---|---|
| `visual-004/public/assets/character/quaternius_casual_female.glb` | 1,759,956 | 6,624 | Death, Defeat, Idle, Jump, PickUp, Punch, RecieveHit [sic], Roll, Run, Run_Carry, Shoot_OneHanded, SitDown, StandUp, SwordSlash, Victory, Walk, Walk_Carry | no — flat colour materials only (Skin / Shirt / Pants / Belt / Face / Hair), no images |

Notes: 23 joints, 6 skinned meshes. Effective height ~1.86 m (raw mesh
~3.15 units x root `__fit` scale 0.591; T-pose armspan ~1.9 m). Validated
clean (no errors, no warnings). Note this is a **female** character — a
fallback / NPC candidate, not a male Ma'Kyren.

**Style verdict — BETTER fallback, still not realistic.** Human proportions
are believable (head ~1/7 of height, normal limbs), and it has a full
locomotion set including Walk / Idle / Run, so it is the best $0 CC0
fallback found. But it is still stylized low-poly with flat colours and no
textures — chunky Quaternius look, not the realistic target. If the hero
must read realistic, neither character candidate here qualifies; a custom /
more realistic model is still needed.

## 4. Storefronts — Kenney City Kit (Commercial) 2.1 (CC0)

Source page: https://www.kenney.nl/assets/city-kit-commercial — License field:
Creative Commons CC0; zip `License.txt`: CC0.

Honest scope note: this kit has **no purpose-built flat shopfront slab**.
Its buildings are freestanding low-rise blocks, and the attachable pieces
are awnings / overhangs, not fronts. The four below are the closest fit:
three wide low-rise blocks that read as shops, plus the one flat-backed
piece in the kit. Raw sizes are Kenney units; at the hero car's scale
(sedan 2.55 units long ~= 4.5 m, so 1 unit ~= 1.76 m) building-e/j/k land
roughly 2.9–3.7 m wide — the "roughly 4–6 m" ask needs a ~1.3–1.6x scale
on load, which the build team already does for Kenney assets. All reference
external `Textures/colormap.png` (shared file, see top).

| File | Bytes | Tris | Raw size W x H x D (units) | External texture |
|---|---|---|---|---|
| `visual-004/public/assets/storefronts/building-e.glb` | 128,208 | 1,509 | 1.64 x 0.89 x 1.01 | yes — `Textures/colormap.png` |
| `visual-004/public/assets/storefronts/building-j.glb` | 440,652 | 5,246 | 2.08 x 1.69 x 1.34 | yes — `Textures/colormap.png` |
| `visual-004/public/assets/storefronts/building-k.glb` | 246,976 | 2,960 | 2.08 x 1.47 x 0.94 | yes — `Textures/colormap.png` |
| `visual-004/public/assets/storefronts/low-detail-building-wide-a.glb` | 12,736 | 156 | 1.00 x 1.10 x 0.50 (flat-backed — the only truly attach-flat piece) | yes — `Textures/colormap.png` |

All four validated clean in place. Not taken: `detail-awning.glb` /
`detail-awning-wide.glb` (5.5 KB each, colormap) exist in the same kit if
awnings are wanted as separate attachments.

## 5. Tree — Kenney Nature Kit 2.1 (CC0)

Source page: https://www.kenney.nl/assets/nature-kit — CC0 (zip `License.txt`:
CC0). Poly Haven "Tree Small 02" was NOT downloaded, per instructions
(263 MB / ~5M tris, unusable).

| File | Bytes | Tris | Raw size (units) | External texture |
|---|---|---|---|---|
| `visual-004/public/assets/tree_small_02.glb` | 5,968 | 62 | 0.35 x 1.11 x 0.41 | no — unlit vertex-colour material |

Fix applied: Kenney's own export lists the child mesh node (not its
`tmpParent` root) in the scene, which fails validation
(`SCENE_NON_ROOT_NODE`). Re-pointed the scene at `tmpParent` with
gltf-transform; the file now validates clean (no errors, no warnings) with
identical geometry (62 tris). KHR_materials_unlit (Kenney's unlit style) is
preserved.

## 6. Concrete — ambientCG Concrete 012, 1K-JPG (CC0)

Source page: https://ambientcg.com/view?id=Concrete012 — ambientCG's library
is public domain (CC0); 1K-JPG zip (8 MB) downloaded from the page's
`Concrete012_1K-JPG.zip` link. All maps 1024 x 1024 JPG. **No AO map is
offered** in this download (contents: Color, NormalDX, NormalGL, Roughness,
Displacement). NormalGL (OpenGL convention) was taken as `normal.jpg`.
Displacement exists in the zip but was not copied — not requested.

| File | Bytes | Map |
|---|---|---|
| `visual-004/public/assets/materials/concrete/color.jpg` | 1,283,030 | Colour (1024x1024) |
| `visual-004/public/assets/materials/concrete/normal.jpg` | 2,128,204 | NormalGL (1024x1024) |
| `visual-004/public/assets/materials/concrete/roughness.jpg` | 748,263 | Roughness (1024x1024) |

## 7. Lamp LOD — decimated `street_lamp_01.glb`

Source: existing repo file `visual-004/public/assets/street_lamp_01.glb`
(Poly Haven, 6,900,232 B, 30,610 tris, 4 embedded JPEGs totalling ~6.1 MB).
Pipeline (gltf-transform CLI, run in /tmp — no repo dependencies added):
`resize` textures to max 1024 px, then `simplify --ratio 0.25 --error 0.01`.

| File | Bytes | Tris | Size (m) |
|---|---|---|---|
| `visual-004/public/assets/street_lamp_01.glb` (original, untouched) | 6,900,232 | 30,610 | 0.70 x 3.87 x 0.39 |
| `visual-004/public/assets/street_lamp_01_mobile.glb` | 674,428 | 7,820 | 0.70 x 3.87 x 0.39 (identical footprint) |

Validated clean (no errors; only pre-existing tangent-space warnings that
the source file also carries). 674 KB is well under the 2 MB target.

## What was NOT fetched / still open

- Kenney Protagonists has no native GLB and no walk clip (see §2).
- Quaternius official distribution is FBX/OBJ/.blend via Google Drive; the
  GLB above is Cinevva's mirror of the Quaternius file (§3).
- ambientCG Concrete 012 ships no AO map; Displacement was left out (§6).
- City Kit (Commercial) has no flat shopfront slab; the four files in §4
  are the closest available, and need a ~1.3–1.6x scale on load to read
  4–6 m wide next to the hero car.
- Neither character candidate meets the realistic-target rule (§2, §3).
  The Quaternius female is the usable fallback; the hero still needs a
  realistic model from elsewhere.
- Nothing in this intake was committed. Pre-existing working-tree changes
  (`visual-004/package.json`, `package-lock.json`, `MAKYREN-194.md`,
  `visual-004/tests/`, etc.) were already present before this work and were
  not touched.
