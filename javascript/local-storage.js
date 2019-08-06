'use strict'
//local storage = memoria de navegador

// comprobar si esta disponible en el navegador

if (typeof(Storage) !== 'undefined') {
    console.log('loscalstorage  disponible')
}else{
    console.log('loscalstorage no disponible')

}

//guardar datos en local
localStorage.setItem("titulo", "hola mundo");

//recuperar elemento
var local = localStorage.getItem("titulo");
console.log(local);

//guardar json
 var json = {
     titulos: 'jumper',
     year: '2005',
     calificasion:'5'
 }

 //convertir string para guardar en local storage
localStorage.setItem('json',JSON.stringify(json));

//recuperar objeto
var objeto = JSON.parse(localStorage.getItem('json'));
console.log(objeto);
document.write(objeto.year);

//borrar elemento 
localStorage.removeItem("json");
//vaciar localstorage
localStorage.clear();
