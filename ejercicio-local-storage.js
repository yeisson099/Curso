'use strict'
var formulario = document.querySelector('#form');
var boton = document.querySelector("#eliminar");
var borrar = document.querySelector("#elim");
var div = document.querySelector("#peliculas");
formulario.addEventListener('submit',function(){
    // event.preventDefault();
    var input = document.querySelector('#pelicula').value;

        if(input.length >= 1 ){
        localStorage.setItem(input,input); 
    }
    for (var i in localStorage) {
        if(typeof localStorage[i] == 'string'){
            var li = document.createElement('li');
            li.append(localStorage[i]);
            div.append(li)
            
        }
     
    }
    this.reset();
});
boton.addEventListener("click", function () {
    localStorage.clear();
    
});
// borrar.addEventListener("click", function () {
//     div.remove
// });

