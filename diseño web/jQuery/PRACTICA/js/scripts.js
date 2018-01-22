$(window).on('load', initialize);


$(document).ready(function(){
    $('#adentrate').on('click', mostrarModal);
    $('.botonCerrar').on('click', cerrarModal);
    $('#comenzamos').on('click', function() {
        let objetivo = $('#contacto').offset().top;
        $('html').animate({
            scrollTop: objetivo
        }, 1000);
    });
    
    
$(document).on('keyup', function(e){
    if(e.keyCode === 27){
        cerrarModal();
    }
})



// validacion formulario
$('form').on('submit', function (e) {
    e.preventDefault();
    let nombre = $('#campoNombre').val(); //No forma parte del DOM por lo que el metodo text no sirve
    let email = $('#campoEmail').val();
    let mensaje = $('#campoMensaje').val();
    // alert("Soy "+nombre+", de correo "+email+" y mi mensaje es: " + mensaje);
    if (nombre.length<2) {
        alertaError('El nombre es demasiado corto.');
    } 
    if (!email.includes('@') || !email.includes('.')) {
        alertaError('Email no válido.');
    }
    if (mensaje.length<20) {
        alertaError('El Mensaje es demasiado corto.');
       
    }
});

});//ready

function mostrarModal() {
    $('.modalFondo').fadeIn(500,function () {
        $('.modalCont').fadeIn(500);
    });
}
function cerrarModal() {
    $('.modalFondo,.modalCont').fadeOut(500);
}

function initialize() {
    $('#overlay').fadeOut(2000);
}
function desplazar() {
    let objetivo = $('#contacto').offset().top;
    $('html').animate({
        scrollTop: objetivo
    }, 1000);
}
function alertaError (texto) {
    $('#alerta p').text(texto);
    $('#alerta').addClass('visible');
    setTimeout(function () {
        $('#alerta').removeClass('visible');

    }, 3000);
}
