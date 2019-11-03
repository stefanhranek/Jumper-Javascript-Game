'use strict'


// Creates DOM elements from a string representation
function buildDom(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString;

    return div.children[0];
}


// Runs on initial start and contains calls all other functions that manage the game
function main() {
    var game;
    var splashScreen;
    var gameOverScreen;

    // splash screen creation

    function createSplashScreen() {
        splashScreen = buildDom(`
        <main class ="splash">
        <h1 class="title"><img src="https://fontmeme.com/permalink/191102/0a2f7a1615284af7dc53275c43ec1556.png" alt="pixel-fonts" border="0"></a></h1>
        <h2 class="how-to-play"><img src="https://fontmeme.com/permalink/191102/339920137fe87f8e521325a79a4d7402.png" alt="pixel-fonts" border="0"></a></h2>
        <p class="controls"><img src="/images/arrow-keys.png"></p>
        <p class="controls-text"><img src="/images/controls-text.png" alt=""></p>
        <div class="button-container"><button class="start-button">START GAME</button></div>
        </main>
        `);

        document.body.appendChild(splashScreen);

        var startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', function() {
        startGame();
        });
    }


    function removeSplashScreen() {
        splashScreen.remove();
    }

    // game screen creation

    function createGameScreen() {
        var gameScreen = buildDom(`
        <main class="game">
            <div class ="game-dom-container">
            <span id="coins">Coins: </span><span id="coins">0</span><span>/10</span>
            </div>
            <section class="canvas-container">
            <canvas></canvas>
            </section>
        </main>
        `);

        document.body.appendChild(gameScreen);

        return gameScreen;
    }

    // game screen removal

    function removeGameScreen() {
        game.removeGameScreen();
    }


    // game over screen creation

    function createGameOverScreen() {
        gameOverScreen = buildDom(`
        <main>
            <h1>Game over</h1>
            <p>Your score: <span></span></p>
            <button>Restart</button>
        </main>
        `);

        var button = gameOverScreen.querySelector('button');
        button.addEventListener('click', startGame);

        var span = gameOverScreen.querySelector('span');
        span.innerText = coins;

        document.body.appendChild(gameOverScreen);
    }

    
    function removeGameOverScreen() {
        if (gameOverScreen !== undefined) {
            gameOverScreen.remove();
        }
    }


    // setting the game state


    function startGame() {
        removeSplashScreen();
        // later add clearing of the gameOverScreen
        removeGameOverScreen();

        game = new Game();
        game.gameScreen = createGameScreen();

        game.start();
        // end the game
        game.passGameOverCallback( function() {
            gameOver(game.score);  // score may need to be changed or removed ***
        });
    }


    function gameOver(score) {
        
        removeGameScreen();
        createGameOverScreen(score); // added score as argument, may need to remove or change *******
    }

    // initialize Splash screen on initial start

    createSplashScreen();
    }

    window.addEventListener('load', main);
