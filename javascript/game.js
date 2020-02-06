"use strict";

var coinSound;
var snowSound;

function preload() {
  coinSound = loadSound("./sound/retroCoinSound.wav");
  snowSound = loadSound("./sound/snowHit.wav");
}

function Game() {
  this.canvas = null;
  this.ctx = null;
  this.enemies = [];
  this.shurikens = [];
  this.platforms = mapInfo;
  this.coins = coinInfo;
  this.blocks = blockInfo;
  this.dragonballs = dragonballInfo;
  this.roshi = null;
  this.speechBubble = null;
  this.moon = null;
  this.ramen = null;
  this.player = null;
  this.gameIsOver = false;
  this.gameWin = false;
  this.gameScreen = null;
  this.gameWinScreen = null;
  this.coinCount = 0;
  this.dragonballCount = 0;
  this.ramenCount = 0;
  this.livesCount = 0;
  this.floorObj = null;
  this.backgroundMusic = undefined;
  this.moonMusic = undefined;
  this.backgroundSprite = undefined;
  this.gameWinSound = undefined;
  this.playerImage = undefined;
}

Game.prototype.start = function() {
  this.backgroundMusic = new Audio();
  this.backgroundMusic.src = "./sound/narutoBackround.mp3";

  this.moonMusic = new Audio();
  this.moonMusic.src = "./sound/shenronMusic.mp3";

  this.gameWinSound = new Audio();
  this.gameWinSound.src = "./sound/winSoundFF.mp3";

  this.jumpSound = new Audio();
  this.jumpSound.src = "./sound/jump.wav";

  this.ouchSound = new Audio();
  this.ouchSound.src = "./sound/ouch.wav";

  this.dragonballSound = new Audio();
  this.dragonballSound.src = "./sound/special.wav";

  this.soupSound = new Audio();
  this.soupSound.src = "./sound/soup1.mp3";

  // Get canvas element, create ctx, save canvas & ctx in the game object
  this.canvasContainer = document.querySelector(".canvas-container");
  this.canvas = document.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");

  // COINS COLLECTED REFERENCE
  this.coinsElement = this.gameScreen.querySelector(".coins-update");
  this.dragonballsElement = this.gameScreen.querySelector(
    ".dragonballs-update"
  );
  this.ramenElement = this.gameScreen.querySelector(".ramen-update");
  this.livesElement = this.gameScreen.querySelector(".lives-update");

  // Setting the canvas size (ctx)
  this.containerWidth = 2400;
  this.containerHeight = 1200;
  this.canvas.setAttribute("width", this.containerWidth);
  this.canvas.setAttribute("height", this.containerHeight);

  // Draw walls & coins & dragonballImage & player
  this.moon = new Moon(this.canvas);
  this.ramen = new Ramen(this.canvas);
  this.roshi = new Roshi(this.canvas);
  this.speechBubble = new Speech(this.canvas);
  this.player = new Player(this.canvas, 3);
  this.playerImage = this.player.playerImage;
  this.livesCount = this.player.lives;

  this.floorObj = new Floor(this.canvas);
  this.drawPlatforms = this.platforms.map(function(platformData) {
    return new Platforms(
      this.canvas,
      platformData.height,
      platformData.width,
      platformData.x,
      platformData.y
    );
  }, this);
  this.drawCoins = this.coins.map(function(coinData) {
    return new Coins(
      this.canvas,
      coinData.height,
      coinData.width,
      coinData.x,
      coinData.y
    );
  }, this);
  this.drawDragonballs = this.dragonballs.map(function(dragonballData) {
    return new Dragonballs(
      this.canvas,
      dragonballData.height,
      dragonballData.width,
      dragonballData.x,
      dragonballData.y
    );
  }, this);
  this.drawBlocks = this.blocks.map(function(blockData) {
    return new Blocks(
      this.canvas,
      blockData.height,
      blockData.width,
      blockData.x,
      blockData.y
    );
  }, this);

  ////  CONTROLLER  //////////////////////////

  // Add event listener for keydown movements
  this.handleKeyDown = function(event) {
    if (event.keyCode === 38) {
      this.player.directionY = -1;
      this.jumpSound.play();
      // jumpSound.pause();
      // jumpSound.currentTime = 0;
      // jumpSound.play();
    } else if (event.keyCode === 37) {
      this.player.directionX = -1;
    } else if (event.keyCode === 39) {
      this.player.directionX = 1;
    }
  };

  this.handleKeyUp = function(event) {
    if (event.keyCode === 38) {
      this.player.directionY = 1;
    } else if (event.keyCode === 37 || event.keyCode === 39) {
      this.player.directionX = 0;
    }
  };

  document.body.addEventListener("keydown", this.handleKeyDown.bind(this));
  document.body.addEventListener("keyup", this.handleKeyUp.bind(this));

  // Add 'keyup; listener to improve movement; running & jumping at the same time

  ////  CONTROLLER END  /////////////////////////////

  this.backgroundMusic.play();

  // Start the game loop
  this.startLoop();
};

