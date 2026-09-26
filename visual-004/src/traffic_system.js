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
const engine = scene.getEngine();
const quality = window.MakyrenVisualQuality?.preset || 'high';
const mobile = quality === 'mobile';
const districtForZ = z => Math.abs(z) < 10 ? 'downtown' : (z < 0 ? 'southside' : 'northside');
const districtProfile = {
  downtown: { speed: .78, pedestrian: 1.12, label: 'Downtown' },
  southside: { speed: 1.02, pedestrian: .92, label: 'Southside' },
  northside: { speed: .9, pedestrian: 1.0, label: 'Northside' },
};
const traffic = scene.meshes.filter(mesh => mesh.name.startsWith('ambient_vehicle'));
const trafficFallbackBaseSpeeds = new Map(traffic.map((vehicle, index) => [vehicle, 2.2 + index * .45]));
const playerVehicle = scene.getMeshByName('vehicle');
const playerRoot = scene.getTransformNodeByName('player_root');
const collisionState = { active: false, lastImpact: 0, impacts: 0, lastType: null };
const trafficCollisionHalfWidth = 1.65;
const trafficCollisionHalfDepth = 2.65;

let signalIndex = 0;
const signalState = { phase: 'green', elapsed: 0, remaining: 7 };
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

const signalEmissive = {
  redOn: new Color3(.8, .015, .01),
  redOff: new Color3(.04, .002, .002),
  yellowOn: new Color3(.95, .55, .02),
  yellowOff: new Color3(.05, .025, .002),
  greenOn: new Color3(.02, .8, .08),
  greenOff: new Color3(.002, .05, .01),
};
const setSignal = phase => {
  signalState.phase = phase;
  signalState.remaining = signalCycle[signalIndex]?.duration ?? 0;
  for (const side of [-1, 1]) {
    const lamps = signalLights[side];
    lamps.red.material.emissiveColor = phase === 'red' ? signalEmissive.redOn : signalEmissive.redOff;
    lamps.yellow.material.emissiveColor = phase === 'yellow' ? signalEmissive.yellowOn : signalEmissive.yellowOff;
    lamps.green.material.emissiveColor = phase === 'green' ? signalEmissive.greenOn : signalEmissive.greenOff;
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
  const district = districtForZ(-28 + i * 18);
  const profile = districtProfile[district];
  root.metadata = { pedestrian: true, baseSpeed: .75 + i * .08, speed: (.75 + i * .08) * profile.pedestrian, direction: i % 2 === 0 ? 1 : -1, phase: i * 1.7, district };
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
    const hooks = entity.metadata?.animationHooks;
    if (!hooks) return;
    for (const hook of hooks) hook(dt, entity);
  },
};
window.MakyrenAnimationHooks = animationHooks;

const proximityHud = document.createElement('div');
proximityHud.id = 'traffic-proximity-hud';
proximityHud.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:7;padding:7px 9px;border:1px solid #ffffff22;border-radius:8px;background:#07101dcc;color:#fff;font:600 11px system-ui;display:none;pointer-events:none;';
proximityHud.setAttribute('aria-live', 'polite');
document.body.appendChild(proximityHud);

