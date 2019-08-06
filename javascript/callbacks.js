'use strict'
function sumame (num1, num2,mostrar,duplicar){
    var sumar = num1+num2;
    mostrar(sumar);
    duplicar(sumar);
    return sumar;
}

sumame(5,8,function(d){
    console.log('la suma es:', d)
},function (d) {
    console.log('el doble es ', (d*2)); 
});
 var n = 15;
 n= n.toString();
 console.log(typeof n);

 // ...parametro ||  (...arreglo)