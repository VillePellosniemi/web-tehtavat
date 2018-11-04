const kuva = document.querySelector("img");
const teksti = document.querySelector("p");
function hover() {
  teksti.setAttribute("class", "nayta");
}
function leave(){
  teksti.setAttribute("class", "piilota");
}
kuva.addEventListener("mouseenter", hover);
kuva.addEventListener("mouseleave", leave);

