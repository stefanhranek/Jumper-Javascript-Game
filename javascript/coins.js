function Coins(canvas, height, width, x, y) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d');
    this.height = height;
    this.width  = width;
    this.x      = x;
    this.y      = y;

}

Coins.prototype.draw = function() {
    var image = new Image();
    image.src = './images/8bitmariocoin.png';
    this.ctx.drawImage( 
        image,
        this.x,
        this.y,
        this.width,
        this.height)
}