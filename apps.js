'use strict';
// storage for all products from constructor
var products = [];

// names of 3 products currently being displayed
var currentProducts = [];

// names of 3 products in last iteration
var previousProducts = [];

// counter for number of times user clicks
var userClicks = 0;

//holders of names and votes
var names = [];
var votes = [];
var displayed = [];

// Give access to the 3 picture positions and the section they are displayed in on the DOM
var display = document.getElementById('display');
var pic0 = document.getElementById('pic0');
var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');
var header = document.getElementById('header');

function Store(name, path){
  this.name = name;
  this.path = path;
  this.clicked = 0;
  this.displayed = 0;
  products.push(this);
}

// handlers for when each pic is clicked
function pic0Handler() {
  // increment pic0 clicked count
  products[currentProducts[0]].clicked++;
  // increment counter
  userClicks++;
  //check if userClicks is less than 25.
  if (userClicks < 25) {
    // if < 25, call 3 new random images
    displayThree();
  } else {
    // user is done, display results
    localStorage.setItem('storedProduct', JSON.stringify(products));
    changeHeader();
    updateChartArrays();
    drawChart();
  }
}

function pic1Handler() {
  // increment pic0 clicked count
  products[currentProducts[1]].clicked++;
  // increment counter
  userClicks++;
  //check if userClicks is less than 25.
  if (userClicks < 25) {
    // if < 25, call 3 new random images
    displayThree();
  } else {
    // user is done, display results
    localStorage.setItem('storedProduct', JSON.stringify(products));
    changeHeader();
    updateChartArrays();
    drawChart();
  }
}

function pic2Handler() {
  // increment pic0 clicked count
  products[currentProducts[2]].clicked++;
  // increment counter
  userClicks++;
  // check if userClicks is less than 25.
  if (userClicks < 25) {
    // if < 25, call 3 new random images
    displayThree();
  } else {
    // user is done, display results
    localStorage.setItem('storedProduct', JSON.stringify(products));
    changeHeader();
    updateChartArrays();
    drawChart();
    // displayResults();
  }
}

// display 3 random images that do not match each other and are not the same as the previous 3
function displayThree() {
  previousProducts = currentProducts;
  currentProducts = [];
  while (currentProducts.length < 3) {
    // pick a random item
    var productNumber = Math.floor(Math.random() * products.length);
    // check if in previous 3 or current selection
    if (productNumber !== previousProducts[0] && productNumber !== previousProducts[1] && productNumber !== previousProducts[2] && productNumber !== currentProducts[0] && productNumber !== currentProducts[1]) {
      currentProducts.push(productNumber);
    }
  }

  pic0.src = products[currentProducts[0]].path;
  products[currentProducts[0]].displayed++;
  pic1.src = products[currentProducts[1]].path;
  products[currentProducts[1]].displayed++;
  pic2.src = products[currentProducts[2]].path;
  products[currentProducts[2]].displayed++;
}

//Changes the header when the chart is displayed
function changeHeader() {
  var h1El = document.createElement('h1');
  h1El.textContent = 'See your results below!';
  header.innerHTML = '';
  header.appendChild(h1El);
}

// If statement to check for local storage.  If yes, load it.  If not, create new stores.
if (localStorage) {
  products = JSON.parse(localStorage.getItem('storedProduct'));
} else {
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
}
// calls display 3 on page load
displayThree();

// Click listeners, one per picture position
pic0.addEventListener('click', pic0Handler);
pic1.addEventListener('click', pic1Handler);
pic2.addEventListener('click', pic2Handler);


// Chart stuff

function updateChartArrays() {
  for (var i = 0; i < products.length; i++) {
    names[i] = products[i].name;
    votes[i] = products[i].clicked;
    displayed[i] = products[i].displayed;
  }
}

var data = {
  labels: names,
  datasets: [
    {
      label: 'Number of Votes',
      data: votes,
      backgroundColor: '#6D7993'
    },
    {
      label: 'Number of Times Displayed',
      data: displayed,
      backgroundColor: '#96858F'
    }]
};

function drawChart() {
  display.innerHTML = '';
  var ctx = document.getElementById('click-chart').getContext('2d');
  new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            stepSize: 1.0
          }
        }]
      }
    }
  });
}
