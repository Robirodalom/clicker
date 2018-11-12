new Vue({
el: '#vue-app',
data: {
  actualCookies: 0,
  sumCookies: 0,
  clickCookie: 1,
  buildingCookie: 0,
  bonusPercent: 1.0,
  buildingNum: 8,
  buildingsInfo: [
    {name: 'Henagon', ammount: 0, cost: 10, baseEarn: 0.1, id: 'gray'}, {name: 'Diagon', ammount: 0, cost: 105, baseEarn: 1,id: 'gray'},
    {name: 'Triangle', ammount: 0, cost: 1100, baseEarn: 11, id: 'gray'}, {name: 'Quadrilateral', ammount: 0, cost: 11500, baseEarn: 120, id: 'gray'},
    {name: 'Pentagon', ammount: 0, cost: 121000, baseEarn: 1300, id:'gray'}, {name: 'Hexagon', ammount: 0,cost: 1270000, baseEarn: 12500,  id: 'gray'},
    {name: 'Heptagon', ammount: 0, cost: 13335000, baseEarn: 140000, id:'gray'}, {name: 'Octagon', ammount: 0, cost: 140000000, baseEarn: 14000000,  id: 'gray'}
  ],
  statisticInfo: [
    'Cookies backed all-time:', 'Cookies clicked all-time:', 'Handmade cookies:', 'Buildings owned:'
  ],

  upgradeInfo: [
    {name: 'Henagon', ammount: 0, cost: 100, id: 'gray'}, {name: 'Diagon', ammount: 0, cost: 1050, id: 'gray'},
    {name: 'Triangle', ammount: 0, cost: 11000,  id: 'gray'}, {name: 'Quadrilateral', ammount: 0, cost: 115000,   id: 'gray'},
    {name: 'Pentagon', ammount: 0, cost: 1210000,   id:'gray'}, {name: 'Hexagon', ammount: 0,cost: 12700000,  id: 'gray'},
    {name: 'Heptagon', ammount: 0, cost: 133350000,  id:'gray'}, {name: 'Octagon', ammount: 0, cost: 1400000000,  id: 'gray'}
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
        }),

        this.$nextTick(function(){
          window.setInterval(() => {
            this.checkBuildingToAfford();
            this.checkUpgradesToAfford();
          }, 200);
        })
  },

methods: {
  clickMainCookie: function(){
    this.actualCookies += this.clickCookie;
    this.sumCookies += this.clickCookie;
  },
  buyBuilding: function(tmpName){
    var i;
    for(i = 0; i < this.buildingNum; i++){

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

  buyUpgrade: function(tmpName){
    var i;
    for(i = 0; i < this.buildingNum; i++){

    if(tmpName == this.upgradeInfo[i].name){
      if(this.upgradeInfo[i].cost <= this.actualCookies){
        this.actualCookies -= this.upgradeInfo[i].cost;
        this.upgradeInfo[i].ammount++;
        this.upgradeInfo[i].cost*= 9;
        this.upgradeInfo[i].cost = parseFloat(this.upgradeInfo[i].cost.toFixed(0));
      }
    }
  }
},

  updateEarning: function(){
    this.buildingCookie = 0;
    var i;
    for(i = 0; i < this.buildingNum; i++){
      this.buildingCookie += parseFloat( (this.buildingsInfo[i].baseEarn * this.buildingsInfo[i].ammount * Math.pow(2, this.upgradeInfo[i].ammount) * this.bonusPercent).toFixed(1));
    }
  },

  addEarnings: function(){
    this.actualCookies += this.buildingCookie;
    this.sumCookies += this.buildingCookie;

    this.actualCookies = parseFloat(this.actualCookies.toFixed(2));
    this.sumCookies = parseFloat(this.sumCookies.toFixed(2));
  },
  checkBuildingToAfford: function(){
    var i;
    for(i = 0; i < this.buildingNum; i++){
      if(this.buildingsInfo[i].cost > this.actualCookies){
        this.buildingsInfo[i].id = "gray";
      }
      else {
        this.buildingsInfo[i].id = this.buildingsInfo[i].name;
      }
    }

  },

  checkUpgradesToAfford: function(){
    var i;
    for(i = 0; i < this.buildingNum; i++){
      if(this.upgradeInfo[i].cost > this.actualCookies){
        this.upgradeInfo[i].id = "gray";
      }
      else {
        this.upgradeInfo[i].id = this.upgradeInfo[i].name;
      }
    }
  }

}


})
