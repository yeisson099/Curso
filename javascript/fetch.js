'use strict'
//fetch  y peticiones a servicios/apis rest
//sustituto ajax
var usuarios = [];
var div = document.querySelector('#usuarios');
var span = document.querySelector('.load');
fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((user, i) => {
            var nombre = document.createElement('h2');
            nombre.innerHTML = i + user.first_name + "" + user.last_name;
            div.appendChild(nombre);
            span.style.display = "none"
        });

    });