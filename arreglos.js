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
//recorrer array
// for each
document.write('<ul>');
objeto.forEach((elemento, index, data)=>{
    document.write('<h1>'+ data +'</h1>');
    document.write('<li>'+elemento+'el indice es '+index+'</li>');

});
document.write('</ul>');
//for in
//indice in elemento
document.write('<ul>');
for (let nombres in nombre){
    document.write('<li>'+nombre[nombres]+'</li>');
};
document.write('</ul>');



