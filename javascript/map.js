'use strict'

// ****** 1) Create an array of objects called walls each with their own x, y, width, and height
// ****** 2) Add a drawWalls() function which draws all of your wall objects.


var floor, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17;
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s9;


function Floor(canvas) {

    // platforms start in ascending order ~ floor to top
    // currently incrementing each height by 100 
    // currently incrementing each distance by 300

    floor = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : canvas.width,
        x              : 0,                     
        y              : canvas.height-50
        // can shorten by spreading?
    }

    w2 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,  // 100 width for platforms
        x              : canvas.width-100,                     
        y              : canvas.height-150
    }

    w3 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-400,                     
        y              : canvas.height-250
    }

    w4 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-700,                    
        y              : canvas.height-350
    }

    w5 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-1000,                     
        y              : canvas.height-450
    }

    w6 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-1300,                   
        y              : canvas.height-550
    }

    w7 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-1600,                    
        y              : canvas.height-650
    }

    
    w8 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-1900,                
        y              : canvas.height-750
    }
    
    s1 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-2200,                    
        y              : canvas.height-850
    }

    s2 = {              //  COIN PLATFORM
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-2350,                    
        y              : canvas.height-350
    }

    s3 = {              //  COIN PLATFORM
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-2200,                    
        y              : canvas.height-1000
    }

    w9 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-1600,               
        y              : canvas.height-850
    }

    w10 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-1300,                     
        y              : canvas.height-950
    }

    w11 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 100,
        x              : canvas.width-1000,                
        y              : canvas.height-750
    }

    w12 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 50,
        x              : canvas.width-700,                
        y              : canvas.height-650
    }

    w13 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 50,
        x              : canvas.width-700,                
        y              : canvas.height-850
    }

    s4 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 50,
        x              : canvas.width-700,                
        y              : canvas.height-1050
    }

    w14 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 10,
        x              : canvas.width-400,                
        y              : canvas.height-950
    }

    // w15 = {
    //     canvas         : canvas,
    //     ctx            : canvas.getContext('2d'),
    //     height         : 10,
    //     width          : 5,
    //     x              : canvas.width-250,                
    //     y              : canvas.height-950
    // }

    w16 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 200,
        x              : canvas.width-100,                
        y              : canvas.height-950
    }

    w17 = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 10,
        width          : 200,
        x              : canvas.width-100,                
        y              : canvas.height-750
    }
}

Floor.prototype.draw = function() {

    floor.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    floor.ctx.fillRect(
        floor.x,
        floor.y,
        floor.width,
        floor.height
    );

    w2.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w2.ctx.fillRect(
        w2.x,
        w2.y,
        w2.width,
        w2.height    
    );
    
    w3.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w3.ctx.fillRect(
        w3.x,
        w3.y,
        w3.width,
        w3.height    
    );
        
    w4.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w4.ctx.fillRect(
        w4.x,
        w4.y,
        w4.width,
        w4.height    
    );
        
    w5.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w5.ctx.fillRect(
        w5.x,
        w5.y,
        w5.width,
        w5.height    
    );
        
    w6.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w6.ctx.fillRect(
        w6.x,
        w6.y,
        w6.width,
        w6.height    
    );
        
    w7.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w7.ctx.fillRect(
        w7.x,
        w7.y,
        w7.width,
        w7.height    
    );
        
    w8.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w8.ctx.fillRect(
        w8.x,
        w8.y,
        w8.width,
        w8.height    
    );
        
    w9.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w9.ctx.fillRect(
        w9.x,
        w9.y,
        w9.width,
        w9.height    
    );
        
    w10.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w10.ctx.fillRect(
        w10.x,
        w10.y,
        w10.width,
        w10.height    
    );

    w11.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w11.ctx.fillRect(
        w11.x,
        w11.y,
        w11.width,
        w11.height    
    );

    w12.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w12.ctx.fillRect(
        w12.x,
        w12.y,
        w12.width,
        w12.height    
    );

    w13.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w13.ctx.fillRect(
        w13.x,
        w13.y,
        w13.width,
        w13.height    
    );

    w14.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w14.ctx.fillRect(
        w14.x,
        w14.y,
        w14.width,
        w14.height    
    );

    // w15.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    // w15.ctx.fillRect(
    //     w15.x,
    //     w15.y,
    //     w15.width,
    //     w15.height    
    // );

    w16.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w16.ctx.fillRect(
        w16.x,
        w16.y,
        w16.width,
        w16.height    
    );

    w17.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    w17.ctx.fillRect(
        w17.x,
        w17.y,
        w17.width,
        w17.height    
    );

    s1.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    s1.ctx.fillRect(
        s1.x,
        s1.y,
        s1.width,
        s1.height    
    );
        
    s2.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    s2.ctx.fillRect(
        s2.x,
        s2.y,
        s2.width,
        s2.height    
    );
            
    s3.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    s3.ctx.fillRect(
        s3.x,
        s3.y,
        s3.width,
        s3.height    
    );

    s4.ctx.fillStyle = "rgba(87, 195, 209, 0.65)";
    s4.ctx.fillRect(
        s4.x,
        s4.y,
        s4.width,
        s4.height    
    );
}


