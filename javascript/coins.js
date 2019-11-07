function Coins(canvas, height, width, x, y) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = height;
    this.width  = width;
    this.x      = x;
    this.y      = y;

}

Coins.prototype.draw = function() {
    this.ctx.fillStyle = 'gold';    // COIN color is being changed by the platforms draw prototype
    this.ctx.fillRect( 
        this.x,
        this.y,
        this.width,
        this.height)
}