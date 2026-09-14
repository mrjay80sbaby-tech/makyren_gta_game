import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';
import { applyCinematicVisuals } from './visual_quality.js';
const mobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||innerWidth<900;
const scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(65,innerWidth/innerHeight,.1,1400);
const renderer=new THREE.WebGLRenderer({antialias:!mobile,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,mobile?1.2:1.65));renderer.setSize(innerWidth,innerHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;document.body.appendChild(renderer.domElement);applyCinematicVisuals(renderer,scene,camera);
scene.add(new THREE.HemisphereLight(0xd9edff,0x19222b,2));const sun=new THREE.DirectionalLight(0xffe6bb,4);sun.position.set(-100,140,60);sun.castShadow=true;sun.shadow.mapSize.set(mobile?1024:2048,mobile?1024:2048);scene.add(sun);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(1200,1200),new THREE.MeshStandardMaterial({color:0x26362c,roughness:.96}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
const road=new THREE.MeshStandardMaterial({color:0x11151a,roughness:.82});for(let x=-180;x<=180;x+=36){const r=new THREE.Mesh(new THREE.BoxGeometry(10,.12,1100),road);r.position.set(x,.06,0);scene.add(r);for(let z=-500;z<500;z+=24){const l=new THREE.Mesh(new THREE.BoxGeometry(.18,.025,7),new THREE.MeshBasicMaterial({color:0xf0cf68}));l.position.set(x,.13,z);scene.add(l)}}
const buildingColors=[0x17212b,0x242d37,0x343a40,0x153246,0x3a3029];for(let x=-160;x<=160;x+=24)for(let z=-160;z<=160;z+=24){if(x%36===0||z%36===0)continue;const w=18+Math.random()*8,d=18+Math.random()*8,h=18+Math.random()*65;const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color:buildingColors[Math.floor(Math.random()*buildingColors.length)],roughness:.62,metalness:.1}));b.position.set(x,h/2,z);b.castShadow=b.receiveShadow=true;scene.add(b);for(let y=4;y<h-2;y+=4){const n=Math.max(1,Math.floor(w/3));for(let i=0;i<n;i++){const win=new THREE.Mesh(new THREE.BoxGeometry(.72,.9,.035),new THREE.MeshBasicMaterial({color:0x9bd7ff}));win.position.set(x-w/2+2+i*3,y,z-d/2-.025);scene.add(win)}}}
const player=new THREE.Group();const skin=new THREE.MeshStandardMaterial({color:0x9a6549,roughness:.6}),clothes=new THREE.MeshStandardMaterial({color:0x111722,roughness:.5});const body=new THREE.Mesh(new THREE.CapsuleGeometry(.62,1.15,8,16),clothes);body.position.y=2.15;body.castShadow=true;player.add(body);const head=new THREE.Mesh(new THREE.SphereGeometry(.49,24,16),skin);head.position.y=3.42;player.add(head);const hair=new THREE.Mesh(new THREE.SphereGeometry(.51,20,12),new THREE.MeshStandardMaterial({color:0x120f0e,roughness:.9}));hair.position.y=3.67;hair.scale.set(1,.55,1);player.add(hair);scene.add(player);
let driving=false,activeCar=null;
const cars=[];
for(let i=0;i<(mobile?14:24);i++){
 const g=new THREE.Group(),c=[0x0d5c8b,0x8c2020,0xd3b84b,0xdddddd,0x101010][i%5];
 const m=new THREE.MeshStandardMaterial({color:c,metalness:.6,roughness:.3});
 const b=new THREE.Mesh(new THREE.BoxGeometry(2.1,.65,4.3),m);b.position.y=.72;b.castShadow=true;g.add(b);
 const cab=new THREE.Mesh(new THREE.BoxGeometry(1.7,.65,2.1),new THREE.MeshStandardMaterial({color:0x111a22,roughness:.1,metalness:.15}));cab.position.y=1.25;g.add(cab);
 g.position.set((Math.random()-.5)*300,0,(Math.random()-.5)*300);
 g.userData.speed=4+Math.random()*3;g.userData.velocity=0;g.userData.ai=true;
 scene.add(g);cars.push(g);
}
const vehiclePrompt=document.createElement('div');vehiclePrompt.id='vehiclePrompt';vehiclePrompt.style.cssText='position:fixed;bottom:16%;left:50%;transform:translateX(-50%);padding:9px 14px;background:#05080ddd;border-radius:8px;font-size:12px;display:none;z-index:16';document.body.appendChild(vehiclePrompt);
function nearestVehicle(){let best=null,dist=Infinity;for(const car of cars){const d=car.position.distanceTo(player.position);if(d<dist){dist=d;best=car}}return {car:best,dist};}
function enterVehicle(){const n=nearestVehicle();if(!driving&&n.car&&n.dist<4){activeCar=n.car;activeCar.userData.ai=false;activeCar.userData.velocity=0;driving=true;player.visible=false;vehiclePrompt.textContent='DRIVING — E TO EXIT';vehiclePrompt.style.display='block';document.getElementById('driveControls')?.classList.remove('hidden')}else if(driving){const side=new THREE.Vector3(2.4,0,0).applyAxisAngle(new THREE.Vector3(0,1,0),activeCar.rotation.y);player.visible=true;player.position.copy(activeCar.position).add(side);activeCar.userData.ai=true;activeCar=null;driving=false;vehiclePrompt.style.display='none';document.getElementById('driveControls')?.classList.add('hidden')}}
addEventListener('keydown',e=>{if(e.code==='KeyE'){const n=nearestVehicle();if(driving||(n.car&&n.dist<4))enterVehicle()}});
const driveInput={forward:false,reverse:false,left:false,right:false};
function bindDriveButton(id,key){const el=document.getElementById(id);if(!el)return;for(const type of ['pointerdown','touchstart'])el.addEventListener(type,e=>{e.preventDefault();driveInput[key]=true},{passive:false});for(const type of ['pointerup','pointercancel','pointerleave','touchend'])el.addEventListener(type,e=>{e.preventDefault();driveInput[key]=false},{passive:false})}
bindDriveButton('driveAccel','forward');bindDriveButton('driveBrake','reverse');bindDriveButton('driveLeft','left');bindDriveButton('driveRight','right');

