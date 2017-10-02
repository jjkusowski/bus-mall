'use strict';
var products = [];
// names of 3 products currently being displayed
var Store.current = [];
// names of 3 products in last iteration
var Store.previous = [];


function Store(name, path){
  this.name = name;
  this.path = path;
  this.clicked = 0;
  this.displayed = 0;
  products.push(this);
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
