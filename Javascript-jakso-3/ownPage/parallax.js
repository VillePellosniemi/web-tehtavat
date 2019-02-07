window.addEventListener("mousemove", Move);
let layer = document.getElementById('layerone');

function Move (e) {
  let x = e.clientX;
  let y = e.clientY;
  let centerX = x - 630;
  let centerY = y - 306;
  let coor = "Coordinates: (" + x + "," + y + ")";
  let coorCenter = "Coordinates center: (" + centerX + "," + centerY + ")";
  document.getElementById("coordinates").innerHTML = coor;
  document.getElementById("coordinatesCenter").innerHTML = coorCenter;
  layer.style.transform = 'translateX(' + x/2 + 'px) translateY(' + y/100 + 'px)';
}