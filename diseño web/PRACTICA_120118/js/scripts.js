$(window).on('load', function(){
	$('html').addClass('cargada');	

	$('#overlay span').delay(200).fadeOut(200, function(){

		$('#overlay').fadeOut(200);

	});

});



$(document).ready(function(){

	$('.owl-carousel').owlCarousel();

	new Vivus('bolt', { 
		duration: 300,
		animTimingFunction: Vivus.EASE
	 }, function () {
		$('#bolt').addClass('done');
	});

	new Vivus('light', { duration: 200,
	type: 'oneByOne' });


	$('.desplazar').on('click',function () {
		let nivelObjetivo = $(this).data('nivel');
		let profundidadObjetivo = $(nivelObjetivo).offset().top;
		$('html').animate({
			scrollTop: profundidadObjetivo
		},1000);
	})

	// apertura modal
	$('#modalTexto').on('click', function(){

		$('.fondoModal').fadeIn(300, function(){

			$('.contenidoModal').fadeIn(300);
		});
	});


	// cierre modal
	$('.cerrarModal').on('click', function(){

		$('.fondoModal, .contenidoModal').fadeOut(300);
	
	});
	// reproductor de video
	$('#playVid,#iconoPlayVid').on('click',function(){
		$('#videoPresentacion').get(0).play();
		$('#playVid,#iconoPlayVid').fadeOut(200);
	});
	$('#pauseVid').on('click',function(){
		$('#videoPresentacion').get(0).pause();
		$('#playVid,#iconoPlayVid').fadeIn(200);
	});
	$('#stopVid').on('click',function(){
		$('#videoPresentacion').get(0).load();
		$('#playVid,#iconoPlayVid').fadeIn(200);
	});

	// //Mostrar el boton "comenzamos" cuando lo detecte
	// $(window).on('scroll',function () {
	// 	let windowDepth = $(window).scrollTop();
	// 	let targetDepth = $('#bajar').offset().top - ($(window).innerHeight() * .8) ;
	// 	if (windowDepth >= targetDepth) {
	// 		$('#bajar').addClass('visible');
		
	// 	}
	// });

	// Reproductor video trailer
	$('#verTrailer').on('click',function () {
		$('.modalVideo').fadeIn(300,function () {
			$('#videoModal').get(0).play();
		});
	});
	$('#cerrarTrailer').on('click',function () {
		$('#videoModal').get(0).load();
		$('.modalVideo').fadeOut(200);
	});

	$(window).on('scroll', function () {

		let windowDepth = $(window).scrollTop();
		
		$('.reveal').each(function () {
			let targetDepth = $(this).offset().top - ($(window).innerHeight() * .6);

			if (windowDepth >= targetDepth) {
			
				$(this).addClass('visible');	

			}

		});
		//retardo reveal
		$('.reveal.delayed').each(function () {
			let retardo = $(this).data('delay');
			$(this).css('transition-delay',+ retardo +'ms');
		});

		//rotacion logo
		$('#logoMenu').css('transform', 'rotate(' + (windowDepth * .1) +'deg)');

	});
	$('form').on('submit', function (e) {
		e.preventDefault();
		let nombre = $('#campoNombre').val(); //No forma parte del DOM por lo que el metodo text no sirve
		let email = $('#campoEmail').val();
		let mensaje = $('#campoMensaje').val();
		// alert("Soy "+nombre+", de correo "+email+" y mi mensaje es: " + mensaje);
		if (nombre.length < 2) {
			alertaError('El nombre es demasiado corto.');
		}
		if (!email.includes('@') || !email.includes('.')) {
			alertaError('Email no válido.');
		}
		if (mensaje.length < 20) {
			alertaError('El Mensaje es demasiado corto.');

		}
	});

});


function alertaError(texto) {
	$('#alerta p').text(texto);
	$('#alerta').addClass('visible');
	setTimeout(function () {
		$('#alerta').removeClass('visible');

	}, 3000);
}