$(window).on('load', initialize);


$(document).ready(function(){
    $('#adentrate').on('click', mostrarModal);
    $('.botonCerrar').on('click', cerrarModal);
    $('#comenzamos').on('click',desplazar);
    
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