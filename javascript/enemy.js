'use strict'

class Enemy {
    constructor(canvas, x, speed) {
        this.canvas         = canvas;
        this.ctx            = canvas.getContext('2d');
        this.size           = 20;
        this.x              = x;                        
        this.y              = 0 - this.size;  
        this.speed          = speed;
        this.snowImage      = new Image();
        this.snowImage.src  = './images/blueSnowball.png';
    };

    draw() {
        this.ctx.drawImage(
            this.snowImage,
            this.x,
            this.y,
            this.size,
            this.size
        );
    };

    updatePosition() {
        this.y = this.y + this.speed; 
    };

    isInsideScreen() {
        return this.y + this.size / 2 < this.canvas.height;
    };
}