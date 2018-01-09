
/*

La validación del formulario debe garantizar la validez de los datos:

- Campo Nombre: seis caracteres mínimo, sin espacios - HECHO
- Campo Contraseña: seis caracteres mínimo incluyendo mayúscula/s, minúscula/s y número/s - HECHO
- Campo Repite la Contraseña: debe coincidir con la anterior - HECHO
- Campo Email: debe contener una arroba y un punto - HECHO
- Campo DNI: 8 dígitos y una mayúscula - HECHO
- Campo Fecha de nacimiento: una fecha en formato dd/mm/aaaa, NO MENORES DE EDAD - HECHO
- Radios País de residencia: alguno debe estar marcado - HECHO
- Lista Forma de Pago: alguna debe estar marcada - HECHO
- Checkbox Condiciones: debe estar marcado - HECHO

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

    if (nombre === null || pass1 === null || pass2 === null || email === null || dni === null || pagoIndex === null || fechaNac === null || pais === null) {
    msg('error','No se enviaron los datos. Por favor, vuelva a intentarlo.');   
 }else{
    if (/^\s+$/.test(nombre) || nombre.length < 6 || /^[0-9]$/.test(nombre)) {

        msg('error','El nombre no es correcto. No debe contener espacios, debe tener mínimo 6 caracteres y no debe contener números.');
        return false;
        
    } else if (pass1.length < 6 || !/[a-z]/.test(pass1) || !/[A-Z]/.test(pass1) || !/[0-9]/.test(pass1)  ) {

        msg('error', "El campo 'Contraseña' no es correcto. Es obligatorio, y debe tener mínimo 6 caracteres, una mayúscula y una minúscula.",4);
        return false;

  } else if (pass1 !== pass2) {

        msg('error', "Las contraseñas no coinciden.");
        return false;  

    } else if (email.length === 0 || email.indexOf("@") < 1 || email.indexOf(".") < 1) {

        alert("El campo 'Email' no es correcto. Es obligatorio, y debes indicar una '@' y un '.'");
        return false;

    } else if (!/^\d{8}[A-Z]$/.test(dni)) {

        msg('error', "El campo 'DNI' no es correcto. Es obligatorio, y su formato debe ser 53548333X");
        return false;

    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fechaNac)) {
        
        msg('error',"La fecha de nacimiento no es correcta. El formato debe ser dd/mm/aaaa");
        return false;
        
    } else if (fechaNac < fechaActualMayores) {
        
        msg('error',"¡Solo mayores de edad!");
        return false;
        
    } else if (fechaNacObj > fechaActual) {

        msg('error', "¿Has nacido en el futuro? La fecha no puede ser mayor al dia de hoy!");
        return false;
            
    } else if (!paisCheck) {

        msg('error', "Debes seleccionar un país de residencia.");
        return false;

    } else if (pagoIndex===0) {

        msg('error', "Debes seleccionar por lo menos una forma de pago.");
        return false;

    } else if (!condiciones) {

        msg('error', "Debes aceptar las condiciones.");
        return false;

    } 
}



    alert("¡Ánimo!");
}