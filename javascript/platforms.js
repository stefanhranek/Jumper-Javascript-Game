function Platforms(canvas, height, width, x, y) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = height;
    this.width  = width;
    this.x      = x;
    this.y      = y;

}

Platforms.prototype.draw = function() {
    this.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";


    console.log(this.x,
        this.y,
        this.width,
        this.height);
    
    this.ctx.fillRect( 
        this.x,
        this.y,
        this.width,
        this.height)
}