'use strict'


function Player(canvas, lives) {

    this.canvas         = canvas;
    this.ctx            = this.canvas.getContext('2d');
    this.lives          = lives;    // may not use lives *******************
    this.size           = 30;
    this.x              = canvas.width / 2;
    this.y              = canvas.height / 2; 
    
    this.speed          = 10;
    this.direction      = 0;
    this.velocityX      = 0;    //(backlog) // for fluidity
    this.velocityY      = 0;    //(backlog) // for fluidity
    this.friction       = 0.98;
    this.jumping        = true; // utilize to prevent double jump

}



Player.prototype.movePlayer = function(direction) {
// +1 y:down/x:right    -1 y::up/x:left

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
    this.ctx.fillStyle = 'salmon';
    // fillRect (x, y, width, height)
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}



Player.prototype.didCollide = function(enemy) {
    var playerLeft = this.x;
    var playerRight = this.x + this.size;
    var playerTop = this.y;
    var playerBottom = this.y + this.size;

    var enemyLeft = enemy.x;
    var enemyRight = enemy.x + enemy.size;
    var enemyTop = enemy.y;
    var enemyBottom = enemy.y + enemy.size;

    // Check if the enemy intersects any of the player's sides
    var crossLeft = enemyLeft <= playerRight && enemyLeft >= playerLeft;
    var crossRight = enemyRight >= playerLeft && enemyRight <= playerRight;
    var crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;
    var crossTop = enemyTop <= playerBottom && enemyTop >= playerTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
        return true;
    }
    return false;
};


Player.prototype.handleScreenCollision = function() {
    
    var screenTop = 0;
    var screenBottom = this.canvas.height-30;

    if (this.y > screenBottom) this.y = screenBottom - 1;
    
    else if (this.y < screenTop) this.y = 1;
};

    
    Player.prototype.removeLife = function() {
        this.lives -= 1;
    };   // probably not applicable *****
    
// window.addEventListener("keydown", Player.prototype,update.keyListener);
/*
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(moveLoop);
*/

// BELOW IS UN-USED GRAVITY & FRICTION CODE IN TESTING

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