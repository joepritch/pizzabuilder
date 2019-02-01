function Pizza(crust, sauce, cheese, meats, veggies){
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meats = meats;
  this.veggies = veggies;
}

var myPizza = new Pizza("","",false, [], []);

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

  $("#regCrustBtn").click(function(){
    $("#stuffedCrust").hide();
    $("#regCrust").show();
  })

  $("#stuffedCrustBtn").click(function(){
    $("#regCrust").hide();
    $("#stuffedCrust").show();
  })

  $("#redSauceBtn").click(function(){
    if ($("#redSauce").is(":hidden")) {
      $("#whiteSauce").hide();
      $("#redSauce").show();
    } else if ($("#redSauce").is(":visible")) {
      $("#redSauce").hide();
    }
  })

  $("#whiteSauceBtn").click(function(){
    if ($("#whiteSauce").is(":hidden")) {
      $("#redSauce").hide();
      $("#whiteSauce").show();
    } else if ($("#whiteSauce").is(":visible")) {
      $("#whiteSauce").hide();
    }
  })

  $("#cheeseBtn").click(function(){
    $("#cheese").toggle();
  })

  $("#meatPepBtn").click(function(){
    $("#meatPep").toggle();
  })

  $("#meatHamBtn").click(function(){
    $("#meatHam").toggle();
  })

  $("#veggiePinaBtn").click(function(){
    $("#veggiesPina").toggle();
  })

  $("#veggieJaleBtn").click(function(){
    $("#veggiesJale").toggle();
  })

  $("#pizzaDone").click(function(){
    $("#pizzaBuilder").hide();
    $("#priceTab").show();
  })

})
