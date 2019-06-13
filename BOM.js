'use strict'
//Tamaño de la ventana
console.log(window.innerHeight);
console.log(window.innerWidth);
//Tamaño pantalla
var h = screen.availHeight;
var w = screen.availWidth;
console.log(h);
console.log(w);
//url
console.log(window.location.href );

function redirect (url) {
    window.location.href=url;

}
function newWindow (url){
    window.open(url,'','width =200,height=100');
}



