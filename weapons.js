// MAKYREN-010 — weapon presentation + melee + hit feedback hooks
const Weapons={
  current:'pistol', weapons:{pistol:{ammo:12,max:12,damage:25,range:28,rate:.22},smg:{ammo:30,max:30,damage:14,range:36,rate:.09}},
  flash:0, meleeCooldown:0,
  select(name){if(this.weapons[name])this.current=name},
  fire(target){const w=this.weapons[this.current];if(this.flash>0||w.ammo<=0)return false;this.flash=.08;w.ammo--;if(target?.userData){target.userData.health=Math.max(0,(target.userData.health??100)-w.damage);target.userData.hitFlash=.12}return true},
  reload(){this.weapons[this.current].ammo=this.weapons[this.current].max},
  melee(target){if(this.meleeCooldown>0)return false;this.meleeCooldown=.45;if(target?.userData)target.userData.health=Math.max(0,(target.userData.health??100)-35);return true},
  update(dt){this.flash=Math.max(0,this.flash-dt);this.meleeCooldown=Math.max(0,this.meleeCooldown-dt)}
};
window.MakyrenWeapons=Weapons;
export default Weapons;