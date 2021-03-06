// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10;
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  });
}
 // Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function(mushroom){
   if (state.mushrooms) {
    mushroom.style.visibility = "visible";
   }
   else{
    mushroom.style.visibility = "hidden";
    }
  });
}
 
// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function(pepper){
    if (state.greenPeppers) {
     pepper.style.visibility = "visible";
    }
    else{
     pepper.style.visibility = "hidden";
     }
   });
}

 // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
document.querySelectorAll('.sauce').forEach(function(sauce){
    if (state.whiteSauce) {
     sauce.style.visibility = "visible";
    }
    else{
     sauce.style.visibility = "hidden";
     }
       });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(function(glutenFree){
    if (state.glutenFreeCrust) {
     glutenFree.style.visibility = "visible";
    }
    else{
     glutenFree.style.visibility = "hidden";
     }
   });
 
}
// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  let pepButton =  document.getElementsByClassName('btn-pepperonni')[0];
  let pepperButton = document.getElementsByClassName('btn-green-peppers')[0];
  let mushroomButton = document.getElementsByClassName('btn-mushrooms')[0];
  let sauceButton = document.getElementsByClassName('btn-sauce')[0];
  let crustButton = document.getElementsByClassName('btn-crust')[0];

  if (state.pepperonni === true){
   pepButton.classList.add('active');
  }else{pepButton.classList.remove('active');
  }

  if (state.mushrooms === true){
    mushroomButton.classList.add('active');
   }else{mushroomButton.classList.remove('active');
   }

   if (state.greenPeppers === true){
    pepperButton.classList.add('active');
   }else{pepperButton.classList.remove('active');
   }

   if (state.whiteSauce === true){
    sauceButton.classList.add('active');
   }else{sauceButton.classList.remove('active');
   }

   if (state.glutenFreeCrust === true){
    crustButton.classList.add('active');
   }else{crustButton.classList.remove('active');
   }
}

 // Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
 let ingredientsListTag = document.querySelector('.panel.price ul');
 let html = "";
 let totalPriceListTag = document.getElementsByTagName('strong')[0];
 for(ingredient in ingredients) {
  if (state[ingredient]){
      html += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`}
 }
 ingredientsListTag.innerHTML = html;
 
 let newPrice = basePrice;
for(ingredient in ingredients){
  if (state[ingredient]){
    newPrice += ingredients[ingredient].price;
  }
}totalPriceListTag.innerHTML = newPrice;
}
   

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};


