var num1 = parseInt(prompt('introduce un numero 1',' '));
document.write('<h1> TABLA DE MULTPLICAR DEL NUMERO '+num1)
for(var i=0;i<=num1;i++){
    var resultado = num1*i;
    document.write(num1+' x '+i+' = '+resultado+ '</br>');
}


for(var c=0;c<=10;c++){
    document.write('<h1> TABLA DE MULTPLICAR DEL NUMERO '+c+'</h1>')
    for(var i=0;i<=10;i++){
        var resultado = i*c;
        document.write(i+' x '+c+' = '+resultado+ '</br>');
    }
}