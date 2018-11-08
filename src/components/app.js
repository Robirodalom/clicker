new Vue({
el: '#vue-app',
data: {
  actualCookies: 0,
  sumCookies: 0,
  clickCookie: 1,
  buildingCookie: 0,
  bonusPercent: 1.0,
  buildingsInfo: [
    {name: 'Henagon', ammount: 0, cost: 10, baseEarn: 1, upgrades: 0}, {name: 'Diagon', ammount: 0, cost: 105, baseEarn: 11, upgrades: 0},
    {name: 'Triangle', ammount: 0, cost: 1100, baseEarn: 1150, upgrades: 0}, {name: 'Quadrilateral', ammount: 0, cost: 11500, baseEarn: 12100, upgrades: 0},
    {name: 'Pentagon', ammount: 0, cost: 121000, baseEarn: 126500, upgrades: 0}, {name: 'Hexagon', ammount: 0,cost: 1270000, baseEarn: 1331000, upgrades: 0},
    {name: 'Heptagon', ammount: 0, cost: 13335000, baseEarn: 13970000, upgrades: 0}, {name: 'Octagon', ammount: 0, cost: 140000000, baseEarn: 146685000, upgrades: 0}
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
          },250);
        })
  },

methods: {
  clickMainCookie: function(){
    this.actualCookies += this.clickCookie;
    this.sumCookies += this.clickCookie;
  },
  buyBuilding: function(tmpName){
    if(tmpName == "Henagon"){
      if(this.buildingsInfo[0].cost <= this.actualCookies){
        this.actualCookies -= this.buildingsInfo[0].cost;
        this.buildingsInfo[0].ammount++;
        this.buildingsInfo[0].cost*= 1.15;
        this.buildingsInfo[0].cost = parseFloat(this.buildingsInfo[0].cost.toFixed(0));
      }
    }
    else if(tmpName == "Diagon"){
      this.buildingsInfo[1].ammount++;
    }
  },
  updateEarning: function(){
    this.buildingCookie = 0;
    var i;
    for(i = 0; i < 8; i++){
      this.buildingCookie += parseFloat( (this.buildingsInfo[i].baseEarn * this.buildingsInfo[i].ammount * (this.buildingsInfo[i].upgrades + 1) * this.bonusPercent).toFixed(0));
    }
  },
  addEarnings: function(){
    this.actualCookies += this.buildingCookie / 4;
    this.sumCookies += this.buildingCookie / 4;

    this.actualCookies = parseFloat(this.actualCookies.toFixed(2));
    this.sumCookies = parseFloat(this.sumCookies.toFixed(2));

  }
}


})