const clock=new THREE.Clock();let yaw=Math.PI,pitch=.2,drag=false,lx=0,ly=0;addEventListener('pointerdown',e=>{if(e.target===renderer.domElement){drag=true;lx=e.clientX;ly=e.clientY}});addEventListener('pointerup',()=>drag=false);addEventListener('pointermove',e=>{if(!drag)return;yaw-=(e.clientX-lx)*.006;pitch=Math.max(-.1,Math.min(.7,pitch-(e.clientY-ly)*.004));lx=e.clientX;ly=e.clientY});
const keys={};addEventListener('keydown',e=>keys[e.code]=true);addEventListener('keyup',e=>keys[e.code]=false);
function loop(){
 requestAnimationFrame(loop);const dt=Math.min(clock.getDelta(),.05);
 const f=(keys.KeyW?1:0)-(keys.KeyS?1:0),r=(keys.KeyD?1:0)-(keys.KeyA?1:0);
 if(driving&&activeCar){
  const throttle=(keys.KeyW||keys.ArrowUp||driveInput.forward?1:0)-(keys.KeyS||keys.ArrowDown||driveInput.reverse?1:0);
  const steer=(keys.KeyD||keys.ArrowRight||driveInput.right?1:0)-(keys.KeyA||keys.ArrowLeft||driveInput.left?1:0);
  const v=activeCar.userData.velocity||0,maxForward=34,maxReverse=-12;
  if(throttle>0)v=Math.min(maxForward,v+28*dt);
  else if(throttle<0)v=Math.max(maxReverse,v-42*dt);
  else {const dragAmount=12*dt;if(v>0)v=Math.max(0,v-dragAmount);else if(v<0)v=Math.min(0,v+dragAmount)}
  activeCar.userData.velocity=v;
  const steerStrength=Math.min(1,Math.abs(v)/10)*1.85;
  activeCar.rotation.y-=steer*steerStrength*dt*(v>=0?1:-1);
  activeCar.translateZ(-v*dt);
  const limit=470;
  activeCar.position.x=THREE.MathUtils.clamp(activeCar.position.x,-limit,limit);
  activeCar.position.z=THREE.MathUtils.clamp(activeCar.position.z,-limit,limit);
  if(Math.abs(activeCar.position.x)>=limit||Math.abs(activeCar.position.z)>=limit)activeCar.userData.velocity*=.55;
  player.position.copy(activeCar.position);
  const forward=new THREE.Vector3(0,0,-1).applyQuaternion(activeCar.quaternion);
  const desiredCam=activeCar.position.clone().addScaledVector(forward,-10).add(new THREE.Vector3(0,5.2,0));
  camera.position.lerp(desiredCam,1-Math.exp(-7*dt));
  camera.lookAt(activeCar.position.clone().addScaledVector(forward,8).add(new THREE.Vector3(0,1.5,0)));
 }else{
  if(f||r){const n=Math.hypot(f,r),s=6*dt,sy=Math.sin(yaw),cy=Math.cos(yaw);player.position.x+=(r/n*cy+f/n*sy)*s;player.position.z+=(r/n*sy-f/n*cy)*s}
  for(const v of cars){if(v===activeCar||v.userData.ai===false)continue;v.translateZ(-v.userData.speed*dt);if(v.position.z<-180)v.position.z=180}
  const dist=9,cp=Math.cos(pitch),sp=Math.sin(pitch);
  const desired=new THREE.Vector3(player.position.x+Math.sin(yaw)*dist*cp,player.position.y+3.5+dist*sp,player.position.z+Math.cos(yaw)*dist*cp);
  camera.position.lerp(desired,1-Math.exp(-8*dt));camera.lookAt(player.position.x,player.position.y+2,player.position.z);
 }
 // Vehicle proximity prompt
 if(!driving){const n=nearestVehicle();if(n.car&&n.dist<4){vehiclePrompt.textContent='E — ENTER VEHICLE';vehiclePrompt.style.display='block'}else vehiclePrompt.style.display='none'}
 renderer.render(scene,camera)
}
loop();
setTimeout(()=>document.getElementById('loading')?.remove(),1200);addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)});


