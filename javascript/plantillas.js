'use strict'

//Plantillas de texto 

var nombre = prompt('metelo');
var apellido = prompt('metelo2');
//interpolacion de varibales ${}
var texto = ` 

hola ${nombre} 
que tal
como:  
<h1>bbcita ${apellido} </h1>


`;

document.write(texto);
