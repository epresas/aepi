$(window).on('load', function(){

	$('#overlay span').delay(200).fadeOut(200, function(){

		$('#overlay').fadeOut(200);

	});

});


$(document).ready(function(){

	// desplazamiento botón
	// $('#bajar').on('click', function(){

	// 	var profundidad = $('#contacto').offset().top;

	// 	$('html').animate({
	// 		scrollTop: profundidad
	// 	}, 1000);

	// });

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

	$(window).on('scroll', function () {

		let windowDepth = $(window).scrollTop();
		
		$('.reveal').each(function () {
			let targetDepth = $(this).offset().top - ($(window).innerHeight() * .6);
			let targetDelay = $(this).data('delay');
			let self = $(this);//setTimeout pertenece a window... por lo que dentro de el $(this) hace referencia a window no a quien lo desencadeno
			if (windowDepth >= targetDepth) {
				setTimeout(function(){
					self.addClass('visible');
				},targetDelay);
				

			}

		});

		//rotacion logo
		$('#logoMenu').css('transform', 'rotate(' + (windowDepth * .1) +'deg)');

	});

});