'use strict'
//DOM
function cambiaColor(color) {
    caja.style.background = color;
}
//query selector
var query = document.querySelector('.divcentral');
var caja = document.getElementById('lista1');
// caja.innerHTML = 'te cambie puto';
// caja.style.background= 'black';
console.log(caja);
// var color = prompt('que color quieres','');
// cambiaColor(color);
//todos los elementos
var divs = document.getElementsByTagName('li');
console.log(divs);
var contenido = divs[2].textContent;
console.log(contenido);
for (var valor in divs) {
    if (typeof divs[valor].textContent == 'string') {
        var link = document.createElement('a');
        var texto = document.createTextNode(divs[valor].textContent);
        link.appendChild(texto);
        document.querySelector('#miSection').appendChild(link);
    }

}

// divs[2].innerHTML = 'chupelo';
// console.log(contenido);
