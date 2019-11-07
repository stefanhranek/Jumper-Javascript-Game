'use strict'


function Player(canvas, lives) {

    this.canvas         = canvas;
    this.ctx            = this.canvas.getContext('2d');
    this.lives          = lives;    
    this.size           = 50;
    this.x              = 150;
    this.y              = 900; 
    
    this.speed          = 3
    this.jumpSpeed      = 3;  
    this.velX           = 0;    
    this.velY           = 0;    
    this.maxVelX        = 6;
    this.maxVelY        = 6;
    this.friction       = 0.88;
    this.gravity        = 4;
    this.gravitySpeed   = 0;
    this.jumping        = false; // utilize to prevent double jump

}


            /////////////////////////////////////////////////////////////////////////////////////////////////
          ////  CONTROLLER & GRAVITY //////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////


Player.prototype.updateGravity = function() {
    this.y += this.jumpSpeed * this.gravity;
}

Player.prototype.movePlayer = function(direction) {
// +1 y:down/x:right    -1 y::up/x:left

        
    if (direction === 'up') {
        if (this.velY < this.jumpSpeed) {
            this.velY -= this.jumpSpeed;
            this.velY -= this.jumpSpeed;
            this.velY *= this.friction
            this.y    += this.velY*3;

        }
    }
    // if (direction === 'down' /*&& this.jumping != true*/) {
    //     if (this.velY < this.speed) {
    //         this.velY -= this.speed;
    //         this.velY *= this.friction
    //         this.y    -= this.velY;
    //     }
    // }
    if (direction === 'left') {
        if (this.velX > -this.speed) {
            this.velX += this.speed;
            this.velX *= this.friction;
            this.x    -= this.velX;
        }
    }
    if (direction === 'right') {
        if (this.velX > -this.speed) {
            this.velX += this.speed;
            this.velX *= this.friction;
            this.x    += this.velX;
        }
    }


            ////////////////////////////////////////////////////////////////////////////////////////////
          ////  CONTROLLER END  //////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////
    

}

Player.prototype.draw = function() {
    this.ctx.fillStyle = 'salmon';
    // fillRect (x, y, width, height)
    this.ctx.fillRect(Math.floor(this.x), Math.floor(this.y), this.size, this.size);
}


        //////////////////////////////////////
      ////////// ENEMY COLLISION ///////////
    //////////////////////////////////////


Player.prototype.didCollideEnemy = function(enemy) {     
    var playerLeft   = this.x;
    var playerRight  = this.x + this.size;
    var playerTop    = this.y;
    var playerBottom = this.y + this.size;

    var enemyLeft   = enemy.x;
    var enemyRight  = enemy.x + enemy.size;
    var enemyTop    = enemy.y;
    var enemyBottom = enemy.y + enemy.size;

    // Check if the enemy intersects any of the player's sides
    var crossLeft   = enemyLeft   <= playerRight && enemyLeft >= playerLeft;
    var crossRight  = enemyRight  >= playerLeft && enemyRight <= playerRight;
    var crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;
    var crossTop    = enemyTop    <= playerBottom && enemyTop >= playerTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
        return true;
    }
    return false;
};

        //////////////////////////////////////
      /////////// WIN COLLISION ////////////
    //////////////////////////////////////

Player.prototype.didCollideWin = function(winObject) {
    
    var playerLeft   = this.x;
    var playerRight  = this.x + this.size;
    var playerTop    = this.y;
    var playerBottom = this.y + this.size;

    var winLeft   = winObject.x - winObject.width/2;
    var winRight  = winObject.x + winObject.width/2;
    var winTop    = winObject.y - winObject.height/2;
    var winBottom = winObject.y + winObject.height/2;

    // Check if the winObj intersects any of the player's sides
    var crossLeftWin   = winLeft <= playerRight && winLeft >= playerLeft;
    var crossRightWin  = winRight >= playerLeft && winRight <= playerRight;
    var crossBottomWin = winBottom >= playerTop && winBottom <= playerBottom;
    var crossTopWin    = winTop <= playerBottom && winTop >= playerTop;

    if ((crossLeftWin || crossRightWin) && (crossTopWin || crossBottomWin)) {
        console.log("YOU WONNNNNN");
        
        return true;
    }
    
    return false;
};



Player.prototype.handleScreenCollision = function() {
    
    // top & bottom collision
    var screenTop    = 0;
    var screenBottom = this.canvas.height-50;

    if (this.y > screenBottom) this.y = screenBottom - 1;
    else if (this.y < screenTop) this.y = 1;

    // left & right collision
    var screenLeft  = 0;
    var screenRight = this.canvas.width-30;

    if (this.x < screenLeft) this.x = 1;
    else if (this.x > screenRight) this.x = screenRight - 25;
    
};

    
    Player.prototype.removeLife = function() {
        this.lives -= 1;
    };   



// FLOOR (hard-coded test)

Player.prototype.handleFloorCollision = function(floorObj) {   

    if (this.y/2 >= 560) {
        this.y = this.canvas.height-100;    // *** hard-coded cheater method *** need to fix once I figure out collision on platforms
    }  
};



// window.addEventListener("keydown", Player.prototype,update.keyListener);
/*
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(moveLoop);
*/

// GRAVITY & FRICTION CODE IN TESTING BELOW *******************************************************

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