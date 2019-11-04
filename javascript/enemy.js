'use strict'


function Enemy(canvas, y, speed) {

    this.canvas         = canvas;
    this.ctx            = canvas.getContext('2d'); // this.canvas?
    // this.lives          = lives;    // may not use lives *****************
    this.size           = 10;
    this.x              = canvas.width + this.size;                        // change for top screen drop
    this.y              = y;  // change for top screen drop
    this.speed          = speed;

}


Enemy.prototype.draw = function() {

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(
        this.x,
        this.y,
        this.size,
        this.size
    );

};


Enemy.prototype.updatePosition = function() {

    this.x = this.x - this.speed;  // change for top screen

};


Enemy.prototype.isInsideScreen = function() {

    return this.x + this.size / 2 > 0; // change to bottom of screen

};