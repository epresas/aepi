$(window).on('load', initialize);

function initialize() {
    $('#overlay').fadeOut(2000);
    
}

$(document).ready(function(){
    $('#comenzamos').on('click',mostrarModal);
    $('.botonCerrar').on('click', cerrarModal);

});//ready

function mostrarModal() {
    $('.modalFondo').fadeIn(500,function () {
        $('.modalCont').fadeIn(500);
    });
}
function cerrarModal() {
    $('.modalFondo,.modalFondo').fadeOut(500);
}