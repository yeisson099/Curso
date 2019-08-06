var num1 = parseInt(prompt('introduce el numero', ''));
while (isNaN(num1)) {
    var num1 = parseInt(prompt('introduce el numero', ''));
}
if (num1%2 ==0) {
    document.write('el numero '+num1+' es par');
    
}else{
    document.write('el numero '+num1+' es impar');
}