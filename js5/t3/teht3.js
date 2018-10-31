const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

let listanpituus = kuvat.length;
let i;

for (i=0; i<listanpituus; i++) {
  let lista = document.getElementById('kuva').innerHTML = '<li class="lista"></li>';
  lista.document.getElementsByClassName('lista').innerHTML = kuvat[i];
}