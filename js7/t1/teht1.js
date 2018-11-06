let nappi = document.querySelector('#nappi');

function Klikkaus () {
  alert('Painoit nappia');
  nappi.addEventListener('click', Klikkaus);
}

nappi.addEventListener('click', Klikkaus);