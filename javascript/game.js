'use strict'

function Game() {
    this.canvas     = null;
    this.ctx        = null;
    this.enemies    = [];
    this.platforms  = mapInfo;
    this.coins      = coinInfo;
    this.player     = null;
    this.gameIsOver = false;
    this.gameWin    = false;
    this.gameScreen = null;
    this.coinCount  = 0;
    this.winObject  = null;
    this.floorObj   = null;
}


Game.prototype.start = function() {
console.log(this.platforms);

    // Get canvas element, create ctx, save canvas & ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas          = document.querySelector('canvas');
    this.ctx             = this.canvas.getContext('2d');


    // Save reference to coins collected
    this.coinsElement = this.gameScreen.querySelector('.coins-update'); // ('.coins .value') in code-along


    // Setting the canvas (ctx) to be the same as the viewport size
    // @@@@@@@  MIGHT BE THE CAUSE OF SHIFTING ELEMENTS IN GAME ON DIFFERENT VIEWPORT SIZES @@@@@@@
    this.containerWidth     = this.canvasContainer.offsetWidth;     // look back at 'offset' functionality
    this.containerHeight    = this.canvasContainer.offsetHeight;    // same as above
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    // Draw walls & coins & winObject & player
    this.winObject      = new WinObject(this.canvas);
    this.player         = new Player(this.canvas, 1);
    this.floorObj       = new Floor(this.canvas);
    this.drawPlatforms  = this.platforms.map(function(platformData) {return new Platforms(this.canvas, platformData.height,platformData.width,platformData.x,platformData.y);} ,this);
    this.drawCoins      = this.coins.map(function(coinData) {return new Coins(this.canvas, coinData.height,coinData.width,coinData.x,coinData.y);} ,this);

    
    // Add event listener for keydown movements 
    this.handleKeyDown = function(event) {
    
        if      (event.keyCode === 38) {this.player.movePlayer('up');}               // change movement to jump
        else if (event.key === 'ArrowDown') {this.player.movePlayer('down');}       // disable once gravity is in place
        else if (event.keyCode === 37) {this.player.movePlayer('left');}
        else if (event.keyCode === 39) {this.player.movePlayer('right');}
        };


        document.body.addEventListener(
            'keydown', 
            this.handleKeyDown.bind(this)
        );

            // Add 'keyup; listener to improve movement; running & jumping at the same time

    // Start the game loop
    this.startLoop();

}