let elapsed = 0;
let proximityVisible = false;
let lastProximityText = '';
let nearestVehicleDistance = Infinity;
let nearestPedestrianDistance = Infinity;
scene.onBeforeRenderObservable.add(() => {
  const now = performance.now();
  const dt = Math.min(.1, engine.getDeltaTime() / 1000);
  elapsed += dt;
  signalState.elapsed += dt;
  const current = signalCycle[signalIndex];
  const signalPhase = signalState.phase;
  signalState.remaining = current ? Math.max(0, current.duration - signalState.elapsed) : 0;
  if (current && signalState.elapsed >= current.duration) {
    signalState.elapsed = 0;
    signalIndex = (signalIndex + 1) % signalCycle.length;
    setSignal(signalCycle[signalIndex].phase);
  }

  let nearestVehicleDistanceSquared = Infinity;
  nearestPedestrianDistance = Infinity;
  const onFoot = playerRoot?.isEnabled();
  const driving = playerVehicle?.isEnabled();
  const playerRootX = onFoot ? playerRoot.position.x : 0;
  const playerRootZ = onFoot ? playerRoot.position.z : 0;
  const playerVehicleX = driving ? playerVehicle.position.x : 0;
  const playerVehicleZ = driving ? playerVehicle.position.z : 0;
  for (const vehicle of traffic) {
    const laneDirection = vehicle.position.x < 0 ? 1 : -1;
    const district = districtForZ(vehicle.position.z);
    const profile = districtProfile[district];
    const baseSpeed = vehicle.metadata?.baseSpeed ?? trafficFallbackBaseSpeeds.get(vehicle) ?? 2.2;
    const targetSpeed = baseSpeed * profile.speed;
    vehicle.speed = targetSpeed;
    const metadata = vehicle.metadata || (vehicle.metadata = {});
    metadata.traffic = true;
    metadata.laneDirection = laneDirection;
    metadata.signalPhase = signalPhase;
    metadata.district = district;
    metadata.districtLabel = profile.label;
    metadata.targetSpeed = targetSpeed;
    if (!driving) continue;
    const dxToPlayer = vehicle.position.x - playerVehicleX;
    const dzToPlayer = vehicle.position.z - playerVehicleZ;
    const distanceSquaredToPlayer = dxToPlayer * dxToPlayer + dzToPlayer * dzToPlayer;
    if (distanceSquaredToPlayer < nearestVehicleDistanceSquared) nearestVehicleDistanceSquared = distanceSquaredToPlayer;
    if (distanceSquaredToPlayer < 14.44) {
      const distanceToPlayer = Math.sqrt(distanceSquaredToPlayer);
      const away = vehicle.position.x >= playerVehicleX ? 1 : -1;
      const strength = Math.max(.015, (3.8 - distanceToPlayer) * .035);
      vehicle.position.x += away * strength;
      if (distanceToPlayer < 2.35) vehicle.position.z -= laneDirection * strength * 1.5;
    }
    const approachingCrosswalk = laneDirection > 0
      ? vehicle.position.z < -1.5 && vehicle.position.z > -8
      : vehicle.position.z > -1.5 && vehicle.position.z < 5;
    if (signalPhase === 'red' && approachingCrosswalk) {
      const stopZ = laneDirection > 0 ? -3.15 : .15;
      vehicle.speed = 0;
      vehicle.metadata.targetSpeed = 0;
      if (laneDirection > 0) vehicle.position.z = Math.min(vehicle.position.z, stopZ);
      else vehicle.position.z = Math.max(vehicle.position.z, stopZ);
    }
  }

  nearestVehicleDistance = Number.isFinite(nearestVehicleDistanceSquared) ? Math.sqrt(nearestVehicleDistanceSquared) : Infinity;

  let nearestPedestrianDistanceSquared = Infinity;
  for (const pedestrian of pedestrians) {
    const data = pedestrian.metadata;
    const pedestrianDistrict = districtForZ(pedestrian.position.z);
    const pedestrianProfile = districtProfile[pedestrianDistrict];
    const baseSpeed = data.baseSpeed ?? data.speed;
    if (onFoot) {
      const dxToPlayer = pedestrian.position.x - playerRootX;
      const dzToPlayer = pedestrian.position.z - playerRootZ;
      const distanceSquaredToPlayer = dxToPlayer * dxToPlayer + dzToPlayer * dzToPlayer;
      if (distanceSquaredToPlayer < nearestPedestrianDistanceSquared) nearestPedestrianDistanceSquared = distanceSquaredToPlayer;
    }
    data.baseSpeed = baseSpeed;
    data.district = pedestrianDistrict;
    data.districtLabel = pedestrianProfile.label;
    data.targetSpeed = baseSpeed * pedestrianProfile.pedestrian;
    data.speed = data.targetSpeed;
    pedestrian.position.z += data.speed * data.direction * dt;
    if (pedestrian.position.z > 34) pedestrian.position.z = -34;
    if (pedestrian.position.z < -34) pedestrian.position.z = 34;
    pedestrian.rotation.y = data.direction > 0 ? Math.PI : 0;
    pedestrian.position.y = Math.sin(elapsed * 4 + data.phase) * .025;
    animationHooks.update(pedestrian, dt);
  }
  if (Number.isFinite(nearestPedestrianDistanceSquared)) nearestPedestrianDistance = Math.sqrt(nearestPedestrianDistanceSquared);

  if (driving) {
    const playerX = playerVehicle.position.x;
    const playerZ = playerVehicle.position.z;
    for (const vehicle of traffic) {
      const dx = vehicle.position.x - playerX;
      const dz = vehicle.position.z - playerZ;
      if (Math.abs(dx) < trafficCollisionHalfWidth && Math.abs(dz) < trafficCollisionHalfDepth) {
        const push = dx >= 0 ? .12 : -.12;
        vehicle.position.x += push;
        playerVehicle.position.x -= push * .45;
        collisionState.active = true;
        collisionState.lastImpact = now;
        collisionState.lastType = 'vehicle';
        collisionState.impacts += 1;
      }
    }
  }
  if (onFoot) {
    const playerX = playerRootX;
    const playerZ = playerRootZ;
    for (const pedestrian of pedestrians) {
      const dx = playerX - pedestrian.position.x;
      const dz = playerZ - pedestrian.position.z;
      const distanceSquared = dx * dx + dz * dz;
      if (distanceSquared < 1.1025) {
        const distance = Math.sqrt(distanceSquared);
        const len = Math.max(.001, distance);
        playerRoot.position.x += (dx / len) * .07;
        playerRoot.position.z += (dz / len) * .07;
        collisionState.active = true;
        collisionState.lastImpact = now;
        collisionState.impacts++;
        collisionState.lastType = 'pedestrian';
      }
    }
    for (const vehicle of traffic) {
      const dx = playerRoot.position.x - vehicle.position.x;
      const dz = playerRoot.position.z - vehicle.position.z;
      const distanceSquared = dx * dx + dz * dz;
      if (distanceSquared < 1.5625) {
        const len = Math.max(.001, Math.sqrt(distanceSquared));
        playerRoot.position.x += (dx / len) * .08;
        playerRoot.position.z += (dz / len) * .08;
        collisionState.active = true;
        collisionState.lastImpact = now;
        collisionState.impacts++;
        collisionState.lastType = 'vehicle';
      }
    }
  }
  if (now - collisionState.lastImpact > 350) {
    collisionState.active = false;
    collisionState.lastType = null;
  }
  const nearestTraffic = window.MakyrenTraffic.nearestTrafficDistance;
  if (nearestTraffic < 5) {
    const proximityText = onFoot
      ? (nearestTraffic < 1.05 ? 'PEDESTRIAN PROXIMITY • COLLISION RISK' : 'PEDESTRIAN PROXIMITY')
      : (nearestTraffic < 2.35 ? 'TRAFFIC PROXIMITY • BRAKING' : 'TRAFFIC PROXIMITY');
    if (!proximityVisible) {
      proximityHud.style.display = 'block';
      proximityVisible = true;
    }
    if (proximityText !== lastProximityText) {
      proximityHud.textContent = proximityText;
      lastProximityText = proximityText;
    }
  } else if (proximityVisible) {
    proximityHud.style.display = 'none';
    proximityVisible = false;
    lastProximityText = '';
  }
});

window.MakyrenTraffic = {
  version: '041',
  collision: collisionState,
  vehicles: traffic,
  pedestrians,
  signals: signalState,
  districts: districtProfile,
  get districtCounts() {
    return traffic.reduce((counts, vehicle) => { const district = vehicle.metadata?.district || districtForZ(vehicle.position.z); counts[district] = (counts[district] || 0) + 1; return counts; }, {});
  },
  get pedestrianDistrictCounts() {
    return pedestrians.reduce((counts, pedestrian) => { const district = pedestrian.metadata?.district || districtForZ(pedestrian.position.z); counts[district] = (counts[district] || 0) + 1; return counts; }, {});
  },
  get nearestVehicleDistance() {
    return nearestVehicleDistance;
  },
  get nearestPedestrianDistance() {
    return nearestPedestrianDistance;
  },
  get nearestTrafficDistance() {
    return playerRoot?.isEnabled() ? this.nearestPedestrianDistance : this.nearestVehicleDistance;
  },
};
