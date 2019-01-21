document.getElementsByTagName('td')[0].innerHTML = "Ville";
document.getElementsByTagName('td')[1].innerHTML = "Pellosniemi";
document.getElementsByTagName('td')[2].innerHTML = "Pelzeri";
document.getElementsByTagName('td')[3].innerHTML = "Kevätkuja 3 A, 02200 Espoo";

let list = document.getElementById('ylapalkki');
let entry = document.createElement('th');
entry.appendChild(document.createTextNode("Puhelin"));
list.appendChild(entry);

let list2 = document.getElementById('alapalkki');
let entry2 = document.createElement('td');
entry2.appendChild(document.createTextNode("+358 44 0311 533"));
list2.appendChild(entry2);

document.getElementsByTagName('th')[2].remove();
document.getElementsByTagName('td')[2].remove();

