$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// =========================
$('.popular_row').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:'<i class="fa-solid fa-angle-left p_left"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right p_right"></i>',
});

$('.video_row').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    centerMode: true,
    centerPadding:40,
});
$('.game_row').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
});