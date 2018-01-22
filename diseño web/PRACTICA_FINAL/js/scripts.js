// ocultación overlay
$(window).on('load', function(){

	$('html').addClass('cargada');

	$('#overlay span').fadeOut(200, function(){

		$('#overlay').fadeOut(200);

	});
});





// cierre ventana modal
$(document).on('keyup', function(evento){

	if (evento.keyCode == 27) {

		cierreModal();
	}
});





$(document).ready(function() {



	$('.owl-carousel').owlCarousel({
	    margin:10,
	    responsiveClass:true,
	    autoplay:true,
		autoplayTimeout:1000,
		loop: true,
		autoplayHoverPause:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

	new Vivus('bolt', {
		duration: 100,
		animTimingFunction: Vivus.EASE

	}, function(){

		$('#bolt').addClass('done');
	});

	new Vivus('light', {
		duration: 100,
		type: 'oneByOne'

	});


	// aplicación de retardos reveal
	$('.reveal.delayed').each(function(){

		var retardo = $(this).data('delay');

		$(this).css('transition-delay', retardo + 'ms');
	});



	// plugin de desplazamiento
	$('.desplazar').on('click', function(){

		var objetivo = $(this).data('nivel');

		var profundidad = $(objetivo).offset().top;

		$('html').animate({
			scrollTop: profundidad
		}, 1000);

	});



	// apertura modal
	$('#modalTexto').on('click', function(){

		$('.fondoModal').fadeIn(300, function(){

			$('.contenidoModal').fadeIn(300);
		});
	});



	// cierre modal
	$('.cerrarModal').on('click', cierreModal);



	// inicializamos controles video
	controlesVideo();




	// validación formulario

	$('form').on('submit', function(e){

		var nombre = $('#campoNombre').val();
		var email = $('#campoEmail').val();
		var mensaje = $('#campoMensaje').val();

		if (nombre.length < 2) {
			
			mostrarError("Por favor, introduce un nombre.");
			e.preventDefault();			
		}

		if ( email.includes('@') == false || email.includes('.') == false ) {
			
			mostrarError("Por favor, introduce un email válido.");
			e.preventDefault();
		}

		if (mensaje.length < 12) {
			
			mostrarError("El mensaje es demasiado corto.");
			e.preventDefault();
		}

	});

});



function mostrarError(textoError) {

	$('#alerta p').text(textoError);

	$('#alerta').addClass('visible');

	setTimeout(function(){

		$('#alerta').removeClass('visible');

	}, 5000);
}



function cierreModal() {

	$('.fondoModal, .contenidoModal').fadeOut(300);
}


function controlesVideo(){

	$('#iconoPlayVid, #playVid').on('click', function(){

		$('#videoPresentacion').get(0).play();
		$('#iconoPlayVid').fadeOut(600);

	});


	$('#pauseVid').on('click', function(){

		$('#videoPresentacion').get(0).pause();
		$('#iconoPlayVid').fadeIn(600);

	});

	$('#stopVid').on('click', function(){

		$('#videoPresentacion').get(0).load();
		$('#iconoPlayVid').fadeIn(600);

	});
}





$(window).on('scroll', function(){

	var profundidadUsuario = $(window).scrollTop();

	// sistema scrollreveal
	$('.reveal').each(function(){

		var profundidadObjetivo = $(this).offset().top - $(window).innerHeight() / 2;

		if (profundidadUsuario >= profundidadObjetivo) {

			$(this).addClass('visible');
		}
	});


	// rotacion logo

	$('.menu img').css('transform', 'rotate(' + profundidadUsuario * .1 + 'deg)');

});




