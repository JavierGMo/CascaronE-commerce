console.log('flag');
/**acciones para carpinteto */
let mensajesCarpintero = document.getElementById('mensajes-carpintero');
let materiales = document.getElementById('materiales');
let trabajos = document.getElementById('trabajos-a');



/**eventos para carpintero */
mensajesCarpintero.addEventListener('click', mostrar);
materiales.addEventListener('click', mostrar);
trabajos.addEventListener('click', mostrar);



function mostrar() {
    console.log('click');
    for (let i = 0; i < document.querySelectorAll('.oculto').length; i++) {
        document.querySelectorAll('.oculto')[i].style.display = 'none';
    }
    document.getElementById(this.getAttribute("href").split("#")[1]).style.display = 'block';
}