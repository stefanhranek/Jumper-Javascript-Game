'use strict'


function Shuriken(canvas, y, speed) {

    this.canvas             = canvas;
    this.ctx                = canvas.getContext('2d'); // this.canvas?
    // this.lives           = lives;    // may not use lives *****************
    this.sizeX              = 64;
    this.sizeY              = 13;
    this.x                  = canvas.width + this.sizeX;                        
    this.y                  = y;  
    this.speed              = speed;
    this.shurikenImage      = new Image();
    this.shurikenImage.src  = './images/steely.png';
}


Shuriken.prototype.draw = function() {

    this.ctx.drawImage(
        this.shurikenImage,
        this.x,
        this.y,
        this.sizeX,
        this.sizeY
    );

};


Shuriken.prototype.updatePosition = function() {

    this.x = this.x - this.speed; 

};


Shuriken.prototype.isInsideScreen = function() {

    return this.x - this.sizeX / 2 > -this.canvas.height; 

};