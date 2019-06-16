'use strict'
var formulario = document.querySelector('#form');
// var boton = document.querySelector("#eliminar");
// var borrar = document.querySelector("#elim");
formulario.addEventListener('submit',function(){
    
    event.preventDefault();
    var input = document.querySelector('#pelicula').value;
        if(input.length >= 1 ){
        localStorage.setItem(input,input); 
    }
    var ul = document.querySelector("#peliculas");
    for (var i in localStorage) {
        if(typeof localStorage[i] == 'string'){
            // if(localStorage.getItem(input) == localStorage.getItem(input)){
                var li = document.createElement("li");
                li.append(localStorage.getItem(input));
                ul.append(li);
            // }

            break;
        }
     
    }
    this.reset();
    
});
// boton.addEventListener("click", function () {
//     localStorage.clear();
    
// });
// borrar.addEventListener("click", function () {
//     div.remove
// });

