'use strict'
var i = 0;
var suma=0;
do {
    var valor = parseInt(prompt('introduce un valor', '  '));
    if (isNaN(valor)) {
        valor = 0;
    } else if (valor >= 0 ){
        var suma = valor + suma;
        i++;
    }
} while (valor >= 0) {
    var media = suma / i;
    alert('la suma de los numeros introducidos es '+suma);
    alert(i);
    alert(media);

}