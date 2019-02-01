function  Pizza(crust, sauce, cheese, meats, veggies){
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meats = meats;
  this.veggies = veggies;
}


$(document).ready(function(){
  $("#pizzaDone").click(function(){
    $("#pizzaBuilder").hide();
    $("#priceTab").show();
  })


})
