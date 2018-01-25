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



    // FUNCIONALIDAD NAVEGACIÓN MENU

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
    
    // Aparición de modal
    $('.frame').on('click', openModal );
    $('#modalClose').on( 'click', closeModal );
    
    // Efecto hover proyectos
    // $('.frame').hover( showModalBtn, hideModalBtn );
    $('.frame').on('mouseenter', function () {
        $(this).find('.showModal').fadeIn(500);
    });
    $('.frame').on('mouseleave', function () {
        $(this).find('.showModal').fadeOut(500);
    });
    // function showModalBtn() {
    //     $(this).find('.veil').fadeIn(200);
    // }
    // function hideModalBtn() {
        
    // }

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

$(window).on('scroll', menuHide);

let lastScroll = 0;

function menuHide() {

    let currentScroll = $(window).scrollTop();
    
    if (currentScroll > lastScroll) {
        
        $('#menuSuperior').addClass('hidden');
        
    } else {
        console.log("currentScroll")

        $('#menuSuperior').removeClass('hidden');

    }
    lastScroll = currentScroll;
}



// ###################### DECLARACION DE FUNCIONES ##############################

// Pantalla de carga
function initialize() {
    $('#overlay').fadeOut(2000);
}

// Plugin para abrir modal
function openModal () {
    let projectId = $(this).data('project') -1 ;
    let modalTitle = projectData[projectId].title;
    let modalText = projectData[projectId].text;
    $('#modalTitle').text(modalTitle);
    $('#modalText').html(modalText);
    $('#modalBg').fadeIn(200,function () {
       $('#modalContent').fadeIn(300); 
    });
    
}

function closeModal(){
    $('#modalBg,#modalContent').fadeOut(300);
}

// ###################### INFORMACIÓN DE MODALES ##############################

let projectData = [
    {
        id:1,
        title:"Macmillan - ByME",
        text: "Proyecto educativo online, consiste en un gran catálogo de libros y recursos digitales gestionados mediante un CMS.<br>Duración: 2 años.<br>Rol: Técnico de producción.<br>Tecnología utilizada: HTML5, CSS3 y Javascript."

    },
    {
        id:2,
        title:"Microsite Telefónica",
        text: "Microsite hecho para la empresa Telefónica por medio del cual se personalizan y envian felicitaciones navideñas corporativas. Dotado de un escenario 360 y acceso a redes sociales.<br>Duración: 2 meses.<br>Rol: Creación de contenido.<br>Tecnología utilizada: HTML5, CSS3, Javascript, frameworks para el lado de cliente (AngularJs, Sass)."

    },
    {
        id:3,
        title:"Profuturo",
        text: "Proyecto educativo online, que consta de unidades relativas a un tópico particular, visualizado como una presentación dinámica, tiene slides explicativos y actividades interactivas.<br>Duración: 1 año y medio.<br>Rol: Responsable de producción / Desarrollador front.<br>Tecnología utilizada: HTML5, CSS3, Javascript, frameworks para el lado de cliente (AngularJs, Sass)."

    },
    {
        id:4,
        title:"Proyecto final formación javascript",
        text: "Proyecto final del curso de programación en Javascript. Es un juego donde se tiene que construir un parque de atracciones.<br>Rol: Programador.<br>Tecnología utilizada: HTML5, CSS3 y Javascript."

    }
];