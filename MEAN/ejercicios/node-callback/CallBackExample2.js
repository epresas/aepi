function main(callbackPaso1, callbackPaso2, callbackTermino){
    //algo aqui
    callbackPaso1('paso 1');

    //sigo... algo aqui
    callbackPaso2('paso 2');

    //sigo ... y termino
    callbackTermino('terminó');
}

main(
    function(quePaso){
       console.log(quePaso);
    },
    function(quePaso){
       console.log(quePaso);
    },
    function(queHizo){
       console.log(queHizo);
    });