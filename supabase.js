const SUPABASE_URL='https://ytrekuiqmvjolwwrvpno.supabase.co';
const SUPABASE_ANON_KEY='';
const PLAYER_KEY='demo-makyren';
const localKey='makyren-local-save';
let cloudReady=false;
export async function loadCloud(){if(!SUPABASE_ANON_KEY)return null;try{const r=await fetch(`${SUPABASE_URL}/rest/v1/makyren_player_progress?player_key=eq.${encodeURIComponent(PLAYER_KEY)}&select=*`,{headers:{apikey:SUPABASE_ANON_KEY,Authorization:`Bearer ${SUPABASE_ANON_KEY}`}});if(!r.ok)return null;const rows=await r.json();cloudReady=rows.length>0;return rows[0]||null}catch{return null}}
export async function saveCloud(data){if(!SUPABASE_ANON_KEY)return false;try{const r=await fetch(`${SUPABASE_URL}/rest/v1/makyren_player_progress?on_conflict=player_key`,{method:'POST',headers:{apikey:SUPABASE_ANON_KEY,Authorization:`Bearer ${SUPABASE_ANON_KEY}`,'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify({player_key:PLAYER_KEY,player_name:"Ma'Kyren",cash:data.cash,health:data.health||100,wanted:data.wanted||0,mission:data.mission||'find',district:data.district||'New Haven',level:data.level||1,xp:data.xp||0,state:data.state||{},updated_at:new Date().toISOString()})});cloudReady=r.ok;return r.ok}catch{return false}}
export function localFallback(){try{return JSON.parse(localStorage.getItem(localKey)||'{}')}catch{return {}}}
export function setLocal(data){try{localStorage.setItem(localKey,JSON.stringify(data))}catch{}}
export function isCloudReady(){return cloudReady}