// LOOP START ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Game.prototype.startLoop = function() {

    var loop = function() {
    
        // Random enemies
        if (Math.random() > 0.98) {
        var randomX = this.canvas.width * Math.random();    
        this.enemies.push(new Enemy(this.canvas, randomX, 5));  
        }

        // Check platform collisions

        mapInfo.forEach(function(platforms) {
            var playerTop       = this.player.y - this.player.size/2;
            var playerLeft      = this.player.x - this.player.size/2;
            var playerRight     = this.player.x + this.player.size/2;
            var playerBottom    = this.player.y + this.player.size/2; 
            var platformTop     = platforms.y - platforms.height/2; // -45
            var platformLeft    = platforms.x - platforms.width/2;
            var platformRight   = platforms.x + platforms.width/2;
            var platformBottom  = platforms.y + platforms.height/2;
            var crossTop        = playerBottom >= platformTop;
            var crossLeft       = playerLeft <= platformRight
            var crossRight      = playerRight >= platformLeft;
            var crossBottom     = playerTop <= platformBottom;        // not working right for some reason (BELOW)

            if (crossTop && crossRight && crossLeft && crossBottom) {this.player.y = platformTop-45;}

            // if      (crossLeft && crossTop && crossBottom) {this.player.x = platformLeft} 
            // else if (crossRight && crossTop && crossBottom) {this.player.x = platformRight} 
            // else if (crossTop && crossRight && crossLeft && crossTop) {this.player.y = platformTop;}
            // else if (crossBottom && crossLeft && crossRight) {this.player.y = platformBottom;}
        },this);

        
        // Check coin collisions

        coinInfo.forEach(function(coins) {
            var playerTop       = this.player.y - this.player.size/2;
            var playerLeft      = this.player.x - this.player.size/2;
            var playerRight     = this.player.x + this.player.size/2;
            var playerBottom    = this.player.y + this.player.size/2; 
            var coinsTop     = coins.y - coins.height/2; // -45
            var coinsLeft    = coins.x - coins.width/2;
            var coinsRight   = coins.x + coins.width/2;
            var coinsBottom  = coins.y + coins.height/2;
            var crossTop        = playerBottom >= coinsTop;
            var crossLeft       = playerLeft <= coinsRight
            var crossRight      = playerRight >= coinsLeft;
            var crossBottom     = playerTop <= coinsBottom;        // not working right for some reason (BELOW)

            if (crossTop && crossRight && crossLeft && crossBottom) {console.log("upgrade the coin count",); 
                                                                    (coins.x = this.canvas.width+1) && (coins.y = this.canvas.height+1);    // have to do a for loop to remove
                                                                    this.coinCount += 1;  
                                                                    this.updateGameStats();}   // need to send coin outside of map

            // if      (crossLeft && crossTop && crossBottom) {this.player.x = platformLeft} 
            // else if (crossRight && crossTop && crossBottom) {this.player.x = platformRight} 
            // else if (crossTop && crossRight && crossLeft && crossTop) {this.player.y = platformTop;}
            // else if (crossBottom && crossLeft && crossRight) {this.player.y = platformBottom;}
        },this);


        // Check enemy collisions
        this.checkCollisions();

        // Check screen & object collisions
        this.player.handleScreenCollision();
        this.player.handleFloorCollision(this.floorObj);

        // Update enemy movement
        this.enemies = this.enemies.filter(function(enemy) {
            enemy.updatePosition();
            return enemy.isInsideScreen();
        });




        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update the canvas: floor - walls - platforms - coins - winObject    
        this.winObject.draw();
        this.floorObj.draw();
        
        
         // Draw the player
        this.player.draw();
        this.player.updateGravity();
        
        // Draw the enemies
        this.enemies.forEach(function(enemy) {  
            enemy.draw();
        });

        // Draw the platforms 
        this.drawPlatforms.forEach(function(onePlatform) {
            onePlatform.draw();
        });

        // Draw the coins  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.drawCoins.forEach(function(oneCoin) {
            oneCoin.draw();
        });


        // Terminate loop when game 'WIN' or 'LOSE'
        if (!this.gameIsOver && !this.gameWin) {
            window.requestAnimationFrame(loop);
        }

        // Update Game data/stats
        this.updateGameStats();	  

    }.bind(this);



    window.requestAnimationFrame(loop);
}

// LOOP END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Game.prototype.checkCollisions = function() {         
    if (this.player.didCollideWin(this.winObject)) {this.youWin();}       // 1st checks win collision
    else {
        this.enemies.forEach(function(enemy) {                            // 2nd checks lose collision
            if ( this.player.didCollideEnemy(enemy) ) {

                this.player.removeLife();                    // REFER TO FOR COIN COLLISION + COUNTER ****************************************************
                console.log('lives', this.player.lives);

                // move enemy off the screen to the bottom
                enemy.y = this.canvas.height + enemy.size; 

                if (this.player.lives === 0) {
                    this.gameOver();
                }
            }
        }, this);
    }
}





Game.prototype.updateGameStats = function() {

    this.coinsElement.innerHTML = this.coinCount;
}

Game.prototype.passGameOverCallback = function(gameOver) {
    // need to understand this better
    this.onGameOverCallback = gameOver;
}

Game.prototype.passGameWinCallback = function(youWin) {
    // need to understand this better
    this.onYouWinCallback = youWin;
}


Game.prototype.gameOver = function() {
    // `gameIsOver = true` stops the loop
    this.gameIsOver = true;



    // call the gameOver function from `main` to show the Game Over Screen
    this.onGameOverCallback();
}


Game.prototype.youWin = function() {
    // `gameIsOver = true` stops the loop
    this.gameWin = true;                     

    

    // call the gameOver function from `main` to show the Game Over Screen
    this.onYouWinCallback();
}



Game.prototype.removeGameScreen = function() {
    this.gameScreen.remove();   
}


setInterval(this.movePlayer, 10);