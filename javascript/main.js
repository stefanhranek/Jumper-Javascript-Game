"use strict";

const audio = document.querySelector("audio");

function buildDom(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0];
}

// Runs on initial start and contains calls all other functions that manage the game
function main() {
  var game;
  var splashScreen;
  var gameOverScreen;
  var gameWinScreen;

  function createSplashScreen() {
    splashScreen = buildDom(`
        <main class ="splash">
        <h1 class="title"><img src="https://fontmeme.com/permalink/191102/0a2f7a1615284af7dc53275c43ec1556.png" alt="pixel-fonts" border="0"></a></h1>
        <h2 class="how-to-play"><img src="https://fontmeme.com/permalink/191102/339920137fe87f8e521325a79a4d7402.png" alt="pixel-fonts" border="0"></a></h2>
        <p class="controls"><img src="./images/arrow-keys.png"></p>
        <p class="controls-text"><img src="./images/controls-text.png" alt=""></p>
        <div class="button-container"><button class="start-button">START GAME</button></div>
        <h3 class = "copyright"><img src="./images/copyright.png"></h3>
        <h4 class = "all-rights"><img src="./images/rightsreserved.png"></h4>
        <h5 class = "stefco"><img src="./images/stefcoRed.png"></h5>
        </main>
        `);

    document.body.appendChild(splashScreen);

    var startButton = splashScreen.querySelector("button");
    startButton.addEventListener("click", function() {
      startGame();
    });
  }

  function removeSplashScreen() {
    splashScreen.remove();
  }

  // GAME SCREEN CREATION

  function createGameScreen() {
    var gameScreen = buildDom(`
        <main class="game">
            <div class ="dragonball-container">
            </div>

            <div class ="game-dom-container">
                <section class="flex">
                    <span id="dragonballs">Dragon Balls: </span><span class="dragonballs-update">0</span><span>/7</span>
                </section>
                <section class="flex">
                    <span id="coins">Coins: </span><span class="coins-update">0</span><span>/20</span>
                </section>
                <section class="flex">
                    <span id="ramen">Ramen: </span><span class="ramen-update">0</span><span>/1</span>
                </section>
                <section class="flex">
                    <span id="lives">Lives: </span><span class="lives-update">3</span><span></span>
                    </section>
                    <div class ="bottom-game-text">
                      <p>Collect all dragon balls, then bring them to Master Roshi to win.</p>
                    </div>
            </div>
            <section class="canvas-container">
            <canvas></canvas>
            </section>
        </main>
        `);

    document.body.appendChild(gameScreen);

    return gameScreen;
  }

  // GAME SCREEN REMOVAL

  function removeGameScreen() {
    game.removeGameScreen();
  }

  // game over screen creation

  function createGameOverScreen(coins) {
    gameOverScreen = buildDom(`
        <main class ="gameOver">
        <h1 class="gO-title"><img src="./images/GameOverNoob.png" alt=""></h1>
        <h2 class="gO-tryAgain"><img src="./images/try-again.png" alt=""></h2>
        <div class="button-container"><button class="start-button">ABSOLUTELY</button></div>
        </main>
        `);

    var button = gameOverScreen.querySelector("button");
    button.addEventListener("click", startGame);

    var span = gameOverScreen.querySelector("span"); // REVISE LATER FOR COIN WIN SCREEN
    // span.innerText = coins;     // coins --------- update later

    document.body.appendChild(gameOverScreen);
  }

  function removeGameOverScreen() {
    if (gameOverScreen) {
      gameOverScreen.remove();
    }
  }

  // WIN SCREEN CREATION

  // use later for updating coins on win screen
  //<div class="coin-statement-container>
  // <h3> You collected </h3> <
  // <p class="coins-update"> 0 </p>
  // <p> coins! AMAZING!!! </p>
  //</div>

  function createGameWinScreen(coins) {
    gameWinScreen = buildDom(`
        <main class ="gameWin">
        <h1 class="win-title">YOU WIN !!!</h1>
        <h2 class="congrats">Good Job !!</h2>
        <h6 class="thanks">Thank you for playing !</h6> 
        <h5 class="mushroom"><img src="images/dragonball.png" alt=""></h5>
        <div class="button-container"><button class="start-button">PLAY AGAIN?</button></div>
        </main>
        `);

    var button = gameWinScreen.querySelector("button");
    button.addEventListener("click", startGame);

    var coins = gameWinScreen.querySelector(".coins-update"); // change span
    // span.innerText = coins;     // coins --------- update later

    document.body.appendChild(gameWinScreen);
  }

  function removeGameWinScreen() {
    if (gameWinScreen) {
      gameWinScreen.remove();
    }
  }

  // GAME INITIATION

  function startGame() {
    removeSplashScreen();
    removeGameOverScreen();
    removeGameWinScreen();

    game = new Game();
    game.gameScreen = createGameScreen();
    game.start();

    // END GAME
    //lose
    game.passGameOverCallback(function() {
      gameOver(game.coins);
    });
    // WIN
    game.passGameWinCallback(function() {
      gameWin(game.coins);
    });
  }

  function gameOver(coins) {
    removeGameScreen();
    createGameOverScreen(coins);
  }

  function gameWin(coins) {
    removeGameScreen();
    createGameWinScreen(coins);
  }

  //  INITIALIZE SPLASH SCREEN ON START
  createSplashScreen();
}

window.addEventListener("load", main);
