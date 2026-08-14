import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, DirectionalLight, PointLight, Color4, MeshBuilder, StandardMaterial, Color3, PBRMaterial, Texture, GlowLayer } from '@babylonjs/core';
import '@babylonjs/loaders/glTF';

const canvas=document.getElementById('renderCanvas');
const qualityParam=new URLSearchParams(location.search).get('quality');
const quality=qualityParam||((innerWidth<720||navigator.hardwareConcurrency<4)?'mobile':'high');
const qualityConfig={mobile:{scale:1.55,glow:.25,windows:false},medium:{scale:1.2,glow:.45,windows:true},high:{scale:.85,glow:.7,windows:true}}[quality]||{scale:.85,glow:.7,windows:true};
const engine=new Engine(canvas,true,{preserveDrawingBuffer:false,stencil:true},true); engine.setHardwareScalingLevel(qualityConfig.scale);
window.MakyrenVisualQuality={preset:quality,config:qualityConfig};
window.MakyrenAssetSlots={character:'assets/makyren.glb',vehicle:'assets/city_vehicle.glb',buildings:'assets/city-kit.glb',props:'assets/street-props.glb'};
const scene=new Scene(engine); scene.clearColor=new Color4(.018,.028,.05,1); scene.fogMode=Scene.FOGMODE_EXP2; scene.fogDensity=quality==='mobile'?.014:.008; scene.fogColor=new Color3(.018,.028,.05); const glow=new GlowLayer('cinematic_glow',scene); glow.intensity=qualityConfig.glow;
const camera=new ArcRotateCamera('camera',-Math.PI/2.5,1.18,30,new Vector3(0,1.8,0),scene);
camera.attachControl(canvas,true); camera.wheelPrecision=80; camera.lowerRadiusLimit=6; camera.upperRadiusLimit=45; camera.minZ=.1; scene.activeCamera=camera;
const skyLight=new HemisphericLight('sky',new Vector3(0,1,0),scene); skyLight.intensity=1.25;
const sun=new DirectionalLight('sun',new Vector3(-0.45,-1,0.35),scene); sun.intensity=2.6; sun.position=new Vector3(30,45,-25);
const road=MeshBuilder.CreateGround('road',{width:18,height:80},scene);
const roadMat=new PBRMaterial('asphalt',scene); roadMat.albedoColor=new Color3(.045,.052,.058); roadMat.roughness=.88; road.material=roadMat;
const sidewalkMat=new PBRMaterial('sidewalk',scene); sidewalkMat.albedoColor=new Color3(.24,.25,.24); sidewalkMat.roughness=.9;
for(const x of [-11,11]){const s=MeshBuilder.CreateGround('sidewalk',{width:4,height:80},scene);s.position.x=x;s.material=sidewalkMat;}
const laneMat=new PBRMaterial('lane_markings',scene); laneMat.albedoColor=new Color3(.55,.58,.52); laneMat.emissiveColor=new Color3(.03,.035,.028); laneMat.roughness=.75;
for(let z=-34;z<=34;z+=8){const dash=MeshBuilder.CreateBox('lane_dash',{width:.12,height:.012,depth:3.2},scene);dash.position.set(0,.012,z);dash.material=laneMat;}
const curbMat=new PBRMaterial('curb_edge',scene); curbMat.albedoColor=new Color3(.12,.14,.15); curbMat.roughness=.82;
for(const x of [-9.3,9.3]){const curb=MeshBuilder.CreateBox('curb',{width:.28,height:.16,depth:80},scene);curb.position.set(x,.08,0);curb.material=curbMat;}
const buildingMat=new PBRMaterial('building',scene); buildingMat.albedoColor=new Color3(.12,.15,.18); buildingMat.metallic=.12; buildingMat.roughness=.62;
for(let i=-30;i<=30;i+=12){for(const x of [-16,16]){const h=8+(Math.abs(i)%20);const b=MeshBuilder.CreateBox('building',{width:8,height:h,depth:9},scene);b.position.set(x,h/2,i);b.material=buildingMat;}}
const windowMat=new PBRMaterial('warm_windows',scene); windowMat.albedoColor=new Color3(.12,.08,.035); windowMat.emissiveColor=new Color3(.55,.22,.045); windowMat.roughness=.3;
const coolWindowMat=new PBRMaterial('cool_windows',scene); coolWindowMat.albedoColor=new Color3(.025,.09,.14); coolWindowMat.emissiveColor=new Color3(.03,.16,.3); coolWindowMat.roughness=.28;
if(qualityConfig.windows)for(let z=-30;z<=30;z+=12){for(const x of [-11.93,11.93]){const h=8+(Math.abs(z)%20);for(let y=3;y<h-.8;y+=3.1){const panel=MeshBuilder.CreateBox('window_panel',{width:.06,height:1.35,depth:1.65},scene);panel.position.set(x,y,z+(z%24===0?1.8:-1.8));panel.material=(z/12)%2===0?windowMat:coolWindowMat;}}}
const storefrontMat=new PBRMaterial('storefront_neon',scene); storefrontMat.albedoColor=new Color3(.06,.02,.09); storefrontMat.emissiveColor=new Color3(.3,.02,.42); storefrontMat.roughness=.35;
for(const z of [-18,6,30]){const sign=MeshBuilder.CreateBox('storefront_sign',{width:5.2,height:.5,depth:.08},scene);sign.position.set(-11.7,3.2,z);sign.material=storefrontMat;}
const carMat=new PBRMaterial('vehicle',scene);carMat.albedoColor=new Color3(.035,.16,.28);carMat.metallic=.82;carMat.roughness=.24;
const car=MeshBuilder.CreateBox('vehicle',{width:2.25,height:.7,depth:4.5},scene);car.position.set(0,.7,-6);car.material=carMat;
const glass=new PBRMaterial('glass',scene);glass.albedoColor=new Color3(.02,.035,.045);glass.metallic=.2;glass.roughness=.08;
const cabin=MeshBuilder.CreateBox('cabin',{width:1.75,height:.62,depth:2.15},scene);cabin.position.set(0,1.25,-6);cabin.material=glass;
const chromeMat=new PBRMaterial('vehicle_chrome',scene); chromeMat.albedoColor=new Color3(.22,.28,.32); chromeMat.metallic=.95; chromeMat.roughness=.16;
for(const x of [-.82,.82]){for(const z of [-7.35,-4.65]){const wheel=MeshBuilder.CreateCylinder('wheel',{diameter:.58,height:.24,tessellation:20},scene);wheel.rotation.z=Math.PI/2;wheel.position.set(x,.48,z);wheel.material=chromeMat;}}
const grille=MeshBuilder.CreateBox('front_grille',{width:1.15,height:.22,depth:.06},scene);grille.position.set(0,.73,-8.28);grille.material=chromeMat;
const tailMat=new PBRMaterial('tail_lights',scene);tailMat.albedoColor=new Color3(.45,.015,.01);tailMat.emissiveColor=new Color3(.3,.008,.004);
for(const x of [-.7,.7]){const tail=MeshBuilder.CreateBox('tail_light',{width:.28,height:.18,depth:.05},scene);tail.position.set(x,.88,-3.78);tail.material=tailMat;}
const headlightMat=new PBRMaterial('headlight_glow',scene); headlightMat.emissiveColor=new Color3(1,.82,.48); headlightMat.albedoColor=new Color3(1,.72,.28);
for(const x of [-.72,.72]){const lamp=MeshBuilder.CreateSphere('headlight',{diameter:.18,segments:12},scene);lamp.position.set(x,.86,-8.18);lamp.material=headlightMat;const light=new PointLight('headlight_point',new Vector3(x,.9,-8.28),scene);light.diffuse=new Color3(1,.72,.34);light.specular=new Color3(1,.85,.55);light.range=15;light.intensity=0;}
const streetLights=[];const lampMat=new PBRMaterial('street_lamp_glow',scene);lampMat.emissiveColor=new Color3(1,.46,.12);lampMat.albedoColor=new Color3(.8,.25,.04);
for(let z=-30;z<=30;z+=12){const x=z%24===0?-8.5:8.5;const pole=MeshBuilder.CreateCylinder('street_lamp_pole',{height:4.7,diameter:.09},scene);pole.position.set(x,2.35,z);pole.material=buildingMat;const bulb=MeshBuilder.CreateSphere('street_lamp_bulb',{diameter:.22,segments:12},scene);bulb.position.set(x,4.75,z);bulb.material=lampMat;const light=new PointLight('street_lamp',new Vector3(x,4.65,z),scene);light.diffuse=new Color3(1,.35,.08);light.specular=new Color3(1,.55,.18);light.range=11;light.intensity=0;streetLights.push({light,bulb});}
const clock={hour:16.5,speed:.045};const formatTime=hour=>{const h=Math.floor(hour)%24;const m=Math.floor((hour-Math.floor(hour))*60);return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;};
function updateLighting(dt){clock.hour=(clock.hour+dt*clock.speed)%24;const sunAngle=((clock.hour-6)/12)*Math.PI;const daylight=Math.max(0,Math.sin(sunAngle));const night=clock.hour<6||clock.hour>=19;sun.intensity=.35+daylight*2.25;skyLight.intensity=.42+daylight*.9;scene.clearColor=new Color4(.012+daylight*.023,.018+daylight*.037,.035+daylight*.04,1);for(const {light,bulb} of streetLights){light.intensity=night?1.9:0;bulb.visibility=night?1:.35;}for(const light of scene.lights.filter(entry=>entry.name==='headlight_point'))light.intensity=night?1.7:0;const hud=document.getElementById('hud');if(hud)hud.innerHTML=`MA'KYREN • VISUAL-004<br><small>${night?'Night lighting active':'Day lighting active'} • ${formatTime(clock.hour)} • ${quality} tier</small>`;}
const playerMat=new PBRMaterial('makyren_skin',scene);playerMat.albedoColor=new Color3(.48,.27,.17);playerMat.roughness=.58;
const shirtMat=new PBRMaterial('makyren_clothes',scene);shirtMat.albedoColor=new Color3(.025,.03,.04);shirtMat.roughness=.72;
const body=MeshBuilder.CreateCapsule('makyren',{height:2.2,radius:.42},scene);body.position.set(0,1.3,2);body.material=shirtMat;
const head=MeshBuilder.CreateSphere('makyren_head',{diameter:0.82,segments:32},scene);head.position.set(0,2.72,2);head.material=playerMat;
const hair=MeshBuilder.CreateSphere('makyren_hair',{diameter:.86,segments:32},scene);hair.scaling.y=.55;hair.position.set(0,3.02,2);const hairMat=new PBRMaterial('hair',scene);hairMat.albedoColor=new Color3(.018,.012,.01);hairMat.roughness=.82;hair.material=hairMat;
scene.environmentTexture=null; scene.render();
let previousTime=performance.now();engine.runRenderLoop(()=>{const now=performance.now();const dt=Math.min(.1,(now-previousTime)/1000);previousTime=now;updateLighting(dt);scene.render();});
addEventListener('resize',()=>engine.resize());
window.__MAKYREN_VISUAL_READY__=true;