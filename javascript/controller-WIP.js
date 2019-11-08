
//Player.js//

function Player(canvas, lives) {

    this.canvas         = canvas;
    this.ctx            = this.canvas.getContext('2d');
    this.lives          = lives;    
    this.size           = 50;
    this.x              = 150;
    this.y              = 800;
    this.w              = 30  ;
    this.h              = 50  ; 
    
    this.speed          = 3
    this.jumpSpeed      = 3;  
    this.velX           = 0;    
    this.velY           = 0;    
    this.maxVelX        = 6;
    this.maxVelY        = 6;
    this.friction       = 0.88;
    this.gravity        = 4;
    this.gravitySpeed   = 0;
    // this.jumping        = false; // utilize to prevent double jump

    this.rightPressed = false;
    this.leftPressed = false;
    this.ducked = false;
    this.jumping = false;
    this.falling = false;
    this.down = true;

}

            /////////////////////////////////////////////////////////////////////////////////////////////////
          ////  CONTROLLER & GRAVITY //////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////


// Player.prototype.updateGravity = function() {
//     this.y += this.jumpSpeed * this.gravity;
// }

Player.prototype.movePlayer = function() {
// +1 y:down/x:right    -1 y::up/x:left

    if (this.jumping) {
        if (this.y > this.canvas.height/3) {
            this.y -= 20;
        }
        if (this.y <= this.canvas.height/3) {
            jumping = false;
            falling = true;
        }
        }
    else if (this.falling) {
            
        if (this.y < 510) {
            this.y += 40;
        }
        if (this.y >= 510) {
            this.y = 510;
            falling = false;
            down = true;
        }
    }
    if (leftPressed) {
        if (this.x > 0) {
            this.x -= 2.5;
        }
    }
    else if (rightPressed) {
        if (this.x < canvas.width-this.w) {
            this.x += 2.5;
        }
    }


setInterval(this.movePlayer, 10);


//game.js//


this.keyDownHandler = function(e) {
    if(e.keyCode == 39) {
    rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 40) {
        ducked = true;
        }
    else if(e.keyCode == 32) {
    if (down) {
        jumping = true;
        down = false;
        }   
    }
}


this.keyUpHandler() = function(e) {
    if(e.keyCode == 39) {
    rightPressed = false;
}
else if(e.keyCode == 37) {
    leftPressed = false;
    }
else if(e.keyCode == 40) {
    ducked = false;
    }
else if(e.keyCode == 32) {
    jumping = false;
    falling = true;
    }
}

document.addEventListener("keydown", this.keyDownHandler, false);
document.addEventListener("keyup", this.keyUpHandler, false);