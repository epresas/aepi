
document.getElementById('validarFormularioPartida').onclick = function() {

    let textoErrores = "", paisUsuario;

    with (document) {

        // almacenado valores
        let nombreUsuario = getElementById("campoNombre").value;

        let pwd1 = getElementById("campoPwd1").value;
        let pwd2 = getElementById("campoPwd2").value;

        let emailUsuario = getElementById("campoEmail").value;

        let dniUsuario = getElementById("campoDNI").value;

        let nacimientoUsuario = getElementById("campoFecha").value;

        let radiosPais = getElementsByName('pais');
        for (let i = 0; i < radiosPais.length; i++) {
            if (radiosPais[i].checked) {
                paisUsuario = radiosPais[i].value;     
            }
        }

        let pagoIndex = getElementById("listaPago").selectedIndex;
        let pagoTexto = getElementById("listaPago").options[pagoIndex].text;

        let condiciones = getElementById('checkCondiciones').checked;


        // creación objetos de fecha      
        let splitFechaNacimiento = nacimientoUsuario.split("/"); 
        let objFechaNacimiento = new Date(splitFechaNacimiento[2],splitFechaNacimiento[1]-1,splitFechaNacimiento[0]);  

        let objFechaActual = new Date();
        let valorAhnoMinimo = objFechaActual.getFullYear() - 18;
        let objFechaMinima = new Date();
        objFechaMinima.setFullYear(valorAhnoMinimo);


    
        if(nombreUsuario === null || pwd1 === null || pwd2 === null || emailUsuario === null || dniUsuario === null || nacimientoUsuario === null || pagoIndex === null || condiciones === null){

            alert("Error: no se envió la información");

        }else{


            if (nombreUsuario.length < 5 || nombreUsuario.includes(" ")){

                textoErrores += "El nombre de usuario es de 6 carateres mínimo, sin espacios<br>";
            }

            if (pwd1.length < 7 || !/[a-z]/.test(pwd1) || !/[A-Z]/.test(pwd1) || !/[0-9]/.test(pwd1) ){

                textoErrores += "El campo 'Contraseña' no es correcto. Es obligatorio, de mínimo 7 caracteres, y debe contener una mayúscula, una minúscula y un dígito.<br>";
            }

            if (pwd1 != pwd2){

                textoErrores += "Las contraseñas no coinciden.<br>";
            }

            if (emailUsuario.length === 0 || emailUsuario.indexOf("@") < 1 || emailUsuario.indexOf(".") < 3 ){

                textoErrores += "El formato del email es incorrecto.<br>";
            }

            if (!/^\d{8}[A-Z]$/.test(dniUsuario)) {

                textoErrores += "El formato de DNI debe ser 00000000X.<br>";
            }

            if (!/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(nacimientoUsuario)) {

                textoErrores += "El formato de fecha debe ser dd/mm/aaaa.<br>";
            }

            if (objFechaNacimiento > objFechaMinima) {

                textoErrores += "Juego reservado a mayores de edad.<br>";
            }

            if (!paisUsuario) {

                textoErrores += "Indica tu país de residencia.<br>";
            }            

            if (pagoIndex === 0){

                textoErrores += "Debe seleccionar la forma de pago.<br>";
            } 

            if (!condiciones){

                textoErrores += "Debes aceptar las condiciones de uso.<br>";
            }

            if (textoErrores){

                getElementById("errores").innerHTML = "Se han encontrado los siguiente errores:<br><br> " + textoErrores;
            }

            else{

                opener.objPartida.iniciada = true; //window.opener hace referencia al script desde donde se ha abierto una ventana.
                opener.document.getElementById('nombreUsuario').textContent = nombreUsuario;
                opener.msg('success',"Partida iniciada correctamente!");
               
                window.close();

                let opcionesFecha = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
                let fechaFormato = objFechaActual.toLocaleString('es-ES', opcionesFecha);

                opener.document.getElementById('fechaPartida').textContent = fechaFormato;
            }
        }
    }
}