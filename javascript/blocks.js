class Blocks {
    constructor(canvas, height, width, x, y) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.height = height;
        this.width  = width;
        this.x      = x;
        this.y      = y;
    };

    draw() {
        var floorImage = new Image();
        floorImage.src = './images/ice-platform.png';
        this.ctx.drawImage( 
            floorImage,
            this.x,
            this.y,
            this.width,
            this.height)
    };
};
