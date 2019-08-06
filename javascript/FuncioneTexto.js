'use strict'
var num = 44;
var txt1 = '   holi como estas     ';
var txt2 = 'holi2';

// var dato = num.toString();
// console.log(typeof dato);
// var dato= txt1.toUpperCase();
// console.log(dato);
// var dato= txt1.toLowerCase();
// console.log(dato);

// // longitud
// var nombre = "dffdsdfaf";
// console.log(nombre.length);
// var array = [2,5,6,'fdsfsf'];
// console.log(array.length);
// //concatenar
// var textox = txt1.concat(txt2);
// //busqueda texto
// var busqueda = txt1.indexOf(" ");
// console.log(busqueda);
// var busqueda = txt1.lastIndexOf(" ");
// console.log(busqueda);
// var busqueda = txt1.search(" ");
// console.log(busqueda);
// // array
// var busqueda1 = txt1.match(" ");
// console.log(busqueda1);
// console.log(busqueda1.input);
// //busqueda global //gi o //g
// var busqueda1 = txt1.match(/ /g);
// console.log(busqueda1);
// // obtener parte de un string (poscion carater, #de caracteres)
// var busqueda1 = txt1.substr(5,4);
// console.log(busqueda1);
// // obtener 1 letra de un string (poscion carater)
// var busqueda1 = txt1.charAt(8);
// console.log(busqueda1);
// // 
// var busqueda1 = txt1.startsWith("holi");
// console.log(busqueda1);
// var busqueda1 = txt1.endsWith(" ");
// console.log(busqueda1);
// var busqueda1 = txt1.includes("como");
// console.log(busqueda1);
//Funciones de reemplazo
// var busqueda = txt1.replace('estas','andas2313');
// console.log(busqueda);
//slice trae un fragmento del string
var busqueda = txt1.slice(8, 9);
console.log(busqueda);
// genera arreglo dependiendo de lo solicitado
var busqueda = txt1.split(' ');
console.log(busqueda);
//trim mostrar sin espacios al inicio o final
var busqueda = txt1.trim();
console.log(busqueda);
console.log(txt1);



