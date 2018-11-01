document.querySelector('img').addEventListener('mouseover', mouseEnter);
document.querySelector('img').addEventListener('mouseleave', mouseLeave);

function mouseEnter () {
  document.querySelector('img').style.visibility = "visible";
  document.querySelector('p').style.visibility = "hidden";
}

function mouseLeave () {
  document.querySelector('img').style.visibility = "hidden";
  document.querySelector('p').style.visibility = "visible";
}

