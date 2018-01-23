$(window).on('load', initialize);


$(document).ready(function () {
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        margin:20
       
    });


    new Vivus('logoBlack2', {
        duration: 100,
        animTimingFunction: Vivus.EASE,
        type: 'delayed'
    });


    // Navegación menu

    $('.navigation').on('click', function () {

        var navTarget = $(this).data('level');

        var targetDepth = $(navTarget).offset().top;

        $('html').animate({
            scrollTop: targetDepth
        }, 1000);

    });
});



// Declaración de funciones

function initialize() {
    $('#overlay').fadeOut(2000);
}