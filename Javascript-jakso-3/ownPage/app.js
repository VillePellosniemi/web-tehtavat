'use strict';

//balloon

let balloon = document.querySelector("#balloon");

window.addEventListener("keydown", event => {
  if (event.key === "ArrowUp") {
    let style = window.getComputedStyle(balloon, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    balloon.style.fontSize = (currentSize + 10) + 'px';
    event.preventDefault();
  } else if (event.key === "ArrowDown") {
    let style = window.getComputedStyle(balloon, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    balloon.style.fontSize = (currentSize - 10) + 'px';
    event.preventDefault();
  }
});