////////////////// COINS ///////////////////////


var c1, c2, c3 ,c4 ,c5, c6, c7, c8, c9, c10;

function Coins(canvas) {

    c1 = {       
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 30,
        width          : 15,
        x              : canvas.width-50,                    
        y              : canvas.height-110
    }

    c2 = {       
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 30,
        width          : 15,
        x              : canvas.width-2305,                    
        y              : canvas.height-410
    }

    c3 = {            
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 30,
        width          : 15,
        x              : canvas.width-2156,                    
        y              : canvas.height-1056
    }

    c4 = {        
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 30,
        width          : 15,
        x              : canvas.width-685,                
        y              : canvas.height-1108
    }

    c5 = {      
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 30,
        width          : 15,
        x              : canvas.width-685,                
        y              : canvas.height-908
    }

    c6 = {       
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 30,
        width          : 15,
        x              : canvas.width-685,                
        y              : canvas.height-706
    }

    c7 = {        
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 30,
        width          : 15,
        x              : canvas.width-1600,                
        y              : canvas.height-210
    }

    c8 = {        
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 30,
        width          : 15,
        x              : canvas.width-1400,                
        y              : canvas.height-210
    }

    c9 = {        
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 30,
        width          : 15,
        x              : canvas.width-1200,                
        y              : canvas.height-210
    }

    c10 = {        
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 30,
        width          : 15,
        x              : canvas.width-60,              
        y              : canvas.height-1035
    }

}

Coins.prototype.draw = function() {

    c1.ctx.fillStyle = "yellow";
    c1.ctx.fillRect(
        c1.x,
        c1.y,
        c1.width,
        c1.height    
    );
        
    c2.ctx.fillStyle = "yellow";
    c2.ctx.fillRect(
        c2.x,
        c2.y,
        c2.width,
        c2.height    
    );
            
    c3.ctx.fillStyle = "gold";
    c3.ctx.fillRect(
        c3.x,
        c3.y,
        c3.width,
        c3.height    
    );

    c4.ctx.fillStyle = "gold";
    c4.ctx.fillRect(
        c4.x,
        c4.y,
        c4.width,
        c4.height    
    );

    c5.ctx.fillStyle = "gold";
    c5.ctx.fillRect(
        c5.x,
        c5.y,
        c5.width,
        c5.height    
    );

    c6.ctx.fillStyle = "gold";
    c6.ctx.fillRect(
        c6.x,
        c6.y,
        c6.width,
        c6.height    
    );

    c7.ctx.fillStyle = "gold";
    c7.ctx.fillRect(
        c7.x,
        c7.y,
        c7.width,
        c7.height    
    );

    c8.ctx.fillStyle = "gold";
    c8.ctx.fillRect(
        c8.x,
        c8.y,
        c8.width,
        c8.height    
    );

    c9.ctx.fillStyle = "gold";
    c9.ctx.fillRect(
        c9.x,
        c9.y,
        c9.width,
        c9.height    
    );

    c10.ctx.fillStyle = "gold";
    c10.ctx.fillRect(
        c10.x,
        c10.y,
        c10.width,
        c10.height    
    );
}


// WIN OBJECT

var win;

function WinObject(canvas) {

    win = {        
        canvas         : canvas,
        ctx            : canvas.getContext('2d'),
        height         : 30,
        width          : 15,
        x              : canvas.width-60,              
        y              : canvas.height-835
    };

}

WinObject.prototype.draw = function() {

    win.ctx.fillStyle = "cyan";
    win.ctx.fillRect(
        win.x,
        win.y,
        win.width,
        win.height    
    );

}





/*  Below map drawing might be too complex for me
    although I would like to learn this method

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