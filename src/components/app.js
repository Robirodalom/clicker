new Vue({
el: '#vue-app',
data: {
  actualCookies: 0,
  sumCookies: 0,
  clickCookie: 1,
  buildingCookie: 0
},
methods: {
  clickMainCookie: function(){
    this.actualCookies += this.clickCookie;
    this.sumCookies += this.clickCookie;
  }
}


})
