$('.main-item').click(function(){
    $('.navigation').fadeToggle();
});

jQuery('.slider').slick ({
    dots: false,
    arrows:true,
    autoplay: false,
    fade:true,
    speed: 1500,
    draggable: true
});