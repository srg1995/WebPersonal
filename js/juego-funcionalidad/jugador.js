var personaje = function(posicionX,posicionY){
    this.x = posicionX;
    this.y = posicionY;
    this.drch = true;

    this.dibuja = function(posMapX,posMapY){
        /*
        * ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        */
        ctx.drawImage(tileMap, this.x, this.y, 32, 32, posMapX, posMapY, 32, 32);
    }

    //metodo mueve derecha
    this.mueve = function(velocidad) {
        if(this.drch == true){
            if(this.x < 250){
                this.x+=velocidad;
            }
            else{
                this.drch = false;
                console.log("false")
            }
        }else{
            if (this.x > 0){
                this.x-=velocidad;
            }else{
                this.drch = true;
            }
        }
    }

    //metodo abajo
    this.abajo = function(){
        this.y = this.y + 10;
    }

    //metodo hablar
    this.hablar = function(){
        console.log("chocaste contra mi"+this.nombre);
    }
}