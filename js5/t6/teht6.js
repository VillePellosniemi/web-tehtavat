function Kellonaika () {
  let paiva = new Date();
  let tunnit = paiva.getHours();
  let minuutit = paiva.getMinutes();
  let sekunnit = paiva.getSeconds();
  minuutit = checkTime(minuutit);
  sekunnit = checkTime(sekunnit);
  document.getElementById('kello').innerHTML = tunnit + ':' + minuutit + ':' + sekunnit;
  let t = setInterval(Kellonaika, 500);
}

function checkTime (i) {
  if (i < 10) {
    i= "0" + i;
  }
  return i;
}