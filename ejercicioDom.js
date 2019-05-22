'use strict'
var todosLosLi = document.getElementsByTagName('li');
for (var valor in todosLosLi) {
    if (typeof todosLosLi[valor].textContent == 'string'){
    var parrafo = document.createElement('a');
    var texto = document.createTextNode(todosLosLi[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector('#miSection').appendChild(parrafo);
    }
}

var divRojo = document.getElementsByClassName('rojo');
divRojo[0].st
for (var valor in divRojo) {
    
}