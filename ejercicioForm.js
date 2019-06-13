'use strict'
window.addEventListener("load", () => {
    var formulario = document.querySelector("#form");
    var div = document.querySelector(".mostrar");
    div.style.display = "none";
    formulario.addEventListener('submit', () => {
        console.log("evento accionado")
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);
        var spann= document.querySelector("#nombre");
        var spane= document.querySelector(".error_e");
        var spana= document.querySelector(".error_a");
        if (nombre.trim() == null || nombre.trim().length == 0 ) {
            alert('nombre no valido');
           spann.style.background="red";
           spann.placeholder = "la cago";
            return false;
        }else{
            spann.style.display = 'none';
        }
        if (apellido.trim() == null || apellido.trim().length == 0 ) {
            spana.innerHTML='el apellido no es valido'; 
            return false;
        }else{
            spana.style.display = 'none';
        }
        if (edad == null|| isNaN(edad) || nombre <= 0 ) {
            spane.innerHTML='la edad no es valido';
            return false;
        }else{
            spane.style.display = 'none';
        }
        
        // //metodo 1
        // var imprimir = nombre + ' ' + apellido + ' edad: ' + edad;
        // var parrafo = document.createElement('p');
        // var arrafo = document.createElement('br');
        // parrafo.append(imprimir);
        // parrafo.append(arrafo);
        // parrafo.append(nombre + ' ');
        // parrafo.append(apellido);
        // parrafo.append(' edad: ' + edad);
        // div.append(parrafo);
        //metodo 2
        div.style.display = "block";
        var datos = [nombre, apellido, edad];
        for (var index in datos) {
            var parrafo = document.createElement('p');
            parrafo.append(datos[index]);
            div.append(parrafo);
        };
    });

});