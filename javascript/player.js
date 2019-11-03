'use strict'


function Player(canvas, lives) {

    this.canvas         = canvas;
    this.ctx            = this.canvas.getContext('2d');
    this.lives          = lives;    // may not use lives *******************
    this.size           = 15;
    this.x              = canvas.width / 2;
    this.y              = canvas.height / 2; 
    
    this.xVelocity      = 0; //(backlog) // for fluidity
    this.yVelocity      = 0; //(backlog) // for fluidity
    this.speed          = 10;
    this.friction       = 0.98;
    this.direction      = 0;
    this.moveLeft       = false;
    this.moveRight      = false;
    this.jumping        = true;

}



Player.prototype.movePlayer = function(direction) {
// +1 down/right    -1 up/left
    if (direction === 'up') {
        this.y -= this.speed;
    }
    if (direction === 'down') {
        this.y += this.speed;
    }
    if (direction === 'left') {
        this.x -= this.speed;
    }
    if (direction === 'right') {
        this.x += this.speed;
    }
}

Player.prototype.draw = function() {
    this.ctx.fillStyle = 'orange';
    // fillRect (x, y, width, height)
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}

/*
var controller = {
    left : false,
    right : false,
    up : false,

    keyListener : function(event) {

        var key_state = (event.type == "keydown")?true:false;

        switch(event.keyCode) {

            case 37: //left key
                controller.left = key_state;
                break;
            case 38: //up key
                controller.up = key_state;
                break;
            case 39: //right key
                controller.right = key_state;
                break;
        }
    }
}


var moveLoop = function() {
    if (controller.up && Player.jumping == false) {

        Player.yVelocity -=20;
        Player.jumping = true;

    }

    if (controller.left) {

        Player.xVelocity -= 0.5;
        // take away - to make more rigid
    }

    if (controller.right) {

        Player.xVelocity += 0.5;

    }

    Player.yVelocity += 1.5; // gravity
    Player.x += Player.xVelocity;
    Player.y += Player.yVelocity;
    Player.xVelocity *= 0.9; //friction
    Player.yVelocity *= 0.9; //friction
}
*/


// Player.prototype.setGravity = function(gravity) {
//     //
// };


Player.prototype.didCollide = function(enemy) {};


Player.prototype.handleScreenCollision = function() {};


Player.prototype.removeLife = function() {};   // probably not applicable *****

// window.addEventListener("keydown", Player.prototype,update.keyListener);
/*
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(moveLoop);
*/