const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

let listanpituus =  kuvat.length;

for (let i=0; i<listanpituus; i++) {
  let list = document.getElementById('kuva');
  let entry = document.createElement('li');
  let list2 = document.getElementsByTagName('li');
  let entry2 = document.createElement('img');
  document.getElementsByTagName('img').src = kuvat[0];
}