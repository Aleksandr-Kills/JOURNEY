$('.main-item').click(function(){
    $('.navigation').fadeToggle();
});

jQuery('.slider').slick ({
    dots: true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    pauseOnDotsHover: true,
    draggable: false
});