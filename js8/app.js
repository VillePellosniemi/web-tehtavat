const nappi = document.querySelector('#hakunappi');
nappi.addEventListener('click', Haku);

const vastaus = document.getElementById('hakuteksti').value;

function Haku () {
  fetch('http://api.tvmaze.com/search/shows?q=girls')
  .then(function(vastaus) {
    return vastaus.json();
  }).then(function(json){
    Tulos(json);
  }).catch(function(error){
    console.log(error);
  });
}

function Tulos () {

}