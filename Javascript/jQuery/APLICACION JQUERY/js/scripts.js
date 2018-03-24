$(window).on('load',function(){
    $('.overlay').fadeOut(600, function () {
        $('h1').animate({
            letterSpacing:40
        },500);
    });
});

$(window).on('scroll',function () {
    let userScroll = $(window).scrollTop();
    $('#noria').css('transform','rotate('+userScroll *.05+'deg)');

    // console.log(userScroll);

$('.reveal').each(function () {
    if($(window).scrollTop() > ($(this).offset().top - $(window).innerHeight()/ 1.5)){
        $(this).addClass('visible');
    }
});

});
$(document).ready(function () {
    $('.desplazar').on('click',scrollTo);


});
function scrollTo() {

    let target = $(this).data('nivel');
    let targetDepth = $(target).offset().top;
    let windowDepth = $(window).scrollTop();
    let timing = Math.abs(windowDepth - targetDepth ) * .9;
    // alert(timing)
    $('html').animate({
        scrollTop:targetDepth
    },timing);
}