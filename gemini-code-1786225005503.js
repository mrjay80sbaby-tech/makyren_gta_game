import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';

async function initGame() {
  // 1. Initialize WebAssembly Physics Engine
  await RAPIER.init();
  const gravity = { x: 0.0, y: -9.81, z: 0.0 };
  const world = new RAPIER.World(gravity);

  // 2. Setup Three.js 3D Renderer
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb); // Sky blue
  scene.fog = new THREE.FogExp2(0x87ceeb, 0.015);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(20, 40, 20);
  dirLight.castShadow = true;
  scene.add(dirLight);

  // 3. Ground / Street World Physics
  const groundMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 200),
    new THREE.MeshStandardMaterial({ color: 0x222222 })
  );
  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.receiveShadow = true;
  scene.add(groundMesh);

  const groundBodyDesc = RAPIER.RigidBodyDesc.fixed();
  const groundBody = world.createRigidBody(groundBodyDesc);
  const groundColliderDesc = RAPIER.ColliderDesc.cuboid(100, 0.1, 100);
  world.createCollider(groundColliderDesc, groundBody);

  // 4. Character (Ma'Kyren) Mesh & Physics
  const skinMaterial = new THREE.MeshStandardMaterial({ color: 0xc58c58, roughness: 0.8 });
  const clothesMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 });

  const characterGroup = new THREE.Group();

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), skinMaterial);
  head.position.y = 1.6;
  head.castShadow = true;
  characterGroup.add(head);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.25, 1.2), clothesMaterial);
  body.position.y = 0.8;
  body.castShadow = true;
  characterGroup.add(body);

  scene.add(characterGroup);

  // Character Kinematic Physics Controller
  const characterBodyDesc = RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(0, 2, 0);
  const characterBody = world.createRigidBody(characterBodyDesc);
  const characterColliderDesc = RAPIER.ColliderDesc.capsule(0.5, 0.3);
  world.createCollider(characterColliderDesc, characterBody);

  const characterController = world.createCharacterController(0.1);

  // 5. Input Listeners
  const keys = {};
  window.addEventListener('keydown', (e) => (keys[e.code] = true));
  window.addEventListener('keyup', (e) => (keys[e.code] = false));

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // 6. Main Game Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    world.step();

    // Movement calculation
    const moveSpeed = 6.0 * delta;
    let moveX = 0;
    let moveZ = 0;

    if (keys['KeyW']) moveZ -= moveSpeed;
    if (keys['KeyS']) moveZ += moveSpeed;
    if (keys['KeyA']) moveX -= moveSpeed;
    if (keys['KeyD']) moveX += moveSpeed;

    const desiredTranslation = { x: moveX, y: -9.81 * delta, z: moveZ };
    const currentCollider = characterBody.collider(0);

    characterController.computeColliderMovement(currentCollider, desiredTranslation);
    const correctedMovement = characterController.getComputedMovement();

    const currentPos = characterBody.translation();
    const newPos = {
      x: currentPos.x + correctedMovement.x,
      y: currentPos.y + correctedMovement.y,
      z: currentPos.z + correctedMovement.z,
    };

    characterBody.setNextKinematicTranslation(newPos);
    characterGroup.position.set(newPos.x, newPos.y - 0.9, newPos.z);

    // Camera Smooth Tracking (Third-Person)
    camera.position.set(newPos.x, newPos.y + 3, newPos.z + 7);
    camera.lookAt(newPos.x, newPos.y + 1, newPos.z);

    renderer.render(scene, camera);
  }

  animate();
}

initGame();