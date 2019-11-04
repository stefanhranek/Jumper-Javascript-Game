'use strict'

function Game() {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.coinCount = 0;
    this.walls = null;
    this.winObject = null;
}

// Create the canvas, a `player`, and start the canvas loop

Game.prototype.start = function() {

    // Here... get canvas element, create ctx, save canvas & ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    // save reference to coins collected
    this.coinsElement = this.gameScreen.querySelector('coins'); // ('.coins .value') in code-along

    // Setting the canvas (ctx) to be the same as the viewport size
    // @@@@@@@  MIGHT BE THE CAUSE OF MOVING ELEMENTS IN GAME ON DIFFERENT VIEWPORT SIZES @@@@@@@
    this.containerWidth = this.canvasContainer.offsetWidth; // look back at 'offset' functionality
    this.containerHeight = this.canvasContainer.offsetHeight; // same as above
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    //draw walls & coins
    this.floor = new Floor(this.canvas); // *************************************** edit/remove
    this.coins = new Coins(this.canvas);
    this.winObject = new WinObject(this.canvas);
    // Creating new player for the start of the game
    this.player = new Player(this.canvas, 1);

    // Add event listener for keydown movements 
    

    this.handleKeyDown = function(event) {
    
        if (event.keyCode === 38) {
            console.log('UP');
            this.player.movePlayer('up');   // change movement to jump
            } 
        else if (event.key === 'ArrowDown') {
            console.log('DOWN');
            this.player.movePlayer('down');   // disable once gravity is in place
            }
        else if (event.keyCode === 37) {
            console.log('LEFT');
            this.player.movePlayer('left');
        }
        else if (event.keyCode === 39) {
            console.log('RIGHT');
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

Game.prototype.startLoop = function() {

    var loop = function() {
        console.log('in loop');


        // EVERYTHING HAPPENS HERE !!!!!
        // 1. UPDATE THE STATE OF PLAYER AND ENEMIES
         // 0. Our player was already created - via `game.start()`
        // 1. Create new enemies randomly
        if (Math.random() > 0.98) {
        var randomX = this.canvas.width * Math.random();    
        this.enemies.push(new Enemy(this.canvas, randomX, 5));  
        }

        // 2. Check if player had hit any enemy (check all enemies)
        this.checkCollisions();

        // 3. Check if player is going off the screen
        // & check object collision
        this.player.handleFloorCollision();          // doesn't work
        this.player.handleScreenCollision();
        //this.player.handleObjectCollision();      //  need object collision

         // 4. Move existing enemies
        // 5. Check if any enemy is going of the screen
        this.enemies = this.enemies.filter(function(enemy) {
            enemy.updatePosition();
            return enemy.isInsideScreen();
        });


        // 2. CLEAR THE CANVAS
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 3. UPDATE THE CANVAS
        // Draw the floor/walls/platforms/coins/winObject
        this.floor.draw();      // floor & platforms drawn, but collision off
        this.coins.draw();
        this.winObject.draw();

         // Draw the player
        this.player.draw();

        // Draw the enemies
        this.enemies.forEach(function(enemy) {  
            enemy.draw();
        });

        // 4. TERMINATE LOOP IF GAME IS OVER
        if (!this.gameIsOver) {
            window.requestAnimationFrame(loop);
        }

        //  5. Update Game data/stats
        this.updateGameStats();	
        // ************************************update this later for coin counter


    }.bind(this);

    window.requestAnimationFrame(loop);
}

// end of loop function

Game.prototype.checkCollisions = function() {         // USE SIMILAR FOR COIN COLLISION + COUNTER

    this.enemies.forEach(function(enemy) {
        if ( this.player.didCollide(enemy) ) {

            this.player.removeLife();
            console.log('lives', this.player.lives);

            // move enemy off the screen to the bottom
            enemy.y = this.canvas.height + enemy.size; 

            if (this.player.lives === 0) {
                this.gameOver();
            }
        }
    }, this);

}

Game.prototype.updateGameStats = function() {

    this.coinCount += 1;                                // UPDATE FOR COIN COUNTER
    // this.coinsElement.innerHTML = this.coins;
}

Game.prototype.passGameOverCallback = function(gameOver) {
    // need to understand this better
    this.onGameOverCallback = gameOver;
}


Game.prototype.gameOver = function() {
    // `gameIsOver = true` stops the loop
    this.gameIsOver = true;

    console.log('GAME OVER');

    // call the gameOver function from `main` to show the Game Over Screen
    this.onGameOverCallback();
}

Game.prototype.removeGameScreen = function() {
    this.gameScreen.remove();   
}

