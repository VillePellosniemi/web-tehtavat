const nappi = document.querySelector('#hakunappi');
nappi.addEventListener('click', Haku);


function Haku () {
  const vastaus = document.getElementById('hakuteksti').value;
  const lopullinenLinkki = 'http://api.tvmaze.com/search/shows?q='+vastaus;

  fetch(lopullinenLinkki)
  .then(function(vastaus) {
    return vastaus.json();
  }).then(function(json){
    Tietoa(json);
  }).catch(function(error){
    console.log(error);
  });
}

function Tietoa (infoa) {
  let tulostus = document.querySelector("#hakutulokset");
  tulostus.innerHTML = "";

  for (let i=0; i<infoa.length; i++) {
    const nimi = infoa[i].show.name;
    const linkki = infoa[i].show.url;
    const summary = infoa[i].show.summary;
    const kuva = infoa[i].show.image.medium;

    let header = document.createElement('h1');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let link = document.createElement('a');
    let link2 = document.createTextNode(linkki);

    header.setAttribute('class', 'nimi');
    tulostus.appendChild(header);
    let text = document.createTextNode(nimi);
    header.appendChild(text);

    img.setAttribute('class', 'kuva');
    tulostus.appendChild(img);
    img.setAttribute('src', kuva);

    p.setAttribute('class', 'summary');
    tulostus.appendChild(p);
    p.innerHTML = summary;

    link.setAttribute('class', 'linkki');
    tulostus.appendChild(link);
    link.appendChild(link2);
    link.setAttribute('href', linkki);
  }
}