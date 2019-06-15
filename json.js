'use strict'
// document.addEventListener('load', ()=> {
   var pelicula = {
       titulo: 'jumper',
       year: 2005,
       pais: 'Estados unidos'
   };
   console.log(pelicula);
   var peliculas = [{
    titulo: 'jumper2',
    year: 2020,
    pais: 'Estados unidos'
   },pelicula];
   console.log(peliculas);
   var div = document.querySelector("#oli");

   for (var index in peliculas) {
       var p = document.createElement('p');
       p.append(peliculas[index].year);
       div.append(p);


   } 
   
// });