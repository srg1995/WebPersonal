(function ( $ ) {


    $.fn.greenify = function() {
        this.css( "color", "green" );
        return this;
    };
}( jQuery ));

//estilos-flexbox

$(document).ready(function () {
    $("#direction").on('change', function() {
        actualizarClase(this.name, this.value);
    });
    $("#wrap").on('change', function() {
        actualizarClase(this.name, this.value);
    });
    $("#justify").on('change', function() {
        actualizarClase(this.name, this.value);
    });
    $("#align-items").on('change', function() {
        actualizarClase(this.name, this.value);
    });
    $("#align-content").on('change', function() {
        actualizarClase(this.name, this.value);
    });
    $("#direction").on('change', function() {
        actualizarClase(this.name, this.value);
    });

});

function actualizarClase(estilo,valor){
    $(".contenedor-padre").css(estilo,valor)
    //if($(".estilo-padre .estilos").)
    $(".estilo-padre .estilos").find("."+estilo).html('&nbsp;&nbsp;&nbsp;&nbsp;'+estilo+":"+valor+";<br>");
};