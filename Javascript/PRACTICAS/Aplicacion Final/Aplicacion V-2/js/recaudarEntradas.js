

document.getElementById('recaudar').onclick = function(){
    let beneficio = opener.objPartida.recaudacion - 200;
    opener.objPartida.recaudacion = 0;
    opener.objPartida.saldo += beneficio;
    opener.msg('success','Se ha recaudado el total de caja.')
    window.close();
}