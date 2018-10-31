const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

let i;
for (i=0; i<kuvat.length; i++) {
  let ul = document.getElementById('kuva');
  let kuva = document.createElement('img');
  let k = document.getElementsByTagName('img');
  k.innerHTML = kuvat[i];
}