$('.main-item').click(function(){
    $('.navigation').fadeToggle();
});

jQuery('.slider').slick ({
    dots: false,
    arrows:true,
    autoplay: false,
    speed: 1500,
    draggable: false
});