$(document).ready(function () {
    $('#owl-carousel-proyectos').owlCarousel({
        loop: true,
        dots:true,
        autoplay:true,
        nav: true,
        stagePadding: 200,
        margin: 20,
        responsiveClass: true,
        responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 2,
        }
        }
    })
});
