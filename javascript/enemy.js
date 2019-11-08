'use strict'


function Enemy(canvas, x, speed) {

    this.canvas         = canvas;
    this.ctx            = canvas.getContext('2d'); // this.canvas?
    // this.lives          = lives;    // may not use lives *****************
    this.size           = 20;
    this.x              = x;                        // change for top screen drop
    this.y              = 0 - this.size;  // change for top screen drop
    this.speed          = speed;
    this.snowImage = new Image();
    this.snowImage.src = './images/blueSnowball.png';
}


Enemy.prototype.draw = function() {

    this.ctx.drawImage(
        this.snowImage,
        this.x,
        this.y,
        this.size,
        this.size
    );

};


Enemy.prototype.updatePosition = function() {

    this.y = this.y + this.speed; 

};


Enemy.prototype.isInsideScreen = function() {

    return this.y + this.size / 2 < this.canvas.height; 

};