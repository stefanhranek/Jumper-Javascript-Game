function Blocks(canvas, height, width, x, y) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = height;
    this.width  = width;
    this.x      = x;
    this.y      = y;

}

Blocks.prototype.draw = function() {
    this.ctx.fillStyle = "rgba(87, 195, 209, 0.65)"; 
    
    this.ctx.fillRect( 
        this.x,
        this.y,
        this.width,
        this.height)
}