// MAKYREN-024 — Wanted level presentation foundation
const state={level:0,heat:0,last:0};
const hud=document.createElement('div');
hud.id='wantedHud';
hud.style.cssText='position:fixed;top:76px;right:16px;padding:8px 11px;background:#05080dcc;border-radius:7px;font:700 14px system-ui;z-index:40;letter-spacing:.08em;color:#fff;display:none';
document.body.appendChild(hud);
function render(){hud.textContent='WANTED  '+'★'.repeat(state.level)+'☆'.repeat(5-state.level);hud.style.display=state.level?'block':'none'}
function addWanted(amount=1){state.heat=Math.min(100,state.heat+amount*35);state.level=Math.min(5,Math.max(1,Math.ceil(state.heat/20)));state.last=performance.now();render();window.dispatchEvent(new CustomEvent('makyren:wanted',{detail:{level:state.level,heat:state.heat}}))}
function reduceHeat(){if(!state.level)return;if(performance.now()-state.last>12000){state.heat=Math.max(0,state.heat-3);state.level=Math.ceil(state.heat/20);render();window.dispatchEvent(new CustomEvent('makyren:wanted',{detail:{level:state.level,heat:state.heat}}))}}
addEventListener('keydown',e=>{if(e.code==='KeyF')addWanted(1)});
document.getElementById('fire')?.addEventListener('click',()=>addWanted(1));
setInterval(reduceHeat,1000);render();
window.MAKYREN_WANTED={get level(){return state.level},get heat(){return state.heat},add:addWanted,clear:()=>{state.level=0;state.heat=0;render()}};
