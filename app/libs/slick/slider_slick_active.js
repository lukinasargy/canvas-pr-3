$(document).ready(function () {
    innerWidth < 980 && $("#slider").slick({
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 5e3,
        arrows: !0,
        dots: 0,
        adaptiveHeight: 0
    })
});