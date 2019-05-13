var nombre = ["carol", "andres", "jorge"];
var objeto = new Array("diego", "yeisson", "carlos");
// var mostrar = parseInt(prompt('que elemento del array quieres',''));
// alert(nombre[mostrar]);
console.log(nombre);
console.log(objeto);
document.write('<ul>');
for(var i=0; i<objeto.length; i++){
    document.write('<li>'+objeto[i]+'</li>');

}
document.write('</ul>');