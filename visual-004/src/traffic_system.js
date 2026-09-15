import { MeshBuilder, PBRMaterial, Color3, TransformNode, Vector3 } from '@babylonjs/core';

const waitForScene = () => new Promise((resolve, reject) => {
  const started = performance.now();
  const tick = () => {
    if (window.MakyrenScene) return resolve(window.MakyrenScene);
    if (performance.now() - started > 10000) return reject(new Error('Visual-004 scene was not ready for traffic system'));
    requestAnimationFrame(tick);
  };
  tick();
});

const scene = await waitForScene();
const quality = window.MakyrenVisualQuality?.preset || 'high';
const mobile = quality === 'mobile';
const traffic = scene.meshes.filter(mesh => mesh.name.startsWith('ambient_vehicle'));
const playerVehicle = scene.getMeshByName('vehicle');

const signalState = { phase: 'green', elapsed: 0 };
const signalCycle = [
  { phase: 'green', duration: 7 },
  { phase: 'yellow', duration: 2 },
  { phase: 'red', duration: 7 },
];

const signalRoot = new TransformNode('traffic_signal_system', scene);
const signalMaterial = new PBRMaterial('traffic_signal_housing', scene);
signalMaterial.albedoColor = new Color3(.025, .03, .035);
signalMaterial.metallic = .35;
signalMaterial.roughness = .55;

const signalLights = {};
for (const side of [-1, 1]) {
  const pole = MeshBuilder.CreateCylinder(`signal_pole_${side}`, { height: 5.5, diameter: .11 }, scene);
  pole.position.set(side * 8.7, 2.75, -1.5);
  pole.material = signalMaterial;
  pole.parent = signalRoot;
  const head = MeshBuilder.CreateBox(`signal_head_${side}`, { width: .42, height: 1.25, depth: .32 }, scene);
  head.position.set(side * 8.7, 5.15, -1.5);
  head.material = signalMaterial;
  head.parent = signalRoot;
  signalLights[side] = {
    red: MeshBuilder.CreateSphere(`signal_red_${side}`, { diameter: .18, segments: 8 }, scene),
    yellow: MeshBuilder.CreateSphere(`signal_yellow_${side}`, { diameter: .18, segments: 8 }, scene),
    green: MeshBuilder.CreateSphere(`signal_green_${side}`, { diameter: .18, segments: 8 }, scene),
  };
  signalLights[side].red.position.set(side * 8.7, 5.42, -1.67);
  signalLights[side].yellow.position.set(side * 8.7, 5.15, -1.67);
  signalLights[side].green.position.set(side * 8.7, 4.88, -1.67);
  for (const light of Object.values(signalLights[side])) {
    light.material = signalMaterial.clone(`signal_lamp_${light.name}`);
    light.parent = signalRoot;
  }
}

const setSignal = phase => {
  signalState.phase = phase;
  for (const side of [-1, 1]) {
    const lamps = signalLights[side];
    lamps.red.material.emissiveColor = phase === 'red' ? new Color3(.8, .015, .01) : new Color3(.04, .002, .002);
    lamps.yellow.material.emissiveColor = phase === 'yellow' ? new Color3(.95, .55, .02) : new Color3(.05, .025, .002);
    lamps.green.material.emissiveColor = phase === 'green' ? new Color3(.02, .8, .08) : new Color3(.002, .05, .01);
  }
};
setSignal('green');

const pedestrianRoot = new TransformNode('ambient_pedestrians', scene);
const pedestrianBodyMat = new PBRMaterial('pedestrian_body', scene);
pedestrianBodyMat.albedoColor = new Color3(.18, .2, .24);
pedestrianBodyMat.roughness = .82;
const pedestrianSkinMat = new PBRMaterial('pedestrian_skin', scene);
pedestrianSkinMat.albedoColor = new Color3(.42, .27, .19);
pedestrianSkinMat.roughness = .9;

const pedestrianCount = mobile ? 2 : 4;
const pedestrians = [];
for (let i = 0; i < pedestrianCount; i++) {
  const root = new TransformNode(`pedestrian_${i}`, scene);
  root.parent = pedestrianRoot;
  const body = MeshBuilder.CreateCylinder(`pedestrian_body_${i}`, { height: 1.05, diameter: .38, tessellation: 8 }, scene);
  body.position.y = .72;
  body.material = pedestrianBodyMat.clone(`pedestrian_body_mat_${i}`);
  body.parent = root;
  const head = MeshBuilder.CreateSphere(`pedestrian_head_${i}`, { diameter: .34, segments: 8 }, scene);
  head.position.y = 1.43;
  head.material = pedestrianSkinMat.clone(`pedestrian_skin_mat_${i}`);
  head.parent = root;
  const side = i % 2 === 0 ? -1 : 1;
  root.position.set(side * 10.25, 0, -28 + i * 18);
  root.metadata = { pedestrian: true, speed: .75 + i * .08, direction: i % 2 === 0 ? 1 : -1, phase: i * 1.7 };
  pedestrians.push(root);
}