// LOOP START ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Game.prototype.startLoop = function() {
  var loop = function() {
    // Random enemies
    if (Math.random() > 0.98) {
      var randomX = this.canvas.width * Math.random();
      this.enemies.push(new Enemy(this.canvas, randomX, 8));

      var randomY = this.canvas.height * Math.random();
      this.shurikens.push(new Shuriken(this.canvas, randomY, 20));
    }

    // Check platform collisions

    mapInfo.forEach(function(platforms) {
      var playerTop = this.player.y - this.player.size / 2;
      var playerLeft = this.player.x - this.player.size / 2;
      var playerRight = this.player.x + this.player.size / 2;
      var playerBottom = this.player.y + 16 + this.player.size / 2;
      var platformTop = platforms.y - platforms.height / 2;
      var platformLeft = platforms.x - platforms.width / 2;
      var platformRight = platforms.x + platforms.width / 2;
      var platformBottom = platforms.y + platforms.height / 2 - 80;
      var crossTop = playerBottom >= platformTop;
      var crossLeft = playerLeft <= platformRight;
      var crossRight = playerRight >= platformLeft;
      var crossBottom = playerTop <= platformBottom;

      if (crossTop && crossRight && crossLeft && crossBottom) {
        this.player.y = platformTop - 69;
      }
    }, this);

    // Check block collision

    blockInfo.forEach(function(blocks) {
      var playerTop = this.player.y - this.player.size / 2;
      var playerLeft = this.player.x - this.player.size / 2;
      var playerRight = this.player.x + this.player.size / 2;
      var playerBottom = this.player.y + this.player.size / 2;
      var blockTop = blocks.y - blocks.height / 2;
      var blockLeft = blocks.x - blocks.width / 2;
      var blockRight = blocks.x + blocks.width / 2;
      var blockBottom = blocks.y + blocks.height / 2;
      var crossTop = playerBottom >= blockTop;
      var crossLeft = playerLeft <= blockRight;
      var crossRight = playerRight >= blockLeft;
      var crossBottom = playerTop <= blockBottom;

      if (crossTop && crossRight && crossLeft && crossBottom) {
        this.player.y = blockTop - 50;
      }
    }, this);

    // Check dragonball collisions

    this.drawDragonballs.forEach(function(dragonballs) {
      var playerTop = this.player.y - this.player.size / 2;
      var playerLeft = this.player.x - this.player.size / 2;
      var playerRight = this.player.x + this.player.size / 2;
      var playerBottom = this.player.y + this.player.size / 2;
      var dragonballsTop = dragonballs.y - dragonballs.height / 2;
      var dragonballsLeft = dragonballs.x - dragonballs.width / 2;
      var dragonballsRight = dragonballs.x + dragonballs.width / 2;
      var dragonballsBottom = dragonballs.y + dragonballs.height / 2;
      var crossTop = playerBottom >= dragonballsTop;
      var crossLeft = playerLeft <= dragonballsRight;
      var crossRight = playerRight >= dragonballsLeft;
      var crossBottom = playerTop <= dragonballsBottom;

      if (crossTop && crossRight && crossLeft && crossBottom) {
        this.dragonballSound.volume = 0.6;
        this.dragonballSound.play();

        dragonballs.y = 3001;
        this.dragonballCount += 1;
        //   this.updateGameStats();
      }
    }, this);

    // Check coin collisions

    this.drawCoins.forEach(function(coins) {
      var playerTop = this.player.y - this.player.size / 2;
      var playerLeft = this.player.x - this.player.size / 2;
      var playerRight = this.player.x + this.player.size / 2;
      var playerBottom = this.player.y + this.player.size / 2;
      var coinsTop = coins.y - coins.height / 2;
      var coinsLeft = coins.x - coins.width / 2;
      var coinsRight = coins.x + coins.width / 2;
      var coinsBottom = coins.y + coins.height / 2;
      var crossTop = playerBottom >= coinsTop;
      var crossLeft = playerLeft <= coinsRight;
      var crossRight = playerRight >= coinsLeft;
      var crossBottom = playerTop <= coinsBottom;

      if (crossTop && crossRight && crossLeft && crossBottom) {
        coinSound.play();
        coins.y = 3001;
        this.coinCount += 1;
      }
    }, this);

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

    this.shurikens = this.shurikens.filter(function(shuriken) {
      shuriken.updatePosition();
      return shuriken.isInsideScreen();
    });

    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update the canvas: floor - walls - platforms - coins - winObject
    if (this.dragonballsElement.innerHTML === "7") {
      this.backgroundMusic.pause();
      this.moon.draw();
      this.moonMusic.play();
    }

    if (this.dragonballsElement.innerHTML === "7" && this.gameWin) {
      //THIS STOPS MUSIC ONCE GAME IS WON & COUNTER IS 7
      this.moonMusic.pause();
      //   this.dragonballsElement.innerHTML = "GG";
    }

    if (this.dragonballsElement.innerHTML === "7" && this.gameIsOver) {
      //THIS STOPS MUSIC ONCE GAME IS WON & COUNTER IS 7
      this.moonMusic.pause();
    }

    this.ramen.draw();
    this.floorObj.draw();
    this.roshi.draw();
    this.speechBubble.draw();

    // Draw the player
    this.player.draw();
    // this.player.updateGravity();

    this.player.movePlayer(); ///////////////////////////////
    // Draw the enemies
    this.enemies.forEach(function(enemy) {
      enemy.draw();
    });

    this.shurikens.forEach(function(shuriken) {
      shuriken.draw();
    });

    // Draw the platforms
    this.drawPlatforms.forEach(function(onePlatform) {
      onePlatform.draw();
    });

    // Draw the blocks
    this.drawBlocks.forEach(function(oneBlock) {
      oneBlock.draw();
    });

    // Draw the coins  //////////////////////////////////////
    this.drawCoins.forEach(function(oneCoin) {
      oneCoin.draw();
    });

    this.drawDragonballs.forEach(function(oneDragonball) {
      oneDragonball.draw();
    });

    // Terminate loop when game 'WIN' or 'LOSE'
    if (!this.gameIsOver && !this.gameWin) {
      window.requestAnimationFrame(loop);
    }

    // Update Game data/stats
    this.updateGameStats();
  }.bind(this);

  window.requestAnimationFrame(loop);
};

