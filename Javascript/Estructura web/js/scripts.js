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



//Arrays vacios: declaracion
// let myArray = [];
let myArray = new Array(); // se declara un objeto del tipo array
alert(typeof(myArray));
//Arrays con valores: declaracion
let meses = new Array("Enero","Febrero","Marzo");
let meses = ["Enero","Febrero","Marzo"];
let meses = Array.of("Enero", "Febrero", "Marzo");// Propia de Ecmascript 6


const longitud = meses.length;
document.write("<p>El array tiene "+longitud+" elementos.</p>");
document.write("<p>Puedo lisar el array de una vez: "+meses+".</p>");

const primerMes = meses[0];
document.write("<p>El primer es: "+primerMes+".</p>");

meses[2] = "Antes de Abril";
document.write(meses);
//Una posicion inexistente retorna undefined

let alumno1 = Array.of(265, 'José', 'Álvarez', 16, '28005', false);
let alumno2 = Array.of(382, 'María', 'Gómez', 15, '28036', true);
let alumno3 = Array.of(425, 'Sergio', 'Santamaría', 17, '28012', false);
let alumno4 = Array.of(342, 'Rafael', 'Cantos', 14, '28010', false);
let alumno5 = Array.of(446, 'Sara', 'Gómez', 15, '28010', false);
let alumno6 = Array.of(452, 'Ivan', 'Sánchez', 16, '28010', true);
let alumno7 = Array.of(754, 'Lydia', 'Somonte', 13, '28010', false);
let alumno8 = Array.of(345, 'Carlos', 'Pacheco', 14, '28010', false);
let alumno9 = Array.of(678, 'Rubén', 'Punset', 15, '28010', false);

let clase = Array.of(alumno1,alumno2,alumno3,alumno4,alumno5,alumno6,alumno7,alumno8,alumno9);
document.write("<h1>Total de alumnos en la clase: "+clase.length+"</h1>");
let texto;
let sumaEdades = 0,
media, cantCeliacos = 0,
porcentajeCeliacos=0;

for (let i = 0; i < clase.length; i++) {
    texto = "<p><strong>Matrícula número: "+clase[i][0]+".</strong></p>";
    texto+="<p>Nombre: " +clase[i][1]+ " "+clase[i][2] + ".</p>";
    texto+="<p>Edad: "+clase[i][3]+" años.</p>";
    texto+="<p>Código postal: "+clase[i][4]+".</p>";
    if (clase[i][5]) {
        
        cantCeliacos ++;
        texto+="<p>Necesita menú especial.</p><br>";
        
    }else{
        
        texto+="<p>No necesita menú especial.</p><br>";
        
    }
    
    document.write(texto);
    sumaEdades += clase[i][3];//Para la estadistica - Media
    
}
document.write("<hr><h1>Estadística</h1>");

media = parseInt(sumaEdades) / clase.length;

document.write("<p>La media de edad es de: "+media+" años.</p>");

document.write("<p>En la clase hay " + cantCeliacos + " celíacos.</p>");
porcentajeCeliacos = (cantCeliacos / clase.length)*100;
document.write("<p>Los celíacos representan un " + porcentajeCeliacos.toFixed(2) + "% del total.</p>");

// alert(cantCeliacos)


//Recorrido por arrays bidimensionales
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        document.write("Vuelta "+i+" "+j+"<br>");
        
    }
    
}

//FUNCIONES PERSONALIZADAS
function saludar(nombre, apellido) {
    let saludo = ("HOLA " + nombre+""+apellido+"!");
    return saludo;
}
saludar("Nacho");

//Practica 14/12
//
// let fecha=prompt("Que fecha desea reservar?"),precio,tipoHabitacion,numCamas,fumaONo;

