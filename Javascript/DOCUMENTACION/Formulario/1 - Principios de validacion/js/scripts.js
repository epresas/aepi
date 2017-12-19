function validarFormulario() {

      // 1.- ALMACENADO DE VALORES EN VARIABLES
      let dato1 = document.getElementById("dato1").value;     
      let dato2 = document.getElementById("dato2").value;   

      // 2.- VALIDACIÓN DE EXISTENCIA DE TODOS LOS DATOS, RETORNO FALSO EN CASO DE INEXISTENCIA DE ALGÚN DATO
      if (dato1 == null || dato2 == null) {

            alert("No se enviaron los datos. Por favor, inténtelo de nuevo");
            return false;
      }
      else{
            
            // 3.- VALIDACIÓN ESPECÍFICA DE CADA DATO, RETORNO FALSO EN CASO DE INVALIDEZ DEL DATO
            if (dato1.length < 2) {

                  alert("El campo 'Dato 1' no es correcto. Es obligatorio, de mínimo 2 caracteres.");
                  return false;
            }

            else if ( !/^\d{5}$/.test(dato2) || isNaN(dato2) ) {

                  alert("El campo 'Dato 2' no es correcto. Es obligatorio, y debe formarse por cinco dígitos.");
                  return false;
            }
            
            else {
                  // RETORNAMOS TRUE SÓLO EN CASO DE VALIDEZ DE TODOS LOS DATOS
                  return true;
            }
      }
}