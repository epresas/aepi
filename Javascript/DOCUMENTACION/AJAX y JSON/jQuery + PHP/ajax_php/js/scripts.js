$("form").on("submit", function( event ) {

      // alert( $( this ).serialize() )

      event.preventDefault();

      $.post({
            url:'http://cosasdigitales.com/documentacion/validarFormulario.php',
            data: $(this).serialize(),
            success: function(datos) {
                  let texto = datos.saludo + '<br>' + datos.telefono + '<br>' + datos.horario + '<br>' + datos.apunte;
                  msg(texto, 15);

            }
      });
});



function msg(arg1, arg2) {

      $('#mensaje').html(arg1);

      $('#alertas').addClass('visibles');

      setTimeout( function(){
            $('#alertas').removeClass('visibles');
      },arg2 * 1000);
}