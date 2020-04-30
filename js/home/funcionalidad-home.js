var scrollActual;
var scrollAnterior = 0;

$(document).ready(function () {
    /*$('#owl-carousel-proyectos').owlCarousel({
        loop: true,
        dots:false,
        nav: false,
        stagePadding: 200,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                nav: false,
                dots:true,
                margin: 0,
                stagePadding: 40,
                items: 1,
            },
            576: {
                nav: false,
                dots:true,
                stagePadding: 40,
                items: 1,
            },
            768: {
                stagePadding: 80,
                items: 1,
            },
            992: {
                items: 1,
                stagePadding: 100,
            },
            1280: {
                items: 2,
            }
        }
    });*/


    

    $("#contenedor-habilidades").mouseenter(function () { 
        $(".skill img").addClass("amimacion-img");
        setTimeout(function(){ $(".skill img").removeClass("amimacion-img"); }, 1100);
    });

    var height = $(window).height();
    $(window).scroll(function(){


        /*funcionalidad img principal */


        var scrollImg = $(this).scrollTop();
        var pixels = scrollImg / 20;

		if(scrollImg < height){
			$("#cabecera").css({
				"background-position": "center " + pixels * 10 + "px"
			});

        }
        
        /* fin funcionalidad img principal */


        scrollActual = $(window).scrollTop();

        if(scrollActual > scrollAnterior){
            scrollUp = false;
            console.log("down")
        }else{
            scrollUp = true;
            console.log("up")
        }

        scrollAnterior = scrollActual;

        /**
         * añadimos funcionalidad a las habilidades destacadas
         */
        if(detectarAlto(window) > $("#contenedor-habilidades").offset().top){
            $(".skill img").addClass("amimacion-img");
            setTimeout(function(){ $(".skill img").removeClass("amimacion-img"); }, 1100);
        }

        /**
         * añadimos funcionalidad a los plugins
         */
        if(($(window).scrollTop() + $(window).height()) > ($("#contenedor-plguins").offset().top+100) && !scrollUp){
            $(".plugin:first-child").addClass("anima");
            $(".plugin:last-child").addClass("anima");
        }
        if(($(window).scrollTop() + $(window).height()) < ($("#contenedor-plguins").offset().top+$("#contenedor-plguins").height()) && scrollUp){
            $(".plugin:first-child").removeClass("anima");
            $(".plugin:last-child").removeClass("anima");
        }

    })
});


function detectarAlto(elemento){
    return $(elemento).scrollTop()
}

function inicioCapa(idCapa){

}