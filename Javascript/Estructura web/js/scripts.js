/* Hoja externa de script */

/*window.alert("Mi primera app");
Formas de mostrar contenido:

alert(window.innerWidth); //propiedad del objeto window para el acho de la ventana
console.log ("Consola");
console.error ("Error");
console.info("info");
document.write("<p>Desde document.write</p>");

Metodos de introduccion de informacion:
const respuesta = confirm("¿Continuar?"); // Yes: True  No: False
alert (respuesta);

const nombre = prompt("Nombre: ","placeholder"); // accept + nombre --> nombre, cancelar --> null
alert (nombre);

Tipos de declaración de variables
var myVar;
let myVar2;
const myVar3;

Tipos de variables

//declaracion individual

const myVar1 = "Texto";
const myVar2 = 1234;
const myVar3 = 15.2;
const myVar4 = true;

//declaración conjunta

const myVar1 = "Texto",
    myVar2 = 1234,
    myVar3 = 15.2,
    myVar4 = true;

console.log(typeof (myVar1));
console.log(typeof (myVar2));
console.log(typeof (myVar3));
console.log(typeof (myVar4));

Reglas de nomenclatura de variables
- No pueden empezar por numero
- No pueden contener espacios
- Pocos caracteres especiales (_ , $)

Recomendaciones:
- No incluir acentos ni caracteres propios del idioma
- Nombres relacionados con la info que maneja

snake_case
camelCase

const nombre = prompt("¿Como te llamas?");
const edad = prompt("Ingresa tu edad");
let edadEnDias = edad * 365;
document.write ("<p>"+ nombre +", has vivido "+ edadEnDias + " dias.</p>");

//Refactorizacion

document.write("<p>" + prompt("¿Como te llamas?") + ", has vivido " + prompt("Ingresa tu edad") * 365 + " dias.</p>");

let pDeposito = prompt("¿De cuánto será su primer depósito?");

document.write("<p>Su primer depósito de " + pDeposito + "€ se convertirá en: " + (pDeposito) +50) + "€</p>");

const val = isNaN("cadena");
alert(val);

const val = isNaN("33"); // lo reconoce como numero porque los strings numericos congruentes los considera numeros
alert(val);
const val = isNaN("3 3"); // no tiene congruencia... el espacio lo convierte en texto
alert(val);

alert(parseInt(33.56));
alert(parseFloat(33.56));
alert(33.56));

const edad= prompt("¿Cuántos años tienes?");
if (edad === null){
    document.write("<p>No se ha recibido la edad</p>");
    
} else {
    if (edad === "" ) {
        document.write("<p>Por favor rellena el campo</p>");
    } else {
        
        if (isNaN(edad) === true) {
            
            document.write("<p>Escribe en formato numérico, por favor</p>");
        } else {
            
            if (edad < 18){
                document.write ("<p>Lo siento, no puedes entrar.</p>");
            } else {
                document.write("<p>Bienvenido!</p>");
            }
        }
    }   
}
document.write("<p><strong>Gracias por tu interés</strong></p>");

const continuar = confirm("Deseas continuar?");
if (continuar) {
    alert("Hola");
}else{
    alert("Adiós!");
}

de 0 a 500 sin descuento
de 501 a 1000 10%
de 1001 a 2000 15%
mas de 2000 20%

const gasto = prompt("Cuanto se ha gastado?", "Ingrese el gasto");

if (gasto===null){
    document.write("No se ha recibido el gasto");
}else if(gasto===''){
    document.write("Por favor rellena el campo.");
}else if(gasto<=500){
    document.write("No tiene el gasto necesario para el descuento.");
}else if(gasto>500 && gasto<=1000){       
    document.write("Para un gasto de " + gasto + "€ le corresponde un descuento de " + (gasto * .1).toFixed(2) + " (total: " + gasto - (gasto * .1).toFixed(2) + "€.)");
}else if (gasto > 1000 && gasto <= 2000) {
    document.write("Para un gasto de " + gasto + "€ le corresponde un descuento de " + (gasto * .15).toFixed(2) + " (total: " + gasto - (gasto * .15).toFixed(2) + "€.)");        
} else{
    document.write("Para un gasto de " + gasto + "€ le corresponde un descuento de " + (gasto * .2).toFixed(2) + " (total: " + gasto - (gasto * .2).toFixed(2) + "€.)");
}

const gasto = prompt("Cuanto se ha gastado?", "Ingrese el gasto");
let descuento;


if (gasto <= 500) {
    document.write("No tiene el gasto necesario para el descuento.");
} else if (gasto <= 1000) {
    descuento = gasto * .1;
} else if (gasto <= 2000) {
    descuento = gasto * .15;
} else {
    descuento = gasto * .2;
}

if (descuento){ //al no ser undefined como cuando se declaró no entra al bloque
    
    const total = gasto - descuento
    document.write("Para un gasto de " + gasto + "€ le corresponde un descuento de " + descuento.toFixed(2) + " (total: " + total.toFixed(2) + "€.)");
}
const estacion = prompt("Dame una estacion");
switch (estacion) {
    case "Primavera"://al estar vacia ejecuta las instrucciones del primero que tiene instrucciones dentro, espera al break para terminar
    case "primavera":
    case "PRIMAVERA":
    alert("Sale la flor");
    break;
    case "Verano":
    alert("Hace calor!");
    break;
    case "Invierno":
    alert("Hace frio!");
    break;
    case "Otoño":
    alert("Se cae la hoja");
    break;
    
    default:
    alert("Estacion no registrada");
    break;
}
*/
let resultado;
for (let index = 0; index <= 1000; index++) {
   
  if (index === 0) {
      continue; //omite las instrucciones de este mini bloque
  } 
  resultado = index * 5; 
  document.write("<p>" + resultado+ "</p>");
  if (index===10) {
      break; // omite el resto al cumplior la condicion
  }
    
}