// MAKYREN-015 — Live HUD + World Integration
const gameState={cash:500,health:100,inventory:['Phone','Starter Pistol']};
const market={x:24,z:24};
const marketMarker=new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,5,16),new THREE.MeshBasicMaterial({color:0x59b5ff}));
marketMarker.position.set(market.x,2.5,market.z);scene.add(marketMarker);
const cashEl=document.getElementById('cash'),healthEl=document.getElementById('health'),promptEl=document.getElementById('prompt'),invEl=document.getElementById('inventoryItems');
function refreshGameUI(){cashEl.textContent='$'+gameState.cash;healthEl.textContent=gameState.health+' HP';invEl.innerHTML=gameState.inventory.map(i=>'<div>• '+i+'</div>').join('')}
refreshGameUI();
let nearMarket=false;
function updateWorldInteraction(){nearMarket=Math.hypot(player.position.x-market.x,player.position.z-market.z)<7;promptEl.textContent=nearMarket?'E — ENTER CITY MARKET':'EXPLORE — Find the blue market marker'}
setInterval(updateWorldInteraction,100);
function interactWorld(){if(nearMarket)document.getElementById('shop').classList.remove('hidden')}
addEventListener('keydown',e=>{if(e.code==='KeyE')interactWorld();if(e.code==='KeyI')document.getElementById('inventory').classList.toggle('hidden')});
document.getElementById('bag').onclick=()=>document.getElementById('inventory').classList.toggle('hidden');
document.getElementById('closeBag').onclick=()=>document.getElementById('inventory').classList.add('hidden');
document.getElementById('closeShop').onclick=()=>document.getElementById('shop').classList.add('hidden');
document.getElementById('buyMedkit').onclick=()=>{if(gameState.cash>=100){gameState.cash-=100;gameState.inventory.push('Medkit');refreshGameUI()}else document.getElementById('shopTitle').textContent='NOT ENOUGH CASH'});


// MAKYREN-017 — Vehicle Polish Layer
const speedHud=document.createElement('div');
speedHud.id='speedHud';
speedHud.innerHTML='<b id="speedValue">0</b><small> MPH</small>';
document.body.appendChild(speedHud);
const vehicleAudio=typeof AudioContext!=='undefined'?new AudioContext():null;
let engineOsc=null,engineGain=null;
function startEngineAudio(){
 if(!vehicleAudio||engineOsc)return;
 vehicleAudio.resume?.();
 engineOsc=vehicleAudio.createOscillator();engineGain=vehicleAudio.createGain();
 engineOsc.type='sawtooth';engineOsc.frequency.value=55;engineGain.gain.value=.025;
 engineOsc.connect(engineGain).connect(vehicleAudio.destination);engineOsc.start();
}
function stopEngineAudio(){if(engineOsc){engineOsc.stop();engineOsc.disconnect();engineGain.disconnect();engineOsc=null;engineGain=null}}
function updateEngineAudio(v){if(engineOsc){engineOsc.frequency.value=55+Math.abs(v)*6;engineGain.gain.value=.015+Math.min(.045,Math.abs(v)*.0015)}}
const originalEnterVehicle=enterVehicle;
function enterVehiclePolished(){
 const wasDriving=driving;originalEnterVehicle();
 if(!wasDriving&&driving){startEngineAudio();speedHud.classList.add('active')}
 if(wasDriving&&!driving){stopEngineAudio();speedHud.classList.remove('active')}
}
addEventListener('keydown',e=>{if(e.code==='KeyE')setTimeout(()=>{if(driving)startEngineAudio();else stopEngineAudio()},0)});
setInterval(()=>{if(driving&&activeCar){const mph=Math.round(Math.abs(activeCar.userData.velocity||0)*3.1);document.getElementById('speedValue').textContent=mph;updateEngineAudio(activeCar.userData.velocity||0)}},80);


