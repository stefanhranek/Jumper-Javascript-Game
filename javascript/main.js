'use strict'

function buildDom(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString;

    return div.children[0];
}

function main() {
    var splashScreen;

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

    function createGameScreen() {
        var gameScreen = buildDom(`
        <main class="game">
            <span>Coins: </span><span id="coins">0</span><span>/10</span>
            <section class="canvas-container">
            <canvas></canvas>
            </section>
        </main>
        `);

        document.body.appendChild(gameScreen);

        return gameScreen;
    }

    function startGame() {
        removeSplashScreen();

        var game = new Game();
        game.gameScreen = createGameScreen();

        game.start();
    }

    createSplashScreen();
    }

    window.onload = main;
    