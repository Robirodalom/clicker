new Vue({
el: '#vue-app',
data: {
  actualCookies: 0,
  sumCookies: 0,
  clickCookie: 1,
  buildingCookie: 0,
  buildingsInfo: [
    {name: 'Henagon', ammount: 0, cost: 10 }, {name: 'Diagon', ammount: 0, cost: 105}, {name: 'Triangle', ammount: 0, cost: 1100},
    {name: 'Quadrilateral', ammount: 0, cost: 11500} ,{name: 'Pentagon', ammount: 0, cost: 121000},{name: 'Hexagon', ammount: 0,cost: 1270000},
    {name: 'Heptagon', ammount: 0, cost: 13335000}, {name: 'Octagon', ammount: 0, cost: 140000000}
  ]
},
methods: {
  clickMainCookie: function(){
    this.actualCookies += this.clickCookie;
    this.sumCookies += this.clickCookie;
  }
}


})
