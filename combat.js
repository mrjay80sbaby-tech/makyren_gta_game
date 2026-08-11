// MAKYREN-009: lightweight mobile-first interaction/combat foundation.
const CombatSystem={
  cooldown:0,
  ammo:12,
  health:100,
  target:null,
  range:18,
  damage:25,
  fire(){if(this.cooldown>0||this.ammo<=0)return false;this.cooldown=.22;this.ammo--;const t=this.target;if(t&&t.userData&&typeof t.userData.health==='number'){t.userData.health=Math.max(0,t.userData.health-this.damage);if(t.userData.health===0)t.visible=false}return true},
  reload(){this.ammo=12},
  interact(target){this.target=target||null;return !!this.target},
  update(dt){this.cooldown=Math.max(0,this.cooldown-dt)}
};
window.MakyrenCombat=CombatSystem;
export default CombatSystem;