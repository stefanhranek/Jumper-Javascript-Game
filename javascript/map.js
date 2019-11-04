'use strict'

// ****** 1) Create an array of objects called walls each with their own x, y, width, and height
// ****** 2) Add a drawWalls() function which draws all of your wall objects.

/*
const wallsList = [

    // floor
    {
        x:10,
        y:10,
        w:10,
        h:10
    }

    // test block
    {
        x:100,
        y:50,
        w:10,
        h:10
    }
];
*/

function Floor(canvas) {

    this.canvas         = canvas;
    this.ctx            = canvas.getContext('2d'); // this.canvas?
    this.size           = 20;
    this.height         = 10;
    this.width          = canvas.width;
    this.x              = 0;                     
    this.y              = canvas.height-this.size*2;  

}

Floor.prototype.draw = function() {

    this.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    this.ctx.fillRect(
        this.x,
        this.y,
        this.width,
        this.height
    );

}








/*  Below might be too complex for me

    .   =   empty space
    #   =   walls
    @   =   start position
    o   =   coin
    +   =   lava

    |   =   vertical moving obstacle
    v   =   dripping lava






var simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

class Level {
    constructor(plan) {
        let rows = plan.trim().split("\n").map(l => [...l]);
        this.height = rows.length;
        this.width = rows[0].length;
        this.startActors = [];

        this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {
                let type = levelChars[ch];
                if (typeof type == "string") return type;
                this.startActors.push(
                    type.create(new Vec(x, y), ch));
                return "empty";
            });
        });
    }
}

*/