//Pizza Business Logic
function Pizza(crust, sauce, cheese, meats, veggies){
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meats = meats;
  this.veggies = veggies;
}

Pizza.prototype.cost = function() {
  var cost = 0;
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
  return cost;
}

//UI Logic
$(document).ready(function(){
var crust = "reg";
var sauce = "";
var cheese = false;
var meats = [];
var veggies = [];

  $("#regCrustBtn").click(function(){
    $("#stuffedCrust").hide();
    $("#regCrust").show();
    crust = "reg";
  })

  $("#stuffedCrustBtn").click(function(){
    $("#regCrust").hide();
    $("#stuffedCrust").show();
    crust = "stuffed";
  })

  $("#redSauceBtn").click(function(){
    if ($("#redSauce").is(":hidden")) {
      $("#whiteSauce").hide();
      $("#redSauce").show();
      sauce = "red";
    } else {
      $("#redSauce").hide();
      sauce = "";
    }
  })

  $("#whiteSauceBtn").click(function(){
    if ($("#whiteSauce").is(":hidden")) {
      $("#redSauce").hide();
      $("#whiteSauce").show();
      sauce = "white";
    } else {
      $("#whiteSauce").hide();
      sauce = "";
    }
  })

  $("#cheeseBtn").click(function(){
    $("#cheese").toggle();
    if ($("#cheese").is(":hidden")) {
      cheese = false;
    } else {
      cheese = true;
    }
  })

  $("#meatPepBtn").click(function(){
    $("#meatPep").toggle();
    if ($("#meatPep").is(":hidden")) {
      var remove = meats.indexOf("pep");
      meats.splice(remove,1);
    } else {
      meats.push("pep")
    }
  })

  $("#meatHamBtn").click(function(){
    $("#meatHam").toggle();
    if ($("#meatHam").is(":hidden")) {
      var remove = meats.indexOf("ham");
      meats.splice(remove,1);
    } else {
      meats.push("ham")
    }
  })

  $("#veggiePinaBtn").click(function(){
    $("#veggiesPina").toggle();
    if ($("#veggiesPina").is(":hidden")) {
      var remove = veggies.indexOf("pina");
      veggies.splice(remove,1);
      console.log(remove);
    } else {
      veggies.push("pina")
    }
  })

  $("#veggieJaleBtn").click(function(){
    $("#veggiesJale").toggle();
    if ($("#veggiesJale").is(":hidden")) {
      var remove = veggies.indexOf("jale");
      veggies.splice(remove,1);
    } else {
      veggies.push("jale")
    }
  })

  $("#pizzaDone").click(function(){
    $("#priceTab").show();
    var myPizza = new Pizza(crust, sauce, cheese, meats, veggies);
    console.log(myPizza);
    var result = (myPizza.cost());
    $("#result").text(result);
  })
})
