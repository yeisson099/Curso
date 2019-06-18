'use strict'
//fetch  y peticiones a servicios/apis rest
//sustituto ajax
var usuarios = [];
var div = document.querySelector('#usuarios');
var div2 = document.querySelector('#usuario');
var span = document.querySelector('.load');
var span2 = document.querySelector("#usuario .load");

function getusuarios() {
    return fetch('https://reqres.in/api/users?page=2')

}
function getusuario() {
    return fetch('https://reqres.in/api/users/2')

}
getusuarios()
    .then(data => data.json())
    .then(users => {
        console.log(usuarios);
        mostrarDatos(users.data);

        return getusuario();
    })
    .then(datos => datos.json())
    .then(usuario => {
        console.log(usuario)
        mostrarUsuario(usuario.data);
    });


function mostrarDatos(usuarios) {

    usuarios.map((user, i) => {
        var img = document.createElement('img');

        var nombre = document.createElement('h2');
        nombre.innerHTML = i + user.first_name + "" + user.last_name;
        img.src = user.avatar;
        div.appendChild(nombre);
        div.appendChild(img)
        span.style.display = "none"
    });
}
function mostrarUsuario(user) {
    var img = document.createElement('img');

        var nombre = document.createElement('h2');
        nombre.innerHTML =user.first_name + "" + user.last_name;
        img.src = user.avatar;
        div2.appendChild(nombre);
        div2.appendChild(img)
        span2.style.display = "none"
}