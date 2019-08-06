'use strict'
//DOM
function cambiaColor(color) {
    caja.style.background = color;
}
//query selector
var query = document.querySelector('.divcentral');
var caja = document.getElementById('lista1');
var boton = document.querySelector('#boton');
boton
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
//append o prepend
var cambiar = document.getElementsByClassName('divcentral1');

for (var div in cambiar) {
    if(cambiar[div].className == "divcentral1" ){
        cambiar[div].style.background = "red" ;

    }
}
