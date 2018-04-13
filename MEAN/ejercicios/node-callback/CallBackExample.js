function suma(numero1, numero2, callback){
        var resultado = numero1 + numero2;

        callback(resultado)
}

console.log("empieza");
suma(5, 6, function(resultadocb){
        console.log(resultadocb);
});

console.log("acaba")
