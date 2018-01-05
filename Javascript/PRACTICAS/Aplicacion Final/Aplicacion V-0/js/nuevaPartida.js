
/*

La validación del formulario debe garantizar la validez de los datos:

- Campo Nombre: seis caracteres mínimo, sin espacios
- Campo Contraseña: seis caracteres mínimo incluyendo mayúscula/s, minúscula/s y número/s
- Campo Repite la Contraseña: debe coincidir con la anterior
- Campo Email: debe contener una arroba y un punto
- Campo DNI: 8 dígitos y una mayúscula
- Campo Fecha de nacimiento: una fecha en formato dd/mm/aaaa, NO MENORES DE EDAD
- Radios País de residencia: alguno debe estar marcado
- Lista Forma de Pago: alguna debe estar marcada
- Checkbox Condiciones: debe estar marcado

*/
//ALMACENAR CAMPOS DEL FORMULARIO EN VARIABLES
let nombre = document.getElementById('campoNombre').value;
let pass1 = document.getElementById('campoPwd1').value;
let pass2 = document.getElementById('campoPwd2').value;
let email = document.getElementById('campoEmail').value;
let dni = document.getElementById('campoDNI').value;
let nombre = document.getElementById('campoNombre').value;
let nombre = document.getElementById('campoNombre').value;
let nombre = document.getElementById('campoNombre').value;

//FECHA NACIMIENTO
let fechaNac = document.getElementById('campoFecha').value;
//seccionarlo en día, mes y año
let partesFecha = fechaNac.split("/");
//creacion del objeto date con la fecha imputada por el usuario
let fechaNacObj = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);
let fechaActual = new Date();
let fechaActualMayores = new Date(fechaActual.setFullYear(fechaActual.getFullYear()-10));



document.getElementById('validarFormularioPartida').onclick = function() {

    alert("¡Ánimo!");
}