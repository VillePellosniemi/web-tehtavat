const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

let listanpituus =  kuvat.length;

for (let i=0; i<listanpituus; i++) {
  let list = document.getElementById('kuva').src = kuvat;
  let entry = document.createElement('img');
}