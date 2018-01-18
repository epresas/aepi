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


document.getElementById('recaudarCaja').onclick = function() {

    if (objPartida.iniciada) {

        open("paneles/recaudarEntradas.html", 'Recaudar Caja', 'scrollbars=yes,width=500,height=400');  

    } else {
        
        msg('error', 'Para acceder al panel de recaudación, inicia una partida.');       
    }
}


let celdas = document.getElementsByClassName('celda');

for (cadaCelda of celdas) {

    cadaCelda.onclick = function() {

        let elemento = this.dataset;

        if (objPartida.iniciada) {

            if (elemento.edificio === "vacia") {

                let ventana = open("paneles/nuevoEdificio.html", 'Crear edificio', 'scrollbars=yes,width=500,height=800');

                ventana.onload = function() {

                    ventana.document.getElementById('numeroCelda').textContent = elemento.celda;
                }

            } else {

                msg('error', 'Ya hay un edificio en esta celda.');       
            }

        } else {
            
            msg('error', 'Para acceder al panel de construcción inicia una partida.');       
        }
    }
}




// intervalo de actualización

let actualizador = setInterval( function(){    

    if (objPartida.iniciada) {

        let parque = objPartida.parque;

        // progresion parque
        for (let edificio of parque) {

            if (edificio.tipo === "atraccion") {

                objPartida.visitantes += parseInt(edificio.visitantes);
                objPartida.recaudacion += parseInt(edificio.visitantes * 2);
            }

            if (edificio.tipo === "puesto") {

                objPartida.saldo += parseInt(edificio.ingresos);
            }
        }

        // actualizacion interfaz
        document.getElementById('contadorRecaudacion').textContent = objPartida.recaudacion + "$ en caja";
        document.getElementById('contadorSaldoActual').textContent = objPartida.saldo + "$";
        document.getElementById('contadorEdificios').textContent = parque.length + " edificios";
        document.getElementById('contadorVisitantes').textContent = objPartida.visitantes + " visitantes";
    }

}, 100); 