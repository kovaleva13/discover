$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        speed:1000,
        easing:'ease',
        autoplay:true,
        autoplaySpeed:2500,
        fade:true
    });
    $(document).ready(function(){
        $('.serv-slider').slick({
            arrows:false,
            dots:true,
            speed:1000,
            easing:'ease',
            autoplay:true,
            autoplaySpeed:2500,
            fade:true
            
        });
    });
    $('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});