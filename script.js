//definimos valor de ticket

const valorTicket = 200;

//definimos porcentajes

const descuentoEstudiante = 0.80;
const descuentoTrainee = 0.50;
const descuentoJunior = 0.15;

//tomo valores

const cantidad = document.getElementById(`cantidad`);
const categoria = document.getElementById(`categoriaSelect`);
const botonCalcular = document.getElementById(`Calcular`);
const botonReset = document.getElementById(`reset`);
const parrafo = document.getElementById(`p`);
const nombre = document.getElementById(`nombre`);
const apellido = document.getElementById(`apellido`)
const correo = document.getElementById(`correo`)

// funcion validar nombre

function validarNombre() {

    let length = nombre.value.length;

    if (length >= 1) {
        return true;
    } else {
        alert("introduzca un nombre")
        return false;
    }
}

botonCalcular.addEventListener(`click`, validarNombre);

// funcion validar apellido

function validarApellido() {

    let lengthDos = apellido.value.length;

    if (lengthDos >= 1) {
        return true;
    } else {
        alert("introduzca un apellido")
        return false;
    }
}

botonCalcular.addEventListener(`click`, validarApellido);

// funcion validar correo

function validarCorreo() {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (correo.value.match(validRegex)) {
        return true;
    } else {
        alert("Introduzca un correo valido");
        return false;
    }
}

botonCalcular.addEventListener(`click`, validarCorreo);

// funcion total pagar

function totalPagar() {

    let length = nombre.value.length;
    let lengthDos = apellido.value.length;
    let lengthTres = correo.value.length;
    let totalValor = (cantidad.value) * valorTicket

    if (length == 0) {
        return false;
    } else if (lengthDos == 0) {
        return false;
    }
    else if (lengthTres == 0) {
        return false;
    } else if (categoria.value == 1) {
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    } else if (categoria.value == 2) {
        totalValor = totalValor - (totalValor * descuentoTrainee);
    } else if (categoria.value == 3) {
        totalValor = totalValor - (totalValor * descuentoJunior);
    }

    parrafo.innerHTML = `Total a pagar: $${totalValor}`;

}
//boton calcular

botonCalcular.addEventListener(`click`, totalPagar);

//boton reset

botonReset.addEventListener(`click`, () => {
    parrafo.textContent = `Total a pagar: $ `;
});



