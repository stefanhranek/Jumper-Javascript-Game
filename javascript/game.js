'use strict'

function Game() {
    this.canvas     = null;
    this.ctx        = null;
    this.enemies    = [];
    this.platforms  = mapInfo;
    this.player     = null;
    this.gameIsOver = false;
    this.gameWin    = false;
    this.gameScreen = null;
    this.coinCount  = 0;
    // this.physObj    = null;
    this.winObject  = null;
    this.floorObj = null;
}


Game.prototype.start = function() {
console.log(this.platforms);

    // Here... get canvas element, create ctx, save canvas & ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas          = document.querySelector('canvas');
    this.ctx             = this.canvas.getContext('2d');

    // save reference to coins collected
    this.coinsElement = this.gameScreen.querySelector('coins'); // ('.coins .value') in code-along

    // Setting the canvas (ctx) to be the same as the viewport size
    // @@@@@@@  MIGHT BE THE CAUSE OF SHIFTING ELEMENTS IN GAME ON DIFFERENT VIEWPORT SIZES @@@@@@@
    this.containerWidth     = this.canvasContainer.offsetWidth; // look back at 'offset' functionality
    this.containerHeight    = this.canvasContainer.offsetHeight; // same as above
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    //draw walls & coins & winObject & player
    // this.physObj    = new PhysicalObjects(this.canvas); // *************************************** edit/remove
    this.coins          = new Coins(this.canvas);
    this.winObject      = new WinObject(this.canvas);
    this.player         = new Player(this.canvas, 1);
    this.floorObj       = new Floor(this.canvas);
    this.drawPlatforms  = this.platforms.map(function(platformData){
        return new Platforms(this.canvas, platformData.height,platformData.width,platformData.x,platformData.y);
    },this)


    // Add event listener for keydown movements 

    
    this.handleKeyDown = function(event) {
    
        if (event.keyCode === 38) {

            this.player.movePlayer('up');   // change movement to jump
            } 
        else if (event.key === 'ArrowDown') {;
            this.player.movePlayer('down');   // disable once gravity is in place
            }
        else if (event.keyCode === 37) {
            this.player.movePlayer('left');
        }
        else if (event.keyCode === 39) {
            this.player.movePlayer('right');
        }
        };


        document.body.addEventListener(
            'keydown', 
            this.handleKeyDown.bind(this)
        );





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

        // platforms /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log("map infooooooooo",mapInfo)
//         mapInfo.forEach(function(platforms) {
//             console.log("platforms", platforms)
//         })

        // Check enemy collisions
        this.checkCollisions();

        // Check screen & object collisions
        this.player.handleObjectCollision();          // doesn't work ??? ***********************************                           WORKING ON WIN COLLISION @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
        // this.physObj.draw();      
        this.coins.draw();
        this.winObject.draw();
        this.floorObj.draw();
        
        
         // Draw the player
        this.player.draw();
        this.player.updateGravity();
        // Draw the enemies
        this.enemies.forEach(function(enemy) {  
            enemy.draw();
        });

        // Draw the platforms *************************************************************************************************************************
        this.platforms.forEach(function(onePlatform) {
            debugger;
            onePlatform.draw();
        });

        // Terminate loop when game 'WIN' or 'LOSE'
        if (!this.gameIsOver && !this.gameWin) {
            window.requestAnimationFrame(loop);
        }

        // Update Game data/stats
        this.updateGameStats();	    // ************************************update this later for coin counter

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

    this.coinCount += 1;                                // UPDATE FOR COIN COUNTER
    // this.coinsElement.innerHTML = this.coins;
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