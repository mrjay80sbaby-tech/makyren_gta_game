// MAKYREN-013 — streamed interior + shop/garage/inventory foundation
const InteriorSystem={
  active:null,
  inventory:{cash:500,items:{repair_kit:1,ammo_pistol:12}},
  interiors:{garage:{name:'MAKYREN MOTOR WORKS',size:[18,14],upgrades:{engine:500,armor:750,paint:250}},market:{name:'NEW HAVEN MARKET',size:[12,10],items:{snack:15,repair_kit:100,ammo_pistol:40}},safehouse:{name:'SAFEHOUSE',size:[16,12],items:{storage:0}}},
  enter(id){if(!this.interiors[id])return false;this.active=id;return true},
  exit(){this.active=null},
  buy(item,cost){if(this.inventory.cash<cost)return false;this.inventory.cash-=cost;this.inventory.items[item]=(this.inventory.items[item]||0)+1;return true},
  upgrade(type,cost){if(this.inventory.cash<cost)return false;this.inventory.cash-=cost;return true},
  state(){return {active:this.active,inventory:this.inventory}}
};
window.MakyrenInteriors=InteriorSystem;
export default InteriorSystem;