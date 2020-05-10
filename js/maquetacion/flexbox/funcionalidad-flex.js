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

    $(document).ready(function(){
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".dropdown-menu li").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
});

function actualizarClase(estilo,valor){
    $(".contenedor-padre").css(estilo,valor)
    //if($(".estilo-padre .estilos").)
    $(".estilo-padre .estilos").find("."+estilo).html('&nbsp;&nbsp;&nbsp;&nbsp;'+estilo+":"+valor+";<br>");
};