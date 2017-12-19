function validarFormulario() {


      //RESETEO DE ESTILOS DE ERROR
      let elementosInput = document.querySelectorAll("input,select,textarea");

      for (let i = 0; i < elementosInput.length; i++){
            elementosInput[i].classList.remove('error'); 
      }


      //ALMACENADO DE VALORES EN VARIABLES
      let nombre = document.getElementById("campoNombre").value;
      let telefono = document.getElementById("campoTelefono").value;
      let codigoP = document.getElementById("campoCP").value;
      let dni = document.getElementById("campoDNI").value;      
      let email = document.getElementById("campoEmail").value;
      let satisfaccion = document.getElementById("satisfaccion").value;
      let estudios = document.getElementById("campoFormacion").value;
      let indiceFamilia = document.getElementById("integrantes").selectedIndex;                  // retorna el índice de la selección
      let textoFamilia = document.getElementById("integrantes").options[indiceFamilia].text;     // retorna el índice de la selección
      let politicaDatos = document.getElementById("politica").checked;
      let password1 = document.getElementById("pwd1").value;
      let password2 = document.getElementById("pwd2").value;



      // COMPROBACIÓN SI HAY MARCADO ALGUNO DE LOS RADIOS (tratamiento)
      let contacto = document.getElementsByName("horario");

      let marcaContacto = false;

      for(let i=0; i < contacto.length; i++){      // la variable tratamiento almacena la colección de todos los elementos con nombre "tratamiento"

         if( contacto[i].checked ) {               // si alguno está checked, cambiamos variable 'marcado' a true
            marcaContacto = true;
         }

      }


      // COMPROBACIÓN CUÁNTAS PREFERENCIAS HAY MARCADAS
      let preferencias = document.getElementsByClassName("preferencia");

      let sumatorioMarcados = 0;

      for(let i=0; i < preferencias.length; i++){

         if( preferencias[i].checked ) {
            sumatorioMarcados++;
         }

      }


      //ALMACENADO DE FECHAS Y CONVERSIÓN A OBJETOS PARA SU MANIPULACIÓN
      let nacimiento = document.getElementById("campoFecha").value;                                         //almaceno nacimiento en formato dd/mm/aaaa
      let seccionesFecha = nacimiento.split("/");                                                           //para un objeto Date() necesito el formato en aaaa/mm/dd
      let objetoFechaNacimiento = new Date(seccionesFecha[2],seccionesFecha[1]-1,seccionesFecha[0]);        //tras separar cada parte de nacimiento, lo reordeno en el objeto

      let objetoFechaActual = new Date();                                                                   //creo un objeto con la fecha actual para restarle 10 años
      let fechaMinima = objetoFechaActual.setYear(objetoFechaActual.getFullYear() - 10);                    //lo utilizo para asignar a la let 'fechaMinima' la fecha que sería hoy hace 10 años
      let objetoFechaMinima = new Date(fechaMinima);                                                        //convierto en objeto de fecha el valor de 'fechaMinima'
      


      if (nombre == null || telefono == null  || codigoP == null || nacimiento == null || dni == null || email == null || password1 == null || satisfaccion == null || estudios == null || indiceFamilia == null) {

            msg("No se enviaron los datos. Por favor, inténtelo de nuevo", 2000);
            return false;
      }
      else{

            if (/^\s+$/.test(nombre) ||  nombre.length < 2 || /[0-9]/.test(nombre)) {

                  msg("El campo 'Nombre' no es correcto. Es obligatorio, de mínimo 2 letras y no puede contener números.", 2000);
                  document.getElementById('campoNombre').classList.add('error');
                  return false;
            }

            else if (!/^\+\d{2,3}\s\d{9}$/.test(telefono) ) {

                  msg("El campo 'Teléfono' no es correcto. Es obligatorio, y el formato debe ser +34 910000000", 2000);
                  document.getElementById('campoTelefono').classList.add('error');
                  return false;

            }

            else if ( !/^\d{5}$/.test(codigoP) || isNaN(codigoP) ) {

                  msg("El campo 'Código Posteal' no es correcto. Es obligatorio, y debe formarse por cinco dígitos.", 2000);
                  document.getElementById('campoCP').classList.add('error');
                  return false;

            }

            else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(nacimiento) ) {

                  msg("La fecha de nacimiento no es correcta. El formato debe ser dd/mm/aaaa", 2000);
                  document.getElementById('campoFecha').classList.add('error');
                  return false;

            }    

            else if ( objetoFechaNacimiento > objetoFechaMinima ) {

                  msg("La fecha de nacimiento no es correcta. No puedes tener menos de 10 años.", 2000);
                  document.getElementById('campoFecha').classList.add('error');
                  return false;

            }

            else if (!/^\d{8}[A-Z]$/.test(dni) ) {

                  msg("El campo 'DNI' no es correcto. Es obligatorio, y el formato debe ser 53500333X", 2000);
                  document.getElementById('campoDNI').classList.add('error');
                  return false;

            }

            else if ( email.length === 0 || email.indexOf("@") < 1 || email.indexOf(".") < 1 ){

                  msg("El campo 'Email' no es correcto. Es obligatorio, y debes indicar una '@' y un '.'", 2000);
                  document.getElementById('campoEmail').classList.add('error');
                  return false;

            }

            else if ( estudios.length === 0 || estudios.length < 10 ){

                  msg("El campo 'Estudios' debe tener una longitud mínima de 10 caracteres", 2000);
                  document.getElementById('campoFormacion').classList.add('error');
                  return false;

            }

            else if ( !marcaContacto ) {

                  msg("Debe marcar el horario que desea para contactarle.", 2000);
                  return false;

            }

            else if ( sumatorioMarcados < 2 ) {

                  msg("Debe marcar, al menos, dos preferencias.", 2000);
                  return false;

            }

            else if ( indiceFamilia === 0 ) {

                  msg("Selecciona tu núcleo familiar", 2000);
                  return false;

            }

            else if ( satisfaccion < 50 ){

                  msg("Has marcado un nivel de satisfacción inferior al 50%, así no vamos a ningún sitio.", 2000);
                  return false;

            }

            else if (password1.length < 7 || !/[a-z]/.test(password1) || !/[A-Z]/.test(password1) || !/[0-9]/.test(password1) ){

                  msg("El campo 'Contraseña' no es correcto. Es obligatorio, de mínimo 7 caracteres, y debe contener una mayúscula, una minúscula y un dígito", 2000);
                  document.getElementById('pwd1').classList.add('error');
                  return false;

            }  

            else if ( password1 != password2 ){

                  msg("Las contraseñas no coinciden", 2000);
                  document.getElementById('pwd1').classList.add('error');
                  document.getElementById('pwd2').classList.add('error');
                  return false;

            } 

            else if ( !politicaDatos ) {

                  msg("Debes aceptar la política de datos", 2000);
                  return false;

            }
            
            else {
                  return true;
            }
      }
}


function msg(arg1, arg2) {
      document.getElementById('mensaje').innerHTML = arg1;

      document.getElementById('alertas').classList.add('visibles');

      setTimeout( function(){
            document.getElementById('alertas').classList.remove('visibles');
      } ,arg2);
}