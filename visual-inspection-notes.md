# Visual Inspection Notes

The deployed URL opened successfully in the connected browser at `https://mrjay80sbaby-tech.github.io/makyren_gta_game/visual-004/?debug=1&quality=high`. The page title is `MA'KYREN — Visual 004`, the HUD is present, and the mission state reported `Drive to the north checkpoint • 19:16 • high tier`. The browser screenshot upload was unavailable, so visual inspection of the live deployment was limited to DOM/page-state confirmation.

The local rebuilt bundle rendered successfully in headless Chromium after adding Babylon SSR, the vehicle detail layer, and the character animation state machine. The only captured Chromium errors were environment-level DBus/GPU diagnostics; no application exception, asset-load failure, or SSR initialization error appeared in the captured log. The local screenshot is `/tmp/makyren-ssr-animation.png`.

The first SSR-enabled capture rendered the scene but reported approximately 11 FPS at the high preset, so SSR was tuned from 80 to 32 steps, downsampled, and given an automatic disable-below-24-FPS guard. The updated capture completed without application exceptions; remaining Chromium log entries were browser service diagnostics. The hero-car detail layer is visible as dark trim/side-mirror accents, and the character now visibly has separate limbs rather than a single capsule body.

The first tuned SSR capture preserved the full scene. After adding the custom wet-surface shader, the subsequent capture showed only the HUD against a dark background, so the shader pass introduced a rendering regression even though the build completed. The custom shader must be removed or corrected before shipping; SSR and the animation/vehicle changes should remain isolated.

The final default and `?ssr=1` captures both render the complete scene with the updated vehicle trim, separated character limbs, bloom/color grading, and city lighting. The captured debug HUD reports approximately 6 FPS in the headless software renderer; the explicit SSR mode is now opt-in, and the default mode remains the recommended playable path. The custom wet-surface shader was removed after it produced a blank-frame regression.
