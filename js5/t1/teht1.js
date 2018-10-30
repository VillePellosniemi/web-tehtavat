document.getElementById('etunimi').innerHTML = '<td>Ville</td>';
document.getElementById('sukunimi').innerHTML = '<td>Pellosniemi</td>';
document.getElementById('lempinimi').innerHTML = '<td>Pelzi</td>';
document.getElementById('osoite').innerHTML = '<td>Vanha maantie 6</td>';

let list = document.getElementById('ylapalkki');
let entry = document.createElement('th');
entry.appendChild(document.createTextNode("Puhelin"));
list.appendChild(entry);

document.getElementById('nikki').remove();
document.getElementById('lempinimi').remove();

