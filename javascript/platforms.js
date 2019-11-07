function Platforms(canvas, height, width, x, y) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = height;
    this.width  = width;
    this.x      = x;
    this.y      = y;

}

Platforms.prototype.draw = function() {
    this.ctx.fillStyle = "rgba(87, 195, 209, .65)"; // for some reason this is changing COIN color too

    
    this.ctx.fillRect( 
        this.x,
        this.y,
        this.width,
        this.height)
}