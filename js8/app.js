const nappi = document.querySelector('#hakunappi');
nappi.addEventListener('click', Haku);


function Haku () {
  const vastaus = document.getElementById('hakuteksti').value;
  const linkinAlku = 'http://api.tvmaze.com/search/shows?q=';
  const lopullinenLinkki = linkinAlku+vastaus;

  fetch(lopullinenLinkki)
  .then(function(vastaus) {
    return vastaus.json();
  }).then(function(json){
    Tulos(json);
  }).catch(function(error){
    console.log(error);
  });
}

function Tulos () {
  const ul = document.getElementById('hakutulos');

}