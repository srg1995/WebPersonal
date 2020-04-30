$(document).ready(function () {
    $('#menu_on').click(function(){
    	$('body').toggleClass('visible_menu');
    });

    escuchadorScroll();
});

function escuchadorScroll(){
    $(window).scroll(function() {
        if($("#menu-principal.menu-flotante").offset().top > 50){
            $("#menu-principal.menu-flotante").addClass("menu-principal-scroll");

        }
        if($("#menu-principal.menu-flotante").offset().top < 50){
            $("#menu-principal.menu-flotante").removeClass("menu-principal-scroll");
        }
    });
}