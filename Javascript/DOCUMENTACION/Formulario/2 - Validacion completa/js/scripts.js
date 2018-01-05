function validarFormulario() {


      //ALMACENADO DE VALORES EN VARIABLES
      let nombre = document.getElementById("campoNombre").value;      
      let telefono = document.getElementById("campoTelefono").value;
      let codigoP = document.getElementById("campoCP").value;
      let dni = document.getElementById("campoDNI").value;      
      let email = document.getElementById("campoEmail").value;
      let satisfaccion = document.getElementById("satisfaccion").value;
      let estudios = document.getElementById("campoFormacion").value;
      let indiceFamilia = document.getElementById("integrantes").selectedIndex;                  // retorna el índice de la selección
      let textoFamilia = document.getElementById("integrantes").options[indiceFamilia].text;     // retorna el texto de la selección
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

      for (let i=0; i < preferencias.length; i++){

         if ( preferencias[i].checked ) {
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
      


      if ( nombre == null || telefono == null  || codigoP == null || nacimiento == null || dni == null || email == null || password1 == null || satisfaccion == null || estudios == null || indiceFamilia == null) {

            alert("No se enviaron los datos. Por favor, inténtelo de nuevo");
            return false;
      }
      else{

            if ( !/^\s+$/.test(nombre) ||  nombre.length < 2 || /[0-9]/.test(nombre) ) {

                  alert("El campo 'Nombre' no es correcto. Es obligatorio, de mínimo 2 letras y no puede contener números.");
                  return false;
            }

            else if ( !/^\+\d{2,3}\s\d{9}$/.test(telefono) ) {

                  alert("El campo 'Teléfono' no es correcto. Es obligatorio, y el formato debe ser +34 910000000");
                  return false;

            }

            else if ( !/^\d{5}$/.test(codigoP) ) {

                  alert("El campo 'Código Postal' no es correcto. Es obligatorio, y debe formarse por cinco dígitos.");
                  return false;

            }

            else if ( !/^\d{2}\/\d{2}\/\d{4}$/.test(nacimiento) ) {

                  alert("La fecha de nacimiento no es correcta. El formato debe ser dd/mm/aaaa");
                  return false;

            }    

            else if ( objetoFechaNacimiento > objetoFechaMinima ) {

                  alert("La fecha de nacimiento no es correcta. No puedes tener menos de 10 años.");
                  return false;

            }

            else if ( !/^\d{8}[A-Z]$/.test(dni) ) {

                  alert("El campo 'DNI' no es correcto. Es obligatorio, y el formato debe ser 53500333X");
                  return false;

            }

            else if ( email.length === 0 || email.indexOf("@") < 1 || email.indexOf(".") < 1 ){

                  alert("El campo 'Email' no es correcto. Es obligatorio, y debes indicar una '@' y un '.'");
                  return false;

            }

            else if ( estudios.length < 10 ){

                  alert("El campo 'Estudios' debe tener una longitud mínima de 10 caracteres");
                  return false;

            }

            else if ( !marcaContacto ) {

                  alert("Debe marcar el horario que desea para contactarle.");
                  return false;

            }

            else if ( sumatorioMarcados < 2 ) {

                  alert("Debe marcar, al menos, dos preferencias.");
                  return false;

            }

            else if ( indiceFamilia === 0 ) {

                  alert("Selecciona tu núcleo familiar");
                  return false;

            }

            else if ( satisfaccion < 50 ) {

                  alert("Has marcado un nivel de satisfacción inferior al 50%, así no vamos a ningún sitio.");
                  return false;

            }

            else if ( password1.length < 7 || !/[a-z]/.test(password1) || !/[A-Z]/.test(password1) || !/[0-9]/.test(password1) ){

                  alert("El campo 'Contraseña' no es correcto. Es obligatorio, de mínimo 7 caracteres, y debe contener una mayúscula, una minúscula y un dígito");
                  return false;

            }  

            else if ( password1 != password2 ){

                  alert("Las contraseñas no coinciden");
                  return false;

            } 

            else if ( !politicaDatos ) {

                  alert("Debes aceptar la política de datos");
                  return false;

            }
            
            else {
                  return true;
            }
      }
}