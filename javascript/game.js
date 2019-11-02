'use strict'

function Game() {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
}

Game.prototype.start = function() {
    // Here... get canvas element, create ctx, save canvas & ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    // Setting the canvas to be the same as the viewport size
    this.containerWidth = this.canvasContainer.offsetWidth; // look back at 'offset' functionality
    this.containerHeight = this.canvasContainer.offsetHeight; // same as above
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    // Creating new player for the start of the game
    this.player = new Player(this.canvas);

    // Add event listener for keydown movements (OPTIONAL)
        // ex) "PRESS SPACE BAR TO START"

    // Start the game loop

    this.startLoop();
}

Game.prototype.startLoop = function() {
    var loop = function() {
        console.log('in loop');

        this.player.draw();

        window.requestAnimationFrame(loop);
    }.bind(this);

    window.requestAnimationFrame(loop);
}

    // further inspect the above startLoop function
    // i don't quite understand it at the moment