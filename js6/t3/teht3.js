let luku1 = document.querySelector("#num1");
let suoritin = document.querySelector("#suoritin");
let tulos = document.querySelector("#vastaus");


function pluslasku() {
  let vali = luku1.value.split(" ");
  tulos.innerHTML = parseFloat(vali[0]) + parseFloat(vali[2]);
}
function miinuslasku() {
  let vali = luku1.value.split(" ");
  tulos.innerHTML = parseFloat(vali[0]) - parseFloat(vali[2]);
}
function kertolasku() {
  let vali = luku1.value.split(" ");
  tulos.innerHTML = parseFloat(vali[0]) * parseFloat(vali[2]);
}
function jakolasku() {
  let vali = luku1.value.split(" ");
  tulos.innerHTML = parseFloat(vali[0]) / parseFloat(vali[2]);
}
function valitsin(){
  let vali = luku1.value.split(" ");
  let symboli = vali[1];
  if (symboli == "+"){
    pluslasku();
  }
  else if (symboli == "-"){
    miinuslasku();
  }
  else if (symboli == "/"){
    jakolasku();
  }
  else if (symboli == "*"){
    kertolasku();
  }
}
suoritin.addEventListener("click", valitsin);