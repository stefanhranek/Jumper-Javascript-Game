'use strict'

var blockInfo = [

    {
        height         : 60,
        width          : 60,
        x              : 778,                     
        y              : 1100 // floor          start of 4 floor blocks
    },
    
    {
        height         : 60,
        width          : 60,
        x              : 978,               // tall middle block      
        y              : 1040
    },

    {
        height         : 60,
        width          : 60,
        x              : 978,               // tall middle block      *bottom*
        y              : 1100
    },
    
    {
        height         : 60,
        width          : 60,
        x              : 1178,                     
        y              : 1100               //// end of 4 floor blocks
    }

]




var floor;
var mapInfo  = [
    
    
    {
        height         : 10,
        width          : 100,  // 100 width for platforms
        x              : 203,                     
        y              : 250
    },
    
    {
        height         : 10,
        width          : 100,
        x              : 285,                     
        y              : 630
    },
    
    {
        height         : 10,
        width          : 100,
        x              : 500,                    
        y              : 350
    },
    
    {
        height         : 10,
        width          : 100,
        x              : 750,                     
        y              : 450
    },
    
    {
        height         : 10,
        width          : 100,
        x              : 1000,                   
        y              : 550
    },
    
    {
        height         : 10,
        width          : 100,
        x              : 1000,                    
        y              : 300
    },
    
    
    {
        height         : 10,
        width          : 100,
        x              : 1250,                
        y              : 650
    },
    
    {
        height         : 10,
        width          : 100,
        x              : 2030,                    
        y              : 960
    },,
    
    {              
        height         : 10,
        width          : 100,
        x              : 52,                    
        y              : 900
    },
    
    {             
        height         : 10,
        width          : 100,
        x              : 2300,    // right wall                
        y              : 1050
    },
    
    {
        height         : 10,
        width          : 100,
        x              : 1770,               
        y              : 850
    },
    
    {
        height         : 10,
        width          : 100,
        x              : 1300,                     
        y              : 300
    },
    
    {
        height         : 10,
        width          : 100,
        x              : 1500,                
        y              : 750
    },
    
    {
        height         : 10,
        width          : 50,    // 3 stacks
        x              : 1698,                
        y              : 175
    },
    
    {
        height         : 10,
        width          : 50,    // 3 stacks
        x              : 1698,                
        y              : 375
    },
    
    {
        height         : 10,
        width          : 50,
        x              : 1698,      //     3 stacks     
        y              : 575
    },
    
    {
        height         : 10,
        width          : 100,
        x              : 1950,                
        y              : 350
    },
    
    //  {
    //     canvas         : canvas,
    //     ctx            : canvas.getContext('2d'),
    //     height         : 10,
    //     width          : 5,
    //     x              : canvas.width-250,                
    //     y              : canvas.height-950
    // },
    
    {
        height         : 10,
        width          : 100,
        x              : 2290,                
        y              : 450
    },
    
    {
    
        height         : 10,
        width          : 100,
        x              : 2290,                
        y              : 250
    }
];

        /////////////////////////////////////
      //////////////// COINS //////////////
    /////////////////////////////////////

var coinInfo = [

    {       
        height         : 30,
        width          : 15,
        x              : 2322,                    
        y              : 155
    },

    {       
        height         : 30,
        width          : 15,
        x              : 242,                    
        y              : 165
    },

    {            
        height         : 30,
        width          : 15,
        x              : 2340,                    
        y              : 1090
    },

    {        
        height         : 30,
        width          : 15,
        x              : 1714,                
        y              : 105
    },

    {      
        height         : 30,
        width          : 15,
        x              : 1714,                
        y              : 305
    },

    {       
        height         : 30,
        width          : 15,
        x              : 1714,                
        y              : 505
    },

    {        
        height         : 30,
        width          : 15,
        x              : 1200,                
        y              : 1025       // 3 horizontal
    },

    {        
        height         : 30,
        width          : 15,
        x              : 1000,                
        y              : 930        // middle of 3 coins (horizontal)
    },

    {        
        height         : 30,
        width          : 15,
        x              : 800,                
        y              : 1025   //3 horizontal
    },

    {        
        height         : 30,
        width          : 15,
        x              : 92,              
        y              : 805
    }

];


        //////////////////////////////
      ///////// WIN OBJECT /////////
    //////////////////////////////


function WinObject(canvas) {

        this.canvas         = canvas;
        this.ctx            = canvas.getContext('2d');
        this.height         = 30;
        this.width          = 15;
        this.x              = 2325;             
        this.y              = 355;
    };


WinObject.prototype.draw = function() {

    this.ctx.fillStyle = "cyan";
    this.ctx.fillRect(
        this.x,
        this.y,
        this.width,
        this.height    
    );

}


 /// FLOOR

function Floor(canvas) {

    floor = {
        canvas         : canvas,
        ctx            : canvas.getContext('2d'), 
        height         : 30,
        width          : canvas.width,
        x              : 0,                     
        y              : canvas.height-50
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
}