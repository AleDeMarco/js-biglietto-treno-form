document.getElementById('genera').addEventListener('click', function() {
  var nome = document.getElementById('name').value;
  var km = document.getElementById('km').value;
  var eta = document.getElementById('eta').value;
  var sconto = 'Biglietto standard'

  var prezzo = 0.21 * km;
  if (eta == 1) {
    prezzo = prezzo * 0.8;
    sconto = 'Tariffa minorenni';
  }
  if (eta == 3) {
    prezzo = prezzo * 0.6;
    sconto = 'Tariffa silver';
  }

  document.getElementById('nome-pass').innerHTML = nome;
  document.getElementById('offerta').innerHTML = sconto;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*13)+1;
  document.getElementById('cp').innerHTML = Math.floor(Math.random()*10000)+90000;
  document.getElementById('costo').innerHTML = '€ ' +  prezzo.toFixed(2);
  document.getElementById('bottom-box').className = 'show';
})

document.getElementById('annulla').addEventListener('click', function() {
  document.getElementById('name').value = '';
  document.getElementById('km').value = '';
  document.getElementById('eta').value = '';
  document.getElementById('bottom-box').className = 'hidden';
})
