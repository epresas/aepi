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
        setTimeout(function(){
            console.log(quePaso)
         }, 500);
    },
    function(quePaso){
        setTimeout(function(){
            console.log(quePaso)
         }, 1000);
    },
    function(queHizo){
        setTimeout(function(){
            console.log(queHizo)
         }, 1500);
    });

     console.log("aqui deberia terminar.. pero no")