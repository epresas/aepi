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
})