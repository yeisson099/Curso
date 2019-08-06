'use strict'

var valor1 =parseInt(prompt("porfavor ingresa 1 numeros", " "));
var valor2 =parseInt(prompt("porfavor ingresa 1 numero", " "));
while(valor1 <= 0 ||valor2<=0|| isNaN(valor1)|| isNaN(valor2)){
    var valor1 =parseInt(prompt("porfavor ingresa 1 numeros", " "));
    var valor2 =parseInt(prompt("porfavor ingresa 1 numero", " "));
}
if (valor1 > valor2) {
    alert('el numero mayor es ' + valor1 + ' y el numero menor es ' + valor2);
} else if (valor1 < valor2) {
    alert('el numero mayor es ' + valor2 + ' y el numero menor es ' + valor1);
} else if (valor1 == valor2) {
    alert('los numeros son iguales');
}
console.log('oli')