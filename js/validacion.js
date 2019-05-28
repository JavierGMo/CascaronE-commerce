let btnRegistro = document.getElementById('nuevoRegistro');
let nombreRegistro = document.getElementById('nombre');
let apellidoRegistro = document.getElementById('apellido');
let nombreUsuario = document.getElementById('usuarioNuevo');
let correo_registro = document.getElementById('correoRegistro');
let passNueva = document.getElementById('nuevoPassword');
let passConfirm = document.getElementById('passwordConfirmado');
/**inicio de sesion */
let correoIS = document.getElementById('correo-sesion');
let passIS = document.getElementById('password');
let btnIS = document.getElementById('iniciosesion');
/**Boton para registro */
btnRegistro.addEventListener('click', function(e) {
    e.preventDefault();
    if (nombreRegistro.value.trim() == '' ||
        apellidoRegistro.value.trim() == '' ||
        nombreUsuario.value.trim() == '') {
        alert("No puedes escribir escribir espacios en blanco");
    }
    /* else {
            alert('Exito ;)');
        }*/
    if (passNueva.value.trim() !== passConfirm.value.trim()) {
        alert("Mal escrito");
    } else if (passNueva.value.trim() === '' ||
        passConfirm.value.trim() === '') {
        alert("No se admiten espacios en blanco");
    } else if (passNueva.value.trim() === passConfirm.value.trim()) {
        alert("Usuario registrado");
    }

});
/**Boton para inicio de sesion */
btnIS.addEventListener('click', function(e) {
    e.preventDefault();
    if (correoIS.value.trim() == '') {
        alert("No puedes escribir escribir espacios en blanco");
    } else if (passIS.value.trim() == '') {
        alert('No puedes escribir espacios en blanco');
    } else {
        alert('Exito ;)');
    }

});



/*
(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {

        alert('hola');
    });
})();*/