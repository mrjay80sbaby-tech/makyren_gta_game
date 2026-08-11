import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

export function createEnvironmentKit(scene, options = {}) {
  const mobile = options.mobile ?? (innerWidth < 900);
  const count = options.vegetation ?? (mobile ? 70 : 180);
  const near = mobile ? 45 : 65;
  const far = mobile ? 110 : 150;
  const trunk = new THREE.MeshStandardMaterial({ color: 0x493628, roughness: 1 });
  const crown = new THREE.MeshStandardMaterial({ color: 0x31533a, roughness: 0.96 });
  const nearGeo = new THREE.ConeGeometry(0.8, 2.8, mobile ? 5 : 7);
  const farGeo = new THREE.ConeGeometry(0.55, 1.9, 5);
  const nearTrees = new THREE.InstancedMesh(nearGeo, crown, Math.ceil(count * .55));
  const farTrees = new THREE.InstancedMesh(farGeo, crown, Math.floor(count * .45));
  const dummy = new THREE.Object3D();
  const spread = 430;
  for (let i = 0; i < nearTrees.count; i++) {
    dummy.position.set((Math.random()-.5)*spread, 1.4, (Math.random()-.5)*spread);
    const s = .7 + Math.random()*.8; dummy.scale.set(s, s, s); dummy.updateMatrix(); nearTrees.setMatrixAt(i, dummy.matrix);
  }
  for (let i = 0; i < farTrees.count; i++) {
    dummy.position.set((Math.random()-.5)*spread, .95, (Math.random()-.5)*spread);
    const s = .8 + Math.random()*.7; dummy.scale.set(s, s, s); dummy.updateMatrix(); farTrees.setMatrixAt(i, dummy.matrix);
  }
  nearTrees.instanceMatrix.needsUpdate = true; farTrees.instanceMatrix.needsUpdate = true;
  scene.add(nearTrees, farTrees);
  const lod = new THREE.LOD();
  const nearDetail = new THREE.Mesh(new THREE.BoxGeometry(2, .15, 2), new THREE.MeshStandardMaterial({ color: 0x4b4d46, roughness: .92 }));
  const farDetail = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ color: 0x42463f }));
  lod.addLevel(nearDetail, 0); lod.addLevel(farDetail, 35); lod.position.set(0, .08, 0); scene.add(lod);
  return { nearTrees, farTrees, lod, near, far };
}

export function updateEnvironmentKit(environment, camera) {
  if (!environment) return;
  const distance = camera.position.length();
  environment.nearTrees.visible = distance < environment.far + 80;
  environment.farTrees.visible = distance < environment.far * 2.2;
}
