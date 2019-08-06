'use strict'
var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth()+1;
var dia = fecha.getDate();
var textoHora = `
    el año es: ${year}
    el mes es: ${mes}
    el dia es: ${dia}
   
`;
var ambas = 'contiene "dobles comillas" y \'comillas simples\' sin problemas';
 console.log(textoHora)
//funciones matematicas
//decimal a entero
Math.ceil()
//redondear
Math.floor()
//redondea segun 0.5+-
Math.round()