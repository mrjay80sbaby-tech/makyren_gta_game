import fs from 'node:fs';
const source = fs.readFileSync(new URL('./src/main.js', import.meta.url), 'utf8');
const required = [
  "vehicle:'assets/hero_vehicle.glb'",
  "window.MakyrenLoadAsset('vehicle'",
  'heroVehicleRoot',
  'balcony_slab',
  'building_sign',
  'street_bin',
  'new DefaultRenderingPipeline',
  'post.bloomEnabled',
  'new ColorCurves',
  'const heroKey=',
  'const cityRim='
];
for (const token of required) {
  if (!source.includes(token)) throw new Error(`missing source assertion: ${token}`);
}
console.log('visual-quality smoke checks passed');