// LOOP END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Game.prototype.checkCollisions = function() {
  if (this.player.didCollideRamen(this.ramen)) {
    this.soupSound.play();

    this.ramen.y = 3001;
    this.ramenCount += 1;
    this.playerImage.src = "./images/gokuSS.png";
    this.player.size = 85;
  }

  if (this.player.didCollideWin(this.roshi)) {
    this.youWin();

    this.gameWinSound.play();
    this.backgroundMusic.pause();
    this.moonMusic.pause();
  } // 1st checks win collision
  if (!this.player.didCollideWin(this.roshi)) {
    this.enemies.forEach(function(enemy) {
      // 2nd checks lose collision
      if (this.player.didCollideEnemy(enemy)) {
        snowSound.play();
        this.livesCount--;
        this.player.removeLife();

        // move enemy off the screen to the bottom
        enemy.y = this.canvas.height + enemy.size;

        if (this.player.lives === 0) {
          this.gameOver();
          this.backgroundMusic.pause();
          this.moonMusic.pause();
        }
      }
    }, this);
  }
  if (!this.player.didCollideWin(this.roshi)) {
    this.shurikens.forEach(function(shuriken) {
      // 2nd checks lose collision
      if (this.player.didCollideShuriken(shuriken)) {
        this.ouchSound.play();
        this.livesCount--;

        this.player.removeLife();

        // move enemy off the screen to the bottom
        shuriken.x = this.canvas.width - shuriken.sizeX;

        if (this.player.lives === 0) {
          this.gameOver();
          this.backgroundMusic.pause();
          this.moonMusic.pause();
        }
      }
    }, this);
  }
};

Game.prototype.updateGameStats = function() {
  this.coinsElement.innerHTML = this.coinCount;
  this.dragonballsElement.innerHTML = this.dragonballCount;
  this.ramenElement.innerHTML = this.ramenCount;
  this.livesElement.innerHTML = this.livesCount;

  // this.coinsFinish.innerHTML = this.coinCount; //////////////// for coin update on game win screen
};

Game.prototype.passGameOverCallback = function(gameOver) {
  this.onGameOverCallback = gameOver;
};

Game.prototype.passGameWinCallback = function(youWin) {
  this.moonMusic.pause();
  this.onYouWinCallback = youWin;
};

Game.prototype.gameOver = function() {
  // `gameIsOver = true` stops the loop
  this.gameIsOver = true;

  this.moonMusic.pause();

  // call the gameOver function from `main` to show the Game Over Screen
  this.onGameOverCallback();
};

Game.prototype.youWin = function() {
  // `gameIsOver = true` stops the loop
  this.gameWin = true;

  this.moonMusic.pause();

  // call the gameOver function from `main` to show the Game Over Screen
  this.onYouWinCallback();
};

Game.prototype.removeGameScreen = function() {
  this.gameScreen.remove();
};

setInterval(this.movePlayer, 10);
