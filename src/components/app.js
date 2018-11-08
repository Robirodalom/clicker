new Vue({
el: '#vue-app',
data: {
  actualCookies: 0,
  sumCookies: 0,
  clickCookie: 1,
  buildingCookie: 0,
  bonusPercent: 1.0,
  buildingsInfo: [
    {name: 'Henagon', ammount: 0, cost: 10, baseEarn: 0.1, upgrades: 0}, {name: 'Diagon', ammount: 0, cost: 105, baseEarn: 1, upgrades: 0},
    {name: 'Triangle', ammount: 0, cost: 1100, baseEarn: 11, upgrades: 0}, {name: 'Quadrilateral', ammount: 0, cost: 11500, baseEarn: 120, upgrades: 0},
    {name: 'Pentagon', ammount: 0, cost: 121000, baseEarn: 1300, upgrades: 0}, {name: 'Hexagon', ammount: 0,cost: 1270000, baseEarn: 12500, upgrades: 0},
    {name: 'Heptagon', ammount: 0, cost: 13335000, baseEarn: 140000, upgrades: 0}, {name: 'Octagon', ammount: 0, cost: 140000000, baseEarn: 14000000, upgrades: 0}
  ],
  statisticInfo: [
    'Cookies backed all-time:', 'Cookies clicked all-time:', 'Handmade cookies:', 'Buildings owned:'
    ]
},

mounted: function () {
        this.$nextTick(function () {
            window.setInterval(() => {
                this.updateEarning();
            },1000);
        }),

        this.$nextTick(function() {
          window.setInterval(() => {
            this.addEarnings();
          },1000);
        })
  },

methods: {
  clickMainCookie: function(){
    this.actualCookies += this.clickCookie;
    this.sumCookies += this.clickCookie;
  },
  buyBuilding: function(tmpName){
    var i;
    for(i = 0; i < 8; i++){

    if(tmpName == this.buildingsInfo[i].name){
      if(this.buildingsInfo[i].cost <= this.actualCookies){
        this.actualCookies -= this.buildingsInfo[i].cost;
        this.buildingsInfo[i].ammount++;
        this.buildingsInfo[i].cost*= 1.15;
        this.buildingsInfo[i].cost = parseFloat(this.buildingsInfo[i].cost.toFixed(0));
      }
    }
  }

  },

  updateEarning: function(){
    this.buildingCookie = 0;
    var i;
    for(i = 0; i < 8; i++){
      this.buildingCookie += parseFloat( (this.buildingsInfo[i].baseEarn * this.buildingsInfo[i].ammount * (this.buildingsInfo[i].upgrades + 1) * this.bonusPercent).toFixed(1));
    }
  },

  addEarnings: function(){
    this.actualCookies += this.buildingCookie;
    this.sumCookies += this.buildingCookie;

    this.actualCookies = parseFloat(this.actualCookies.toFixed(2));
    this.sumCookies = parseFloat(this.sumCookies.toFixed(2));
  }
}


})
