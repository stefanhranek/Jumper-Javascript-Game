'use strict'



function buildDom(htmlString) {
    var div       = document.createElement('div');
    div.innerHTML = htmlString;

    return div.children[0];
}


// Runs on initial start and contains calls all other functions that manage the game
function main() {

    var game;
    var splashScreen;
    var gameOverScreen;
    var gameWinScreen;


    // splash screen creation
    // re-create h1h2 images to save in local folder
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
            <span id="coins">Coins: </span><span class="coins-update">0</span><span>/10</span>
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

    function createGameOverScreen(coins) {     // has SCORE as argument on example
        gameOverScreen = buildDom(`
        <main class ="gameOver">
        <h1 class="gO-title"><img src="/images/GameOverNoob.png" alt=""></h1>
        <h2 class="gO-tryAgain"><img src="/images/try-again.png" alt=""></h2>
        <div class="button-container"><button class="start-button">START GAME</button></div>
        </main>
        `); 

        var button = gameOverScreen.querySelector('button');
        button.addEventListener('click', startGame);

        var span = gameOverScreen.querySelector('span');    // change span
        // span.innerText = coins;     // coins --------- update later

        document.body.appendChild(gameOverScreen);
    }

    
    function removeGameOverScreen() {
        if (gameOverScreen) {
            gameOverScreen.remove();
        }
    }

        // game WIN screen creation

        // use later for updating coins on win screen
        //<div class="coin-statement-container>
        // <h3> You collected </h3> <
        // <p class="coins-update"> 0 </p>
        // <p> coins! AMAZING!!! </p>
        //</div>

        function createGameWinScreen(coins) {     // has SCORE as argument on example
            gameWinScreen = buildDom(`
            <main class ="gameWin">
            <h1 class="win-title">YOU WIN !!!</h1>
            <h2 class="congrats">Good Job !</h2>
            <h3 class="best"> You're the best ! </h3> 
            <h4 class="anything"> You can do anything ! </h4>
            <div class="button-container"><button class="start-button">START GAME</button></div>
            </main>
            `); 
    
            var button = gameWinScreen.querySelector('button');
            button.addEventListener('click', startGame);
    
            var coins = gameWinScreen.querySelector('.coins-update');    // change span
            // span.innerText = coins;     // coins --------- update later
    
            document.body.appendChild(gameWinScreen);
        }
    
        
        function removeGameWinScreen() {
            if (gameWinScreen) {
                gameWinScreen.remove();
            }
        }


    // setting the game state


    function startGame() {
        removeSplashScreen();
        removeGameOverScreen();
        removeGameWinScreen();

        game = new Game();
        game.gameScreen = createGameScreen();

        game.start();

        // end the game
            //lose
        game.passGameOverCallback(function() {
            gameOver(game.coins);  
        });
            //win
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
    // initialize Splash screen on initial start

    createSplashScreen();
    }

    window.addEventListener('load', main);

