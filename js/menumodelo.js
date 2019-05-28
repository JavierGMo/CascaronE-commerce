let desplegarsilla = document.getElementById('slc-silla');
let desplegarcama = document.getElementById('slc-cama');
let desplegarropero = document.getElementById('slc-ropero');
//let agregarmodelochido = document.getElementById('modelochido');

desplegarsilla.addEventListener('click', mostrarmodelos);
desplegarcama.addEventListener('click', mostrarmodelos);
desplegarropero.addEventListener('click', mostrarmodelos);


function mostrarmodelos() {
    console.log('click');
    for (let i = 0; i < document.querySelectorAll('.opc-modelos').length; i++) {
        document.querySelectorAll('.opc-modelos')[i].style.display = 'none';
    }
    document.getElementById(this.getAttribute("href").split("#")[1]).style.display = 'block';
}