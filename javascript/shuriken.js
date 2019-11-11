'use strict'


function Shuriken(canvas, x, speed) {

    this.canvas         = canvas;
    this.ctx            = canvas.getContext('2d'); // this.canvas?
    // this.lives          = lives;    // may not use lives *****************
    this.size           = 20;
    this.x              = x;                        
    this.y              = 0 - this.size;  
    this.speed          = speed;
    this.shurikenImage = new Image();
    this.shurikenImage.src = './images/steely.png';
}


Shuriken.prototype.draw = function() {

    this.ctx.drawImage(
        this.shurikenImage,
        this.x,
        this.y,
        this.size,
        this.size
    );

};


Shuriken.prototype.updatePosition = function() {

    this.y = this.y + this.speed; 

};


Shuriken.prototype.isInsideScreen = function() {

    return this.y + this.size / 2 < this.canvas.height; 

};