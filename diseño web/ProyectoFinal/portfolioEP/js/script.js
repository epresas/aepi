$(window).on('load', initialize);


$(document).ready(function () {
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        margin:20
       
    });


});



// Declaración de funciones

function initialize() {
    $('#overlay').fadeOut(2000);
}