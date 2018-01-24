$(window).on('load', initialize);


$(document).ready(function () {
    
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        autoplayHoverPause: false,
        items: 1,
        margin:20
       
    });



    // Navegación menu

    $('.navigation').on('click', function () {

        var navTarget = $(this).data('level');

        var targetDepth = $(navTarget).offset().top;

        $('html').animate({
            scrollTop: targetDepth
        }, 1000);

    });


    // aplicación de retardos reveal - SIN ADAPTAR
    $('.reveal.delayed').each(function () {

        var retardo = $(this).data('delay');

        $(this).css('transition-delay', retardo + 'ms');
    });


    // validación formulario - SIN ADAPTAR

    $('form').on('submit', function (e) {

        var nombre = $('#campoNombre').val();
        var email = $('#campoEmail').val();
        var mensaje = $('#campoMensaje').val();

        if (nombre.length < 2) {

            mostrarError("Por favor, introduce un nombre.");
            e.preventDefault();
        }

        if (email.includes('@') == false || email.includes('.') == false) {

            mostrarError("Por favor, introduce un email válido.");
            e.preventDefault();
        }

        if (mensaje.length < 12) {

            mostrarError("El mensaje es demasiado corto.");
            e.preventDefault();
        }

    });
});

$(window).on('scroll', function () {

    var profundidadUsuario = $(window).scrollTop();

    // sistema scrollreveal -SIN ADAPTAR
    $('.reveal').each(function () {

        var profundidadObjetivo = $(this).offset().top - $(window).innerHeight() / 2;

        if (profundidadUsuario >= profundidadObjetivo) {

            $(this).addClass('visible');
        }
    });




});



// Declaración de funciones

function initialize() {
    $('#overlay').fadeOut(2000);
}