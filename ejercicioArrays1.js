 'use strict'
var arreglo = [];
var i =0;
// recibir valores
do{
    var n = parseInt(prompt('introduce un numero',0));
    if(isNaN(n)){
        n = 0;
    };
    i++;
    arreglo.push(n);
}while(i <7){}
// //mostrar arreglo
document.write('<h1>'+'Orden de ingreso'+'</h1>');
document.write('<ul>');
arreglo.forEach((elemento)=>{
  document.write('<li>'+elemento+'</li>');
  console.log(elemento);
});
document.write('</ul>');
//mostrar arreglo ordenado
document.write('<h1>'+'Orden descendente'+'</h1>');
var organizado = arreglo.sort();
document.write('<ul>');
organizado.forEach((elemento)=>{
    document.write('<li>'+elemento+'</li>')
});
document.write('</ul>');
//mostrar arreglo al revez
document.write('<h1>'+'Orden invertido'+'</h1>');
var reverso = arreglo.reverse();
document.write('<ul>');
reverso.forEach((elemento)=>{
    document.write('<li>'+elemento+'</li>')
});
document.write('</ul>');
// document.write('<ul>');
// mostrar tamaño del arreglo
var tamano = arreglo.length;
document.write('El tamaño del arreglo es '+tamano+'</br>');
//busqueda del arreglo
var valor = parseInt(prompt('introduce el valor a buscar',''));
var busqueda = arreglo.some(buscar => buscar == valor  );
var posicion = arreglo.findIndex(buscar => buscar == valor);
console.log(busqueda);
console.log(posicion);
if(busqueda == false){
    document.write('el valor no existe')
}else{
    document.write('el valor se encuentra en la posicion '+posicion);
}

