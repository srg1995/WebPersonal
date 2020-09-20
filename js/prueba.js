var ULTIMO_SCROLL = 0;
var NUMERO_TRAYECTORIA = 1;
$(document).ready(function () {
    /*$(document).scroll(function(e){
        clearTimeout($.data(this, 'scrollTimer'));
       $.data(this, 'scrollTimer', setTimeout(function() {
        if($(document).scrollTop() > ULTIMO_SCROLL){
            NUMERO_TRAYECTORIA++;
            var trayectoria = ".trayectoria"+NUMERO_TRAYECTORIA;
            console.log(trayectoria)
            $(".trayectoria").hide();
            $(trayectoria).show();
        }else{
            NUMERO_TRAYECTORIA--;
            var trayectoria = ".trayectoria"+NUMERO_TRAYECTORIA;
            console.log(trayectoria)
            $(".trayectoria").hide();
            $(trayectoria).show();
        }
        console.log(NUMERO_TRAYECTORIA)
       }, 250));
    });*/

    $(document).on("mousewheel",function(e){
        console.log(e.originalEvent.wheelDeltaY)


        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            if(e.originalEvent.wheelDeltaY > 0){
                if(NUMERO_TRAYECTORIA < 4){
                    NUMERO_TRAYECTORIA++;
                    var trayectoria = ".trayectoria"+NUMERO_TRAYECTORIA;
                    var arbol = ".arbol"+NUMERO_TRAYECTORIA;
                    $(".trayectoria").hide();
                    $(trayectoria).fadeIn();
                    $(".arbol").removeClass("active");
                    $(arbol).addClass("active");
                }
            }else{
                if(NUMERO_TRAYECTORIA > 1){
                    NUMERO_TRAYECTORIA--;
                    var trayectoria = ".trayectoria"+NUMERO_TRAYECTORIA;
                    var arbol = ".arbol"+NUMERO_TRAYECTORIA;
                    $(".trayectoria").hide();
                    $(trayectoria).fadeIn();

                    $(".arbol").removeClass("active");
                    $(arbol).addClass("active");
                }
            }

        }, 150));
    });

});