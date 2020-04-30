/*function pulsaA(){
    console.log('pulsa a')
}

function ataqueEspecial(){
    console.log('atque especial')
}

var configTeclado = {prevent_repeat : true};

var eventoTeclado = new window.keypress.Listener(this, configTeclado);

eventoTeclado.simple_combo('a', pulsaA);
eventoTeclado.sequence_combo('up down a', ataqueEspecial)


var miCanvas;


$(document).ready(function () {
    inicializarJuego();
});


function inicializarJuego(){

    miCanvas = $("#canvas");

    miCanvas.mousedown(function(){
        console.log("pulsaste");
    });

    miCanvas.mouseup(function(){
        console.log("levantaste");
    });

    miCanvas.mousemove(function(e){
        console.log("levantaste");
        var x = e.pageX;
        var y = e.pageY;
        console.log("x: "+x+" y: "+y)
    });
}



var personaje = function(x,y,nombre){
    this.x = x;
    this.y = y;
    this.nombre = nombre;

    //metodo abajo
    this.abajo = function(){
        this.y = this.y + 10;
    }

    //metodo hablar
    this.hablar = function(){
        console.log("chocaste contra mi"+this.nombre);
    }
}

var personaje1 = new personaje(10,10,'sergio');

*/

/*OBJETOS DEL JUEGO
var miguel = new personaje(0,0);
var sesi = new personaje(32,0);
var tierra = new personaje(64,0);
var sergio = new personaje(96,0);
var obelisco = new personaje(128,0);
var cielo = new personaje(0,32);
var eduardo = new personaje(32,32);
var victor = new personaje(64,32);
var moto = new personaje(96,32);
var iberdrola = new personaje(128,32);


var mochila = ['Vitycycle','lavadora','skate',]
*/

$(document).ready(function () {
    init();
});

var canvas;
var ctx;
var FPS = 50;
var jugador;
var tileMap;

var jugadorCambiadoX;
var jugadorCambiadoY;

var altoFicha = 32;
var anchoFicha = 32;
var mapa = [
    [1, 2, 0, 2, 0, 0, 2, 2, 2, 2],
    [0, 2, 2, 2, 0, 0, 2, 0, 0, 2],
    [0, 0, 0, 2, 0, 2, 2, 0, 0, 2],
    [0, 0, 2, 2, 2, 2, 0, 0, 0, 2],
    [2, 2, 2, 0, 2, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 2, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 2, 0, 0, 0, 0, 2],
    [2, 2, 0, 0, 2, 2, 2, 0, 0, 2],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 2],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 2],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 3]
];

var tierra = "#ffaa00";
var cielo = "#4400ff";
var llave = "#FAFF33";
var salida = "#FF3C33";

var personaje = function(){
    this.x = 1;
    this.y = 1;
    this.llave = false;

    this.dibuja = function(imagenx, imageny){
        /*
        * ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        */

        ctx.drawImage(tileMap, imagenx,imageny,32,32,this.x*anchoFicha,this.y*altoFicha,anchoFicha,altoFicha);
    }

    this.margenes = function(x,y){
        var colision = false;
        if(x < 0 || y < 0 || mapa[y][x] == undefined || mapa[y][x] == 0 ){
            colision = true;
        }
        return colision;

    }

    this.arriba = function(){
        if(!this.margenes(this.x,this.y-1)){
            this.y--;
            this.logica();
        }
    }

    this.abajo = function(){
        if(!this.margenes(this.x,this.y+1)){
            this.y++;
            this.logica();
        }
    }

    this.izquierda = function(){
        if(!this.margenes(this.x-1,this.y)){
            this.x--;
            this.logica();
        }
    }

    this.derecha = function(){
        if(!this.margenes(this.x+1,this.y)){
            this.x++;
            this.logica();
        }
    }

    this.logica = function(){
        var obj = mapa[this.y][this.x];
        if(obj == 3){
            this.llave = true;
            mapa[this.y][this.x] = 2;
            console.log("Mente de Vity: mete cuarta y corre a por sacris, estara deseandolo");
            jugadorCambiadoX = 160;
            jugadorCambiadoY = 0;
        }

        if(this.llave == true && obj == 1){
            console.log("Sacris: Sabia que lo lograrias amor");
            console.log("Vity: Contigo al fin del mundo");
        }
        if(this.llave == false && obj == 1){
            console.log("Sacris: Vity sabes que quiero ir en moto");
        }
    }

    //metodo hablar
    this.hablar = function(){
        console.log("chocaste contra mi"+this.nombre);
    }
}

//Lectura del teclado
$(document).keydown(function (e) {
    switch (e.keyCode) {
        case 38:
            jugador.arriba();
            break;
        case 40:
            jugador.abajo();
            break;
        case 37:
            jugador.izquierda();
            break;
        case 39:
            jugador.derecha();
            break;
        default:
            break;
    }
});

function dibujarEscenario(){
    var tile;
    for (y = 0; y < mapa.length; y++) {
        for (x = 0; x < mapa.length; x++) {

            tile = mapa[y][x];
            
            switch (tile) {
                case 1:
                    ctx.drawImage(tileMap, 96,0,32,32,32*x,32*y,32,32);
                    //color = meta;
                    break;
                case 2:
                    ctx.drawImage(tileMap, 64,0,32,32,32*x,32*y,32,32);
                    //color = tierra;
                    break;
                case 3:
                    ctx.drawImage(tileMap, 96,32,32,32,32*x,32*y,32,32);
                    //color = llave;
                    break;
                default:
                    ctx.drawImage(tileMap, 0,32,32,32,32*x,32*y,32,32);
                    //color = cielo;
                    break;
            }

            /*ctx.fillStyle = color;
            ctx.fillRect(x*anchoFicha, y*altoFicha, anchoFicha, altoFicha);
            */

        }
    }
}

function init(){
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d");

    //Creamos el mapa de imagen
    tileMap = new Image();
    tileMap.src = '../img/videojuego/tilemap.png';

    //Creamos al jugador
    jugador = new personaje();
    jugadorCambiadoX = 64;
    jugadorCambiadoY = 32;

    setInterval(function(){
        principal();
    }, 1000/FPS);
}

function borrarCanvas() {
    canvas.width = 320;
    canvas.height = 352;
}

function principal(){
   // borrarCanvas();

    dibujarEscenario();


    jugador.dibuja(jugadorCambiadoX,jugadorCambiadoY);





    /*miguel.dibuja(0,0);
    sesi.dibuja(0,32);
    tierra.dibuja(0,64);
    sergio.dibuja(0,92);
    obelisco.dibuja(0,124);
    cielo.dibuja(0,156);
    eduardo.dibuja(0,192);
    victor.dibuja(0,224);
    moto.dibuja(0,256);
    iberdrola.dibuja(0,288);*/

}
