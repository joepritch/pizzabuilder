function Pizza(crust, sauce, cheese, meats, veggies){
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meats = meats;
  this.veggies = veggies;
}

Pizza.prototype.cost = function() {
  var cost = 0;
  console.log(cost)
  if (this.crust == "reg") {
  	cost += 10
  } else if (this.crust == "stuffed"){
  	cost += 12
  }
  if (this.sauce == "red" || this.sauce == "white") {
  	cost += 1
  }
  if (this.cheese == true) {
  	cost += 1
  }
  cost += (2*(this.meats.length))
  cost += (3*(this.veggies.length))
  console.log(cost)
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
