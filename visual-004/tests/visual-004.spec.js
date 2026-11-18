// Ma'Kyren Visual-004 smoke test: load -> move -> enter vehicle -> checkpoint -> replay.
// Runs against the production build served by `vite preview` (see playwright.config.js).
// WebGL2 renders in headless Chromium via SwiftShader; FPS is not asserted here.
import { test, expect } from '@playwright/test';

const ready = async (page) => {
  await page.goto('?quality=high');
  await page.waitForFunction(() => window.__MAKYREN_VISUAL_READY__ === true, null, { timeout: 60000 });
};

const missionState = (page) => page.evaluate(() => window.MakyrenMissionProgress?.mission?.state);
const playerPos = (page) => page.evaluate(() => {
  const s = window.MakyrenScene;
  const p = s.getTransformNodeByName('player_root');
  return { x: p.position.x, z: p.position.z };
});
const carPos = (page) => page.evaluate(() => {
  const s = window.MakyrenScene;
  const c = s.getMeshByName('vehicle');
  return { x: c.position.x, z: c.position.z };
});

test('loads and reports ready', async ({ page }) => {
  await ready(page);
  await expect(page.locator('#hud')).toBeVisible();
  await expect(page.locator('#renderCanvas')).toBeVisible();
  const state = await missionState(page);
  expect(state).toBe('approach');
});

test('walk to the vehicle, enter it, drive to the checkpoint, replay', async ({ page }) => {
  await page.goto('?quality=mobile&debug=1');
  await page.waitForFunction(() => window.__MAKYREN_VISUAL_READY__ === true, null, { timeout: 60000 });
  const start = await playerPos(page);
  // Walk toward the car (car sits at z=-6, player starts at z=2). Try S first;
  // whichever key moves z downward is the approach key.
  await page.keyboard.down('KeyS');
  await page.waitForTimeout(1500);
  const mid = await playerPos(page);
  const approachKey = mid.z < start.z ? 'KeyS' : 'KeyW';
  if (approachKey === 'KeyW') {
    await page.keyboard.up('KeyS');
    await page.keyboard.down('KeyW');
  }
  // Walk until within E range (5 m) or 6 s max.
  await page.waitForFunction(() => {
    const s = window.MakyrenScene;
    const p = s.getTransformNodeByName('player_root').position;
    const c = s.getMeshByName('vehicle').position;
    const dx = c.x - p.x, dz = c.z - p.z;
    return dx * dx + dz * dz < 20;
  }, null, { timeout: 8000 }).catch(() => {});
  await page.keyboard.up(approachKey);
  // Enter the vehicle with E. Hold it briefly: at SwiftShader frame rates a
  // momentary keypress can fall between rendered frames and miss the edge latch.
  await page.keyboard.down('KeyE');
  await page.waitForTimeout(2000);
  await page.keyboard.up('KeyE');
  await page.waitForFunction(() => window.MakyrenMissionProgress?.mission?.state === 'drive', null, { timeout: 10000 });
  // Drive toward the checkpoint at z=-22. Same direction discovery as on foot.
  const carStart = await carPos(page);
  await page.keyboard.down('KeyS');
  await page.waitForTimeout(1500);
  const carMid = await carPos(page);
  const driveKey = carMid.z < carStart.z ? 'KeyS' : 'KeyW';
  if (driveKey === 'KeyW') {
    await page.keyboard.up('KeyS');
    await page.keyboard.down('KeyW');
  }
  await page.waitForFunction(() => window.MakyrenMissionProgress?.mission?.state === 'complete', null, { timeout: 30000 });
  await page.keyboard.up(driveKey);
  // Replay with R (held briefly, same reason as E above).
  await page.keyboard.down('KeyR');
  await page.waitForTimeout(2000);
  await page.keyboard.up('KeyR');
  await page.waitForFunction(() => window.MakyrenMissionProgress?.mission?.state === 'approach', null, { timeout: 10000 });
});

test('touch E/R buttons exist on a phone viewport', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const page = await context.newPage();
  await page.goto('?quality=mobile');
  await page.waitForFunction(() => window.__MAKYREN_VISUAL_READY__ === true, null, { timeout: 60000 });
  const actions = page.locator('#touch-actions button');
  await expect(actions).toHaveCount(2);
  await expect(actions.nth(0)).toHaveText('E');
  await expect(actions.nth(1)).toHaveText('R');
  for (const i of [0, 1]) {
    const box = await actions.nth(i).boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(48);
    expect(box.height).toBeGreaterThanOrEqual(48);
  }
  await expect(page.locator('#touch-controls')).toBeVisible();
  await context.close();
});