const animationHooks = {
  register(entity, update) {
    if (!entity || typeof update !== 'function') return () => {};
    const hooks = entity.metadata?.animationHooks || [];
    hooks.push(update);
    entity.metadata = { ...(entity.metadata || {}), animationHooks: hooks };
    return () => {
      const list = entity.metadata?.animationHooks || [];
      entity.metadata.animationHooks = list.filter(fn => fn !== update);
    };
  },
  update(entity, dt) {
    for (const hook of entity.metadata?.animationHooks || []) hook(dt, entity);
  },
};
window.MakyrenAnimationHooks = animationHooks;

const proximityHud = document.createElement('div');
proximityHud.id = 'traffic-proximity-hud';
proximityHud.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:7;padding:7px 9px;border:1px solid #ffffff22;border-radius:8px;background:#07101dcc;color:#fff;font:600 11px system-ui;display:none;pointer-events:none;';
document.body.appendChild(proximityHud);

let elapsed = 0;
scene.onBeforeRenderObservable.add(() => {
  const dt = Math.min(.1, scene.getEngine().getDeltaTime() / 1000);
  elapsed += dt;
  signalState.elapsed += dt;
  const current = signalCycle.find(item => item.phase === signalState.phase);
  if (current && signalState.elapsed >= current.duration) {
    signalState.elapsed = 0;
    const nextIndex = (signalCycle.findIndex(item => item.phase === signalState.phase) + 1) % signalCycle.length;
    setSignal(signalCycle[nextIndex].phase);
  }

  for (const vehicle of traffic) {
    const laneDirection = vehicle.position.x < 0 ? 1 : -1;
    vehicle.metadata = { ...(vehicle.metadata || {}), traffic: true, laneDirection, signalPhase: signalState.phase };
    const distanceToPlayer = playerVehicle ? Vector3.Distance(vehicle.position, playerVehicle.position) : Infinity;
    if (playerVehicle && distanceToPlayer < 3.8) {
      const away = vehicle.position.x >= playerVehicle.position.x ? 1 : -1;
      const strength = Math.max(.015, (3.8 - distanceToPlayer) * .035);
      vehicle.position.x += away * strength;
      if (distanceToPlayer < 2.35) vehicle.position.z -= laneDirection * strength * 1.5;
    }
    const approachingCrosswalk = laneDirection > 0
      ? vehicle.position.z < -1.5 && vehicle.position.z > -8
      : vehicle.position.z > -1.5 && vehicle.position.z < 5;
    if (signalState.phase === 'red' && approachingCrosswalk) {
      const stopZ = laneDirection > 0 ? -3.15 : .15;
      if (laneDirection > 0) vehicle.position.z = Math.max(vehicle.position.z, stopZ);
      else vehicle.position.z = Math.min(vehicle.position.z, stopZ);
    }
  }

  for (const pedestrian of pedestrians) {
    const data = pedestrian.metadata;
    pedestrian.position.z += data.direction * data.speed * dt;
    if (pedestrian.position.z > 34) pedestrian.position.z = -34;
    if (pedestrian.position.z < -34) pedestrian.position.z = 34;
    pedestrian.rotation.y = data.direction > 0 ? Math.PI : 0;
    pedestrian.position.y = Math.sin(elapsed * 4 + data.phase) * .025;
    animationHooks.update(pedestrian, dt);
  }

  const nearestTraffic = traffic.reduce((nearest, vehicle) => {
    if (!playerVehicle) return nearest;
    return Math.min(nearest, Vector3.Distance(vehicle.position, playerVehicle.position));
  }, Infinity);
  if (nearestTraffic < 5) {
    proximityHud.style.display = 'block';
    proximityHud.textContent = nearestTraffic < 2.35 ? 'TRAFFIC PROXIMITY • BRAKING' : 'TRAFFIC PROXIMITY';
  } else {
    proximityHud.style.display = 'none';
  }
});

window.MakyrenTraffic = {
  version: '028',
  vehicles: traffic,
  pedestrians,
  signals: signalState,
  get nearestVehicleDistance() {
    if (!playerVehicle) return Infinity;
    return traffic.reduce((nearest, vehicle) => Math.min(nearest, Vector3.Distance(vehicle.position, playerVehicle.position)), Infinity);
  },
};
