'use strict'

var matriz = ['alejandra','maria', ['a','b','c'] ];
console.log(matriz[2][1]);
var vocales=['a','e','i','o','u'];
var consonantes=['b','c','d','f','g'];
var alfabeto = [vocales,consonantes];
console.log(alfabeto[0][0], alfabeto[1][0]);
console.log(consonantes);
//insertar elemento a un array
consonantes.push('h');
console.log(consonantes);
//eliminar el ultimo elemento
consonantes.pop();
//cambiar la propiedad de un elemento
consonantes[0] = undefined;
//elimnar elemento en concentro
var buscar = consonantes.indexOf('d');
console.log(buscar);
if(buscar > -1){
    //elemento y elementos a borrar
    consonantes.splice(buscar,1)
}
console.log(consonantes);
//array a texto
var convertido = consonantes.join();
console.log(convertido);
//texto a array
var texto = '1 , 2, 3, 4, 2, 45';
var conversion = texto.split(' ,');
console.log(conversion);
// ordenar alfabetico
var vocales=['e','a','o','u','i'];
vocales.sort();
console.log(vocales);
// orden inverso
vocales.reverse();
console.log(vocales);
