'use strict'

function Player(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.size = 50;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.speed = 5;
}

Player.prototype.draw = function() {
    this.ctx.fillStyle = 'red';
    // fillRect (x, y, width, height)
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

// Section for Movement

var LEFT = false;
var RIGHT = false;

    // Arrow keys

Player.prototype.move() = function() {
    if (LEFT) {
        this.x -= this.speed;
    }
    if (RIGHT) {
        this.y += this.speed;
    }
}

document.onkeydown = function(e) {
    if (e.keyCode == 37) LEFT = true;
    if (e.keyCode == 39) RIGHT = true;
}

document.up = function(e) {
    if (e.keyCode == 37) LEFT = false;
    if (e.keyCode == 39) RIGHT = false;
}