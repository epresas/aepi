// let sorteoDisponible = true; //pensado para el temporizador de una hora
let botones = document.getElementsByTagName('button');

window.onload = function(){
    
        let btnPremio = Math.floor(Math.random() * 5 + 1); 
        let btnTerremoto;

        do {
            btnTerremoto = Math.floor(Math.random() * 5 + 1);
        } while (btnTerremoto === btnPremio);
        
        console.log("EL premio está en el botón ",btnPremio);
        console.log("El terremoto está en el botón ",btnTerremoto);
    
        for (const boton of botones) {
            boton.onclick = function (e) {
               if(parseInt(boton.textContent) === btnPremio){
                   opener.msg('success','Has ganado 10.000$! Gracias por jugar.');
                   opener.objPartida.saldo += 10000;
                //    sorteoDisponible=false;
                   window.close();
               } else if (parseInt(boton.textContent) === btnTerremoto){
                    terremoto();
                    terremoto();
                    window.close();
                } else {

                    opener.msg('warning','No ha pasado nada. Vuelve a intentarlo en una hora.');
                    // sorteoDisponible=false;
                    window.close();

               }
            };   
        }
    
    
};

// Función que elimina un edificio del parque
function terremoto() {
    opener.msg('error', 'Oh no! un terremoto ha destruido 2 de tus atracciones.');
    let edificio = Math.floor(Math.random() * (opener.objPartida.parque.length));
    let edificioCelda = opener.objPartida.parque[edificio]._celda;
    let edificioNombre = opener.objPartida.parque[edificio]._nombre;
    let arrayEdificios = opener.document.getElementsByClassName('celda');
    for (var cadaEdificio of arrayEdificios) {
        if (parseInt(cadaEdificio.dataset.celda) == edificioCelda) {

            cadaEdificio.dataset.edificio = "vacia";
            opener.objPartida.parque.splice(edificio, 1);
            console.log(opener.objPartida.parque);
            // sorteoDisponible = false;

        }

    } 
}


// //SORTEO SUCEDE CADA HORA
// if (sorteoDisponible){
//     sorteoDisponible=false;
//     setTimeout(function() {
        
//     }, 60000);
// }
