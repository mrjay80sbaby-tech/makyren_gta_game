import fs from 'node:fs';
const source = fs.readFileSync(new URL('./src/main.js', import.meta.url), 'utf8');
const required = [
  'camera.inputs.clear()',
  'const cityBuildings=[]',
  'const moveX=strafe*speed,moveZ=forward*speed',
  'cameraFollow=Math.min(1,dt*7)'
];
for (const token of required) {
  if (!source.includes(token)) throw new Error(`missing source assertion: ${token}`);
}
console.log('source smoke checks passed');
