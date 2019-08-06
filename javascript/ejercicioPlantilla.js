'use strict'
var num1 = parseInt(prompt('ingrese un numero', ' '));
var num2 = parseInt(prompt('ingrese un numero', ' '));

while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    var num1 = parseInt(prompt('ingrese un numero', ' '));
    var num2 = parseInt(prompt('ingrese un numero', ' '));

}
var resultado = "la suma es: " + (num1 + num2) + "</br>" +
    "la resta es: " + (num1 - num2) + "</br>" +
    "la multiplicacion es: " + (num1 * num2) + "</br>" +
    "la division es: " + (num1 / num2) + "</br>";
var resultadocmd = "la suma es: " + (num1 + num2) + "\n" +
    "la resta es: " + (num1 - num2) + "\n" +
    "la multiplicacion es: " + (num1 * num2) + "\n" +
    "la division es: " + (num1 / num2) + "\n";
document.write(resultado);
alert(resultadocmd);
function texto1 (){
    console.log('alo');

}
function texto2 (){
   document.write('alo2');

}

function texto (mostrar = false){
    if (mostrar == false){
        texto1();
    }else{
        texto2();
    }

}
texto();


