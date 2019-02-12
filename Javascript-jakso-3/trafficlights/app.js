'use strict';

let colorclicked = document.querySelector("#colorclicked");
let red = document.querySelector("#red");
let redtimes = document.querySelector('#redtimes');
let yellow = document.querySelector("#yellow");
let yellowtimes = document.querySelector('#yellowtimes');
let green = document.querySelector("#green");
let greentimes = document.querySelector('#greentimes');
let getcolor = document.querySelector('#getcolor');

const clickCounter = { redlight: 0, yellowlight: 0, greenlight: 0,};

red.addEventListener('click', (evt) => {
  clickCounter['redlight'] += 1;
  colorclicked.innerHTML = 'Red';
  getcolor.innerHTML = window.getComputedStyle(red, null).getPropertyValue('background-color');
  redtimes.innerHTML = "Red: "+ Object.values(clickCounter)[0] + " times";
});

yellow.addEventListener('click', (evt) => {
  clickCounter['yellowlight'] += 1;
  colorclicked.innerHTML = 'Yellow';
  getcolor.innerHTML = window.getComputedStyle(yellow, null).getPropertyValue('background-color');
  yellowtimes.innerHTML = "Yellow: "+ Object.values(clickCounter)[1] + " times";
});

green.addEventListener('click', (evt) => {
  clickCounter['greenlight'] += 1;
  colorclicked.innerHTML = 'Green';
  getcolor.innerHTML = window.getComputedStyle(green, null).getPropertyValue('background-color');
  greentimes.innerHTML = "Green: "+ Object.values(clickCounter)[2] + " times";
});

