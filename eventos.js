'use strict'
//evento raton
window.addEventListener('load',()=>{
    var boton = document.querySelector('#boton');
var input1 = document.querySelector('#campo_nombre');
var input2 = document.querySelector('#campo_nombre1');
function cambiarColor (){
    var bg = boton.style.background;
    if (bg != 'red'){
        boton.style.background = "red";

    }else{
        boton.style.background = "purple";
        boton.style.border = "4px dotted green"
    }
  

    return true;
}
//evento click
boton.addEventListener('click',()=>{
    cambiarColor();
});
//mouser over 
boton.addEventListener('mouseover',()=>{
    cambiarColor();
});
//mouese out
boton.addEventListener('mouseout',()=>{
    cambiarColor();
});
//focus
input1.addEventListener('focus',()=>{
    console.log('estas dentro del input1');
});
//blur
input1.addEventListener('blur',()=>{
    console.log('saliste del input1');
});
//keydown
input2.addEventListener('keydown',(event)=>{
    console.log('[keydown] presionaste la tecla '+String.fromCharCode(event.keyCode));
});
//keyup
input2.addEventListener('keyup',(event)=>{
    console.log('[keyup] presionaste la tecla '+String.fromCharCode(event.keyCode));
});
//keypress
input2.addEventListener('keypress',(event)=>{
    console.log('[keypress] presionaste la tecla '+String.fromCharCode(event.keyCode));
});
//load  
//  boton.style.height="purple";
// boton.style.background = "red";
 var query = document.querySelector('.divcentral');


})
