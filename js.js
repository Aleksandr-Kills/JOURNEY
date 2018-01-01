$('.main-item').click(function(){
    $('.navigation').fadeToggle();
});

jQuery('.slider').slick ({
    dots: false,
    arrows:true,
    autoplay: false,
    speed: 2000,
    draggable: false,
    fade:true
});