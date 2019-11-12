'use strict'

var coinSound = new Audio("./sound/retroCoinSound.wav");
var snowSound = new Audio("./sound/snowHit.wav");               // REVISIT: NOT FUNCTIONAL

class Player {
    constructor(canvas, lives) {                                
        this.canvas          = canvas;
        this.ctx             = this.canvas.getContext('2d');    // REVISE: DELETE EXTRAS
        this.lives           = lives;    
        this.size            = 81;
        this.x               = 150;
        this.y               = 1100; 
        this.speed           = 10;
        this.jumpSpeed       = 20;  
        this.velX            = 0;    
        this.velY            = 0;    
        this.maxVelX         = 6;
        this.maxVelY         = 6;
        this.friction        = 0.88;
        this.gravity         = 4;
        this.gravitySpeed    = 0;
        this.jumping         = false; 
        this.direction       = 0;
        this.directionY      = 0;
        this.directionX      = 0;
        this.playerImage     = new Image();
        this.playerImage.src = './images/spike.png';
    };

    movePlayer(direction) {
            this.y = this.y + this.jumpSpeed * this.directionY;
            this.x = this.x + this.speed * this.directionX;
    };

    draw() {
        this.ctx.drawImage( 
            this.playerImage,
            this.x,
            this.y,
            this.size,
            this.size)
    };

    didCollideEnemy(shuriken) {     
        var playerLeft   = this.x;
        var playerRight  = this.x + this.size;
        var playerTop    = this.y;
        var playerBottom = this.y + this.size;

        var shurikenLeft   = shuriken.x;
        var shurikenRight  = shuriken.x + shuriken.sizeX;
        var shurikenTop    = shuriken.y;
        var shurikenBottom = shuriken.y + shuriken.sizeY;

        var crossLeft   = shurikenLeft   <= playerRight && shurikenLeft >= playerLeft;      // COLLISION CHECKS
        var crossRight  = shurikenRight  >= playerLeft && shurikenRight <= playerRight;     // COLLISION CHECKS
        var crossBottom = shurikenBottom >= playerTop && shurikenBottom <= playerBottom;    // COLLISION CHECKS
        var crossTop    = shurikenTop    <= playerBottom && shurikenTop >= playerTop;       // COLLISION CHECKS
        if ((crossLeft || crossRight) && (crossTop || crossBottom)) {                       // COLLISION CHECKS
            return true;
        };
        return false;
    };

    didCollideEnemy(enemy) {     
        var playerLeft   = this.x;
        var playerRight  = this.x + this.size;
        var playerTop    = this.y;
        var playerBottom = this.y + this.size;
    
        var enemyLeft   = enemy.x;
        var enemyRight  = enemy.x + enemy.size;
        var enemyTop    = enemy.y;
        var enemyBottom = enemy.y + enemy.size;
    
        var crossLeft   = enemyLeft   <= playerRight && enemyLeft >= playerLeft;        // COLLISION CHECKS
        var crossRight  = enemyRight  >= playerLeft && enemyRight <= playerRight;       // COLLISION CHECKS
        var crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;      // COLLISION CHECKS
        var crossTop    = enemyTop    <= playerBottom && enemyTop >= playerTop;         // COLLISION CHECKS
        if ((crossLeft || crossRight) && (crossTop || crossBottom)) {                   // COLLISION CHECKS
            return true;
        };
        return false;
    };

    didCollideWin(winObject) {
        var playerLeft   = this.x;
        var playerRight  = this.x + this.size;
        var playerTop    = this.y;
        var playerBottom = this.y + this.size;
    
        var winLeft   = winObject.x - winObject.width/2;
        var winRight  = winObject.x + winObject.width/2;
        var winTop    = winObject.y - winObject.height/2;
        var winBottom = winObject.y + winObject.height/2;
    
        var crossLeftWin   = winLeft <= playerRight && winLeft >= playerLeft;       // COLLISION CHECKS
        var crossRightWin  = winRight >= playerLeft && winRight <= playerRight;     // COLLISION CHECKS
        var crossBottomWin = winBottom >= playerTop && winBottom <= playerBottom;   // COLLISION CHECKS
        var crossTopWin    = winTop <= playerBottom && winTop >= playerTop;         // COLLISION CHECKS
        if ((crossLeftWin || crossRightWin) && (crossTopWin || crossBottomWin)) {   // COLLISION CHECKS
            return true;
        };
        return false;
    };

    handleScreenCollision() {
        var screenTop    = 0;                                       // TOP & BOTTOM COLLISION
        var screenBottom = this.canvas.height-50;                   // TOP & BOTTOM COLLISION
        if (this.y > screenBottom) this.y = screenBottom - 1;       // TOP & BOTTOM COLLISION
        else if (this.y < screenTop) this.y = 1;                    // TOP & BOTTOM COLLISION

        var screenLeft  = 0;                                        // LEFT & RIGHT COLLISION
        var screenRight = this.canvas.width-30;                     // LEFT & RIGHT COLLISION
        if (this.x < screenLeft) this.x = 1;                        // LEFT & RIGHT COLLISION
        else if (this.x > screenRight) this.x = screenRight - 25;   // LEFT & RIGHT COLLISION
    };

    removeLife() {
        this.lives -= 1;
    };   

    handleFloorCollision(floorObj) {   
        if (this.y/2 >= 560) {
            this.y = this.canvas.height-100;    // REVISIT: OPTIMIZE FOR BETTER COLLISION
        };
    };
}