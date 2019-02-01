function  Pizza(crust, sauce, cheese, meats, veggies){
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meats = meats;
  this.veggies = veggies;
}


$(document).ready(function(){
  $("#create").click(function(){
    $("#menu").hide();
    $("#pizzaCustom").show();
  })
  $("#pizzaDone").click(function(){
    $("#pizzaBuilder").hide();
    $("#priceTab").show();
  })



})
