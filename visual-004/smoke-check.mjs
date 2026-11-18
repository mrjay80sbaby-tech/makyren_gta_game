import fs from 'node:fs';
const source = fs.readFileSync(new URL('./src/main.js', import.meta.url), 'utf8');
const required = [
  "vehicle:'assets/hero_vehicle.glb'",
  "window.MakyrenLoadAsset('vehicle'",
  'heroVehicleRoot',
  'hero_vehicle_trim',
  'balcony_slab',
  'building_sign',
  'street_bin',
  'new DefaultRenderingPipeline',
  'new SSRRenderingPipeline',
  "ssrOptIn:'?ssr=1'",
  'new ColorCurves',
  'MakyrenCharacterAnimator',
  'const heroKey=',
  'const cityRim=',
  'touch-actions',
  "'KeyE'",
  "'KeyR'",
  'webgl-unavailable',
  'loadTrafficVehicles',
  'streetLampMobile',
  'loadRealisticTrees',
  'loadStorefronts',
  'concrete/color.jpg',
  'loadCharacter',
  'casual_male.glb'
];
for (const token of required) {
  if (!source.includes(token)) throw new Error(`missing source assertion: ${token}`);
}
console.log('visual-quality smoke checks passed');
