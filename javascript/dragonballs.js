class Dragonballs {
    constructor(canvas, height, width, x, y) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext('2d');
        this.height = height;
        this.width  = width;
        this.x      = x;
        this.y      = y;
    }

    draw() {
        var ballImage = new Image();
        ballImage.src = './images/dragonball.png';
        this.ctx.drawImage( 
            ballImage,
            this.x,
            this.y,
            this.width,
            this.height)
    }
}