// MAKYREN-017B — Vehicle lights, collision response, and safer traffic
const vehicleLights=new WeakMap();
for(const car of cars){
 const headMat=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.28});
 const brakeMat=new THREE.MeshBasicMaterial({color:0xff1111,transparent:true,opacity:.25});
 const heads=[],brakes=[];
 for(const x of [-.65,.65]){
  const h=new THREE.Mesh(new THREE.BoxGeometry(.32,.16,.08),headMat.clone());h.position.set(x,.82,-2.17);car.add(h);heads.push(h);
  const b=new THREE.Mesh(new THREE.BoxGeometry(.32,.16,.08),brakeMat.clone());b.position.set(x,.82,2.17);car.add(b);brakes.push(b);
 }
 vehicleLights.set(car,{heads,brakes});
}
function updateVehicleLights(car,braking=false){
 const set=vehicleLights.get(car);if(!set)return;
 for(const h of set.heads)h.material.opacity=driving&&car===activeCar?.95:.38;
 for(const b of set.brakes)b.material.opacity=braking?.98:.28;
}
function resolveVehicleCollisions(){
 for(let i=0;i<cars.length;i++)for(let j=i+1;j<cars.length;j++){
  const a=cars[i],b=cars[j],dx=b.position.x-a.position.x,dz=b.position.z-a.position.z;
  const d=Math.hypot(dx,dz),min=3.5;
  if(d>0&&d<min){const nx=dx/d,nz=dz/d,p=(min-d)*.5;
   a.position.x-=nx*p;a.position.z-=nz*p;b.position.x+=nx*p;b.position.z+=nz*p;
   a.userData.velocity=(a.userData.velocity||0)*.55;b.userData.velocity=(b.userData.velocity||0)*.55;
  }
 }
}
setInterval(()=>{
 resolveVehicleCollisions();
 if(driving&&activeCar){const braking=keys.KeyS||keys.ArrowDown||driveInput.reverse;updateVehicleLights(activeCar,braking)}
},50);


// MAKYREN-018 — Open-world performance foundation
const performanceHud=document.createElement('div');
performanceHud.id='performanceHud';
performanceHud.style.cssText='position:fixed;right:14px;bottom:14px;padding:7px 10px;background:#05080dcc;border:1px solid #ffffff14;border-radius:7px;font:10px system-ui;color:#9fb2c4;z-index:20';
document.body.appendChild(performanceHud);

const performanceState={frames:0,last:performance.now(),fps:60,culled:0};
const cullable=[];
scene.traverse(obj=>{if(obj.isMesh&&obj!==ground)cullable.push(obj)});

function updateWorldCulling(){
 const focus=driving&&activeCar?activeCar.position:player.position;
 const maxDistance=mobile?150:230;
 let culled=0;
 for(const obj of cullable){
  if(!obj.userData.worldCullDistance)obj.userData.worldCullDistance=maxDistance;
  const d=obj.getWorldPosition(new THREE.Vector3()).distanceTo(focus);
  const visible=d<obj.userData.worldCullDistance;
  obj.visible=visible;
  if(!visible)culled++;
 }
 performanceState.culled=culled;
}

function updatePerformance(){
 performanceState.frames++;
 const now=performance.now(),elapsed=now-performanceState.last;
 if(elapsed>=500){
  performanceState.fps=Math.round(performanceState.frames*1000/elapsed);
  performanceState.frames=0;performanceState.last=now;
  performanceHud.textContent='FPS '+performanceState.fps+'  •  OPT '+performanceState.culled+' CULLED';
 }
}

let cullTick=0;
setInterval(()=>{updateWorldCulling();},250);
const originalRender=renderer.render.bind(renderer);
renderer.render=(...args)=>{updatePerformance();return originalRender(...args)};

if(mobile){
 renderer.shadowMap.autoUpdate=false;
 renderer.shadowMap.needsUpdate=true;
}


// MAKYREN-019 — Dynamic world population
const worldPopulation={lastSpawn:0,maxTraffic:mobile?18:32,maxPeds:mobile?14:26,pedestrians:[]};
function makePedestrian(){
 const g=new THREE.Group();
 const body=new THREE.Mesh(new THREE.CapsuleGeometry(.28,.65,6,10),new THREE.MeshStandardMaterial({color:Math.random()*0xffffff}));
 body.position.y=1.05;g.add(body);
 const head=new THREE.Mesh(new THREE.SphereGeometry(.25,12,10),new THREE.MeshStandardMaterial({color:0x9a6549}));
 head.position.y=1.8;g.add(head);
 g.position.set((Math.random()-.5)*180,0,(Math.random()-.5)*180);
 g.userData.direction=new THREE.Vector3(Math.random()-.5,0,Math.random()-.5).normalize();
 g.userData.speed=.8+Math.random()*1.2;scene.add(g);return g;
}
while(worldPopulation.pedestrians.length<worldPopulation.maxPeds)worldPopulation.pedestrians.push(makePedestrian());
function updatePedestrians(dt){
 const focus=driving&&activeCar?activeCar.position:player.position;
 for(const p of worldPopulation.pedestrians){
  if(p.position.distanceTo(focus)>220){p.position.copy(focus).add(new THREE.Vector3((Math.random()-.5)*120,0,(Math.random()-.5)*120))}
  p.position.addScaledVector(p.userData.direction,p.userData.speed*dt);
  if(Math.random()<.004)p.userData.direction.applyAxisAngle(new THREE.Vector3(0,1,0),(Math.random()-.5)*1.8);
 }
}
const previousLoopRender=renderer.render.bind(renderer);
renderer.render=(...args)=>{updatePedestrians(.016);return previousLoopRender(...args)};


// MAKYREN-020 — Mission framework and objective progression
const missionState={active:null,step:0,completed:[]};
const missionDefinitions=[{
 id:'first-run',title:'FIRST RUN',
 steps:[
  {text:'Go to the meeting point',x:38,z:18,radius:5},
  {text:'Reach the drop location',x:-42,z:-28,radius:6},
  {text:'Return to the city market',x:24,z:24,radius:7}
 ],
 reward:250
}];
const objectiveMarker=new THREE.Group();
const objectiveRing=new THREE.Mesh(new THREE.TorusGeometry(2.2,.12,10,24),new THREE.MeshBasicMaterial({color:0xffc400}));
objectiveRing.rotation.x=Math.PI/2;objectiveRing.position.y=.12;
const objectiveBeam=new THREE.Mesh(new THREE.CylinderGeometry(.35,.35,5,12),new THREE.MeshBasicMaterial({color:0xffc400,transparent:true,opacity:.55}));
objectiveBeam.position.y=2.5;objectiveMarker.add(objectiveRing,objectiveBeam);objectiveMarker.visible=false;scene.add(objectiveMarker);

function startMission(id='first-run'){
 const mission=missionDefinitions.find(m=>m.id===id);if(!mission)return;
 missionState.active=mission;missionState.step=0;setMissionObjective();
}
function setMissionObjective(){
 const mission=missionState.active;if(!mission)return;
 const step=mission.steps[missionState.step];
 objectiveMarker.visible=true;objectiveMarker.position.set(step.x,0,step.z);
 document.getElementById('missionTitle').textContent=mission.title;
 document.getElementById('missionText').textContent=step.text;
}
function updateMission(){
 const mission=missionState.active;if(!mission)return;
 const step=mission.steps[missionState.step],focus=driving&&activeCar?activeCar.position:player.position;
 objectiveMarker.rotation.y+=.025;
 if(Math.hypot(focus.x-step.x,focus.z-step.z)<=step.radius){
  missionState.step++;
  if(missionState.step>=mission.steps.length){
   gameState.cash+=mission.reward;refreshGameUI();
   document.getElementById('missionText').textContent='MISSION COMPLETE +$'+mission.reward;
   missionState.completed.push(mission.id);missionState.active=null;objectiveMarker.visible=false;
  }else setMissionObjective();
 }
}
setInterval(updateMission,100);
setTimeout(()=>startMission(),500);
