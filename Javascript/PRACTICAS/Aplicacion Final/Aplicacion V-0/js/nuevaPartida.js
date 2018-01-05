
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
document.getElementById('validarFormularioPartida').onclick = function() {

//ALMACENAR CAMPOS DEL FORMULARIO EN VARIABLES
let nombre = document.getElementById('campoNombre').value;
let pass1 = document.getElementById('campoPwd1').value;
let pass2 = document.getElementById('campoPwd2').value;
let email = document.getElementById('campoEmail').value;
let dni = document.getElementById('campoDNI').value;
let pagoIndex = document.getElementById("listaPago").selectedIndex; 
let pagoText = document.getElementById("listaPago").options[pagoIndex].text; 
let condiciones = document.getElementById('checkCondiciones').checked;

//FECHA NACIMIENTO
let fechaNac = document.getElementById('campoFecha').value;
//seccionarlo en día, mes y año
let partesFecha = fechaNac.split("/");
//creacion del objeto date con la fecha imputada por el usuario
let fechaNacObj = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);
let fechaActual = new Date();
let fechaActualMayores = new Date(fechaActual.setFullYear(fechaActual.getFullYear()-18));

// COMPROBACION PAIS DE RESIDENCIA
let pais = document.getElementsByName('pais');
let paisCheck = false;
for (let i = 0; i < pais.length; i++) {
    if (pais[i].checked) {
        paisCheck = true;
    }
}

//VALIDACION DE LOS CAMPOS UNA VEZ ALMACENADOS

if (nombre === null || pass1 === null || email === null || dni === null || pagoIndex === null || fechaNac === null || pais === null) {
    msg('error','No se enviaron los datos. Por favor, vuelva a intentarlo.');
    return false;   
}else{
    if (/^\s+$/.test(nombre) || nombre.length < 6 || /^[0-9]$/.test(nombre)) {
        msg('error','El nombre no es correcto. No debe contener espacios, debe tener mínimo 6 caracteres y no debe contener números.');
        return false;
    } 
    else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(nacimiento)) {

        alert("La fecha de nacimiento no es correcta. El formato debe ser dd/mm/aaaa");
        return false;

    } 
}



    alert("¡Ánimo!");
}