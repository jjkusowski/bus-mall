'use strict';
var products = [];
// names of 3 products currently being displayed
var currentProducts = [];
// names of 3 products in last iteration
var previousProducts = [];
// counter for number of times user clicks
var userClicks = 0;

// Give access to the 3 picture positions on the DOM
var display = document.getElementById('display');
var pic0 = document.getElementById('pic0');
var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');

function Store(name, path){
  this.name = name;
  this.path = path;
  this.clicked = 0;
  this.displayed = 0;
  products.push(this);
}

function pic0Handler(e) {
  // increment pic0 clicked count
  products[currentProducts[0]].clicked++
  // increment counter
  userClicks++
  //check if userClicks is less than 25.  if not, display results
  if (userClicks < 25) {
    // call 3 new random images
    displayThree();
  } else {
    displayResults();
  }
}

function pic1Handler(e) {
  // increment pic0 clicked count
  products[currentProducts[1]].clicked++
  // increment counter
  userClicks++
  //check if userClicks is less than 25.  if not, display results
  if (userClicks < 25) {
    // call 3 new random images
    displayThree();
  } else {
    displayResults();
  }
}

function pic2Handler(e) {
  // increment pic0 clicked count
  products[currentProducts[2]].clicked++
  // increment counter
  userClicks++
  //check if userClicks is less than 25.  if not, display results
  if (userClicks < 25) {
    // call 3 new random images
    displayThree();
  } else {
    displayResults();
  }
}

function displayThree() {
  previousProducts = currentProducts;
  currentProducts = [];
  console.log('previous products were ' + previousProducts);
  while (currentProducts.length < 3) {
    // pick a random item
    var productNumber = Math.floor(Math.random() * products.length);
    // check if in previous 3
    console.log('product number is ' + productNumber);
    if (productNumber !== previousProducts[0] && productNumber !== previousProducts[1] && productNumber !== previousProducts[2] && productNumber !== currentProducts[0] && productNumber !== currentProducts[1]) {
      currentProducts.push(productNumber);
    }
  }
  console.log('current products are ' + currentProducts);

  pic0.src = products[currentProducts[0]].path;
  products[currentProducts[0]].displayed++
  pic1.src = products[currentProducts[1]].path;
  products[currentProducts[1]].displayed++
  pic2.src = products[currentProducts[2]].path;
  products[currentProducts[2]].displayed++
}

function displayResults() {
  var ulEl = document.createElement('ul');
  for ( var i = 0; i < products.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = products[i].name + ': ' + products[i].clicked;
    ulEl.appendChild(liEl);
  }
  display.innerHTML = '';
  display.appendChild(ulEl);
}

new Store('bag', 'img/bag.jpg');
new Store('banana', 'img/banana.jpg');
new Store('bathroom', 'img/bathroom.jpg');
new Store('boots', 'img/boots.jpg');
new Store('breakfast', 'img/breakfast.jpg');
new Store('bubblegum', 'img/bubblegum.jpg');
new Store('chair', 'img/chair.jpg');
new Store('cthulhu', 'img/cthulhu.jpg');
new Store('dog-duck', 'img/dog-duck.jpg');
new Store('dragon', 'img/dragon.jpg');
new Store('pen', 'img/pen.jpg');
new Store('pet-sweep', 'img/pet-sweep.jpg');
new Store('scissors', 'img/scissors.jpg');
new Store('shark', 'img/shark.jpg');
new Store('sweep', 'img/sweep.png');
new Store('tauntaun', 'img/tauntaun.jpg');
new Store('unicorn', 'img/unicorn.jpg');
new Store('usb', 'img/usb.gif');
new Store('water-can', 'img/water-can.jpg');
new Store('wine-glass', 'img/wine-glass.jpg');

displayThree();

// Click listeners, one per picture position
pic0.addEventListener('click', pic0Handler);
pic1.addEventListener('click', pic1Handler);
pic2.addEventListener('click', pic2Handler);