function detalleReserva(fecha, precio, tipoHabitacion, numCamas, fumaONo="no fumadores") {
    let texto="Su reserva para el día "+fecha+" está confirmada.<br>";
    texto+= "- Precio total: "+precio+"€.<br>"
    texto += "- Habitación " + tipoHabitacion + " con " + numCamas + " cama/s (" + fumaONo +").<br><hr>";
    return texto;
}
let reserva1 = detalleReserva("14 de Enero",450,"doble",2);
let reserva2 = detalleReserva("2 de Marzo",300,"doble",1,"fumadores");
let reserva3 = detalleReserva("15 de Junio",150,"individual",1);
let reserva4 = detalleReserva("9 de Septiembre",900,"triple",2);
document.write(reserva1);
document.write(reserva2);
document.write(reserva3);
document.write(reserva4);

function sonMultiplos (val1,val2){
    if (val1%val2===0) {
        return true;//no defino el false y eso retorna undefined
    }
}
//################### SELECTORES Y EVENTOS ######################################################
// document.getElementById("myButton").textContent = "Clicked!";
//Cuando un selector no encuentra el elemento retorna null
//textContent = metodo que cambia el texto de un boton.
document.getElementById("myButton").onclick = cambiaTexto;

function cambiaTexto(){
    document.getElementById("myButton").textContent = "Clicked!";
}
//al invocarla desde el metodo e incluir un parentesis la ejecuta de una vez, no se colocan porque no es una invocación sino asociar la funcion a un comportamiento u evento
//ver DOCUMENTACION

//######################### OBJETOS #################################################################

objetos literales: su simbolo es la llave, tienen pares clave : valor... si un objeto no va a variar usar const (intuitivo segun su uso). Los objetos 
nominales se dota de identificadores, hablamos de una propiedad cuando estamos ante un identificador cuyo valor es distinto a una funcion, cuando su valor es una funcion
estamos ante un metodo.
la propiedad puede ser getter (que obtiene el valor), o setter (actualizas asignandole un)
class Factura { //en Mayúscula por convención para diferenciar de los demas objetos
    constructor(numero,cliente,importe,IVA){  //metodo de constructor (solo 1 por clase) transfiere a la instancia de objeto las propiedades
        this._numero = numero; //con _delante para diferenciar del argumento, es convencion
        this._cliente = cliente;
        this._importe = importe;
        this._IVA = IVA;
    }
    //externalizar datos para que se accesen, mediante el metodo get
    get nombreCliente() {
        return this._cliente;
    }
    //metodos Prototype ---> como function pero la sintaxis cambia... es asi:
    imprimir(){
        document.write("La factura numero "+this._numero+ " es de "+this._cliente);
    }
}

//instanciacion de objeto
let factura1 = new Factura(512,"Empresa Tal",100,21);
*/


class Persona {
    constructor(nombre, apellidos, edad, altura, tieneHijos, celiaco){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._altura = altura;
        this._tieneHijos = tieneHijos;
        this._celiaco = celiaco;
    }
    get nombreCompleto(){
        return this._nombre + " "+this._apellidos;
    }
    get presentacion(){
        return "¡Hola! Mi nombre es " + this.nombreCompleto+" y tengo "+this._edad+" años";
    }
 

}//Persona
let amigo1 = new Persona("Ivan", "Alonso Martínez",35,181,true,false);
let amigo2 = new Persona("Leticia", "Talavera Carrasco",33,171,true,true);
alert(amigo1.presentacion);

//Herencia
class Superheroe extends Persona {
    constructor(nombre, apellidos, edad, altura, tieneHijos, celiaco, poderes){
        super(nombre, apellidos, edad, altura, tieneHijos, celiaco);// el metodo super transfiere los valores de las propiedades que ya la clase padre (persona) ya esta gestionando, asi no se repite el codigo
        this._poderes = poderes; //propiedad de Superheroe, NO de persona
    }
    relatarPoder(){
        alert("Puedo "+this._poderes+"!");
    }
}
let superman = new Superheroe("Clark","Kent",35,185,false,false,"volar");

superman.gritar();//es un metodo de Persona por lo que Superheroe lo tiene
superman.relatarPoder(); //metodo propio de Superheroe
amigo2.relatarPoder();//no va a poder porque es un metodo de Superheroe no de Persona

