// MAKYREN-012 — interactive shops, interiors, missions and economy
const WorldEconomy={cash:500,active:null,shops:[{id:'garage',name:'MAKYREN MOTOR WORKS',type:'garage',x:42,z:42,cost:250},{id:'market',name:'NEW HAVEN MARKET',type:'market',x:-48,z:36,cost:35},{id:'safehouse',name:'SAFEHOUSE',type:'safehouse',x:72,z:-54,cost:0}],missions:[{id:'delivery',title:'NIGHT DELIVERY',reward:750,objective:'Reach the market and return'},{id:'garage',title:'HOT GARAGE',reward:1200,objective:'Bring a vehicle to the garage'}]},
 enter(shop){this.active=shop;return shop},
 buy(cost){if(this.cash<cost)return false;this.cash-=cost;return true},
 completeMission(id){const m=this.missions.find(x=>x.id===id);if(!m)return false;this.cash+=m.reward;return m.reward},
 getInterior(type){return {garage:{width:18,depth:14,props:['lift','toolbench','parts']},market:{width:12,depth:10,props:['shelves','counter','coolers']},safehouse:{width:16,depth:12,props:['bed','desk','storage']}}[type]||null}
};
window.MakyrenWorldEconomy=WorldEconomy;
export default WorldEconomy;