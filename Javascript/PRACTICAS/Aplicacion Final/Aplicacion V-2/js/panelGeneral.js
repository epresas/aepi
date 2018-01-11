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





// intervalo de actualización

let actualizador = setInterval( function(){    

    if (objPartida.iniciada) {

        // TODO

    }

}, 100); 