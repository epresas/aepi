var objPartida = {
    iniciada: false,
    saldo: 3000,
    recaudacion: 0,
    visitantes: 0,
    detalles: {},
    parque: []
};



// Ejecución paneles
document.getElementById('nuevaPartida').onclick = function (){ 

    if (!objPartida.iniciada) {

        open("paneles/nuevapartida.html", 'Nueva partida', 'scrollbars=yes,width=700,height=1000,toolbar=yes');


    } else {

        msg('error', 'Ya has iniciado una partida previamente, no es posible crear una nueva partida');       
        
    }
}

document.getElementById('recaudarCaja').onclick = function () {
    if (objPartida.iniciada) {
        open("paneles/recaudarEntradas.html", "Recaudar Entradas", 'scrollbars=yes,width=500,height=400,toolbar=yes');
    } else {
        
        msg('error', 'Debe iniciar una partida para poder recaudar las entradas.');       
    } 
}
let celdas = document.getElementsByClassName('celda');

for (celda of celdas) {

    celda.onclick = function () {

        if (objPartida.iniciada) {
            let self = this; //de esta manera se encapsula el valor del desencadenante de la accion
           
            if (self.dataset.edificio ==="vacia") { //tambien se puede capturar el evento y con evento.target.dataset.edificio
                let ventana = open('paneles/nuevoEdificio.html', 'nuevo edificio', 'scrollbars=yes,width=500,height=800,toolbar=yes');
                ventana.onload = function(){
                    ventana.document.getElementById('numeroCelda').textContent = self.dataset.celda;
                }
            } else {
                msg('error', 'Ya existe un edificio en esta ubicación.');

            }
        } else {

            msg('error', 'Debe iniciar una partida para construir un edificio.');
        }
    }
    
}




// intervalo de actualización

let actualizador = setInterval( function(){    

    if (objPartida.iniciada) {

        // TODO

    }

}, 100); 