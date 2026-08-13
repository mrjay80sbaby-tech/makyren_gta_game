import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, DirectionalLight, Color4, MeshBuilder, StandardMaterial, Color3, PBRMaterial, Texture } from '@babylonjs/core';
import '@babylonjs/loaders/glTF';

const canvas=document.getElementById('renderCanvas');
const engine=new Engine(canvas,true,{preserveDrawingBuffer:false,stencil:true},true);
const scene=new Scene(engine); scene.clearColor=new Color4(0.035,0.055,0.075,1);
const camera=new ArcRotateCamera('camera',-Math.PI/2.5,1.05,18,new Vector3(0,2,0),scene);
camera.attachControl(canvas,true); camera.wheelPrecision=80; camera.lowerRadiusLimit=6; camera.upperRadiusLimit=45;
new HemisphericLight('sky',new Vector3(0,1,0),1.25,scene);
const sun=new DirectionalLight('sun',new Vector3(-0.45,-1,0.35),2.6,scene); sun.position=new Vector3(30,45,-25);
const road=MeshBuilder.CreateGround('road',{width:18,height:80},scene);
const roadMat=new PBRMaterial('asphalt',scene); roadMat.albedoColor=new Color3(.045,.052,.058); roadMat.roughness=.88; road.material=roadMat;
const sidewalkMat=new PBRMaterial('sidewalk',scene); sidewalkMat.albedoColor=new Color3(.24,.25,.24); sidewalkMat.roughness=.9;
for(const x of [-11,11]){const s=MeshBuilder.CreateGround('sidewalk',{width:4,height:80},scene);s.position.x=x;s.material=sidewalkMat;}
const buildingMat=new PBRMaterial('building',scene); buildingMat.albedoColor=new Color3(.12,.15,.18); buildingMat.metallic=.12; buildingMat.roughness=.62;
for(let i=-30;i<=30;i+=12){for(const x of [-16,16]){const h=8+(Math.abs(i)%20);const b=MeshBuilder.CreateBox('building',{width:8,height:h,depth:9},scene);b.position.set(x,h/2,i);b.material=buildingMat;}}
const carMat=new PBRMaterial('vehicle',scene);carMat.albedoColor=new Color3(.035,.16,.28);carMat.metallic=.82;carMat.roughness=.24;
const car=MeshBuilder.CreateBox('vehicle',{width:2.25,height:.7,depth:4.5},scene);car.position.set(0,.7,-6);car.material=carMat;
const glass=new PBRMaterial('glass',scene);glass.albedoColor=new Color3(.02,.035,.045);glass.metallic=.2;glass.roughness=.08;
const cabin=MeshBuilder.CreateBox('cabin',{width:1.75,height:.62,depth:2.15},scene);cabin.position.set(0,1.25,-6);cabin.material=glass;
const playerMat=new PBRMaterial('makyren_skin',scene);playerMat.albedoColor=new Color3(.48,.27,.17);playerMat.roughness=.58;
const shirtMat=new PBRMaterial('makyren_clothes',scene);shirtMat.albedoColor=new Color3(.025,.03,.04);shirtMat.roughness=.72;
const body=MeshBuilder.CreateCapsule('makyren',{height:2.2,radius:.42},scene);body.position.set(0,1.3,2);body.material=shirtMat;
const head=MeshBuilder.CreateSphere('makyren_head',{diameter:0.82,segments:32},scene);head.position.set(0,2.72,2);head.material=playerMat;
const hair=MeshBuilder.CreateSphere('makyren_hair',{diameter:.86,segments:32},scene);hair.scaling.y=.55;hair.position.set(0,3.02,2);const hairMat=new PBRMaterial('hair',scene);hairMat.albedoColor=new Color3(.018,.012,.01);hairMat.roughness=.82;hair.material=hairMat;
scene.environmentTexture=null;
engine.runRenderLoop(()=>scene.render());
addEventListener('resize',()=>engine.resize());
window.__MAKYREN_VISUAL_READY__=true;