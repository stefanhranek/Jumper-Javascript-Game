'use strict'

class Shuriken {
    constructor(canvas, y, speed) {
        this.canvas             = canvas;
        this.ctx                = canvas.getContext('2d'); 
        this.sizeX              = 64;
        this.sizeY              = 13;
        this.x                  = canvas.width + this.sizeX;                        
        this.y                  = y;  
        this.speed              = speed;
        this.shurikenImage      = new Image();
        this.shurikenImage.src  = './images/steely.png';
    };

    draw() {
        this.ctx.drawImage(
            this.shurikenImage,
            this.x,
            this.y,
            this.sizeX,
            this.sizeY
        );
    };

    updatePosition() {
        this.x = this.x - this.speed; 
    };

    isInsideScreen() {
        return this.x - this.sizeX / 2 > -this.canvas.height; 
    };
}