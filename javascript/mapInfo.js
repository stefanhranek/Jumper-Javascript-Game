'use strict'

var dragonballInfo = [                    // ARRAY OF FLOOR BLOCKS
    {
        height         : 70,
        width          : 70,
        x              : 2300,             
        y              : 470                  // TOP RIGHT DRAGONBALL
    },
    
    {
        height         : 70,
        width          : 70,
        x              : 973,                   // FLOOR DRAGONBALL (PODIUM)     
        y              : 955
    },

    {
        height         : 70,
        width          : 70,
        x              : 2315,                   // BOTTOM RIGHT DRAGONBALL
        y              : 1075
    },
    
    {
        height         : 70,
        width          : 70,
        x              : 1091,                     
        y              : 325               // MOON DRAGONBALL
    },
    {
        height         : 70,
        width          : 70,
        x              : 65,                     
        y              : 816               // BOTTOM LEFT DRAGONBALL
    },
    {
        height         : 70,
        width          : 70,
        x              : 514,                     
        y              : 269               // TOP LEFT DRAGONBALL
    },
    {
        height         : 70,
        width          : 70,
        x              : 1688,                     
        y              : 93               // TOP STACK DRAGONBALL
    }
];

var blockInfo = [                    // ARRAY OF FLOOR BLOCKS
    {
        height         : 60,
        width          : 60,
        x              : 778,                     
        y              : 1100                   // FLOOR BLOCKS (LEFT)
    },
    
    {
        height         : 60,
        width          : 60,
        x              : 978,                   // FLOOR BLOCKS (MIDDLE-TOP)     
        y              : 1040
    },

    {
        height         : 60,
        width          : 60,
        x              : 978,                   // FLOOR BLOCKS (MIDDLE-BOTTOM)
        y              : 1100
    },
    
    {
        height         : 60,
        width          : 60,
        x              : 1178,                     
        y              : 1100               // FLOOR BLOCKS (RIGHT)
    }
];

var mapInfo  = [                   // ARRAY OF PLATFORMS
    {
        height         : 20,
        width          : 100,
        x              : 203,
        y              : 250
    },
    
    {
        height         : 20,
        width          : 100,
        x              : 285,                     
        y              : 630
    },
    
    {
        height         : 20,
        width          : 100,
        x              : 500,                    
        y              : 350
    },
    
    {
        height         : 20,
        width          : 100,
        x              : 750,                     
        y              : 450
    },
    
    {
        height         : 20,
        width          : 100,
        x              : 1000,                   
        y              : 550
    },
    
    {
        height         : 20,
        width          : 100,
        x              : 1000,                    
        y              : 300
    },
    
    
    {
        height         : 20,
        width          : 100,
        x              : 1250,                
        y              : 650
    },
    
    {
        height         : 20,
        width          : 100,
        x              : 2030,                    
        y              : 960
    },
    
    {              
        height         : 20,
        width          : 100,
        x              : 52,                    
        y              : 900
    },
    
    {             
        height         : 20,
        width          : 100,
        x              : 2300,              
        y              : 1050
    },
    
    {
        height         : 20,
        width          : 100,
        x              : 1770,               
        y              : 850
    },
    
    {
        height         : 20,
        width          : 100,
        x              : 1350,                     
        y              : 390
    },
    
    {
        height         : 20,
        width          : 100,
        x              : 1500,                
        y              : 750
    },
    
    {
        height         : 20,
        width          : 50,            // 3 stacks
        x              : 1698,                
        y              : 175
    },
    
    {
        height         : 20,
        width          : 50,            // 3 stacks
        x              : 1698,                
        y              : 375
    },
    
    {
        height         : 20,
        width          : 50,
        x              : 1698,          // 3 stacks     
        y              : 575
    },
    
    {
        height         : 20,
        width          : 100,
        x              : 1950,                
        y              : 350
    },
    
    {
        height         : 20,
        width          : 100,
        x              : 2290,                
        y              : 550
    },
    
    {
    
        height         : 20,
        width          : 100,
        x              : 2290,                
        y              : 250
    }
];

var coinInfo = [                        // ARRAY OF COINS

    {       
        height         : 40,
        width          : 25,
        x              : 93,                    
        y              : 203
    },

    {       
        height         : 40,
        width          : 25,
        x              : 324,                    
        y              : 535
    },

    {       
        height         : 40,
        width          : 25,
        x              : 890,                    
        y              : 325
    },

    {       
        height         : 40,
        width          : 25,
        x              : 1345,                    
        y              : 330
    },

    {       
        height         : 40,
        width          : 25,
        x              : 1115,                    
        y              : 580
    },

    {       
        height         : 40,
        width          : 25,
        x              : 937,                    
        y              : 492
    },

    {       
        height         : 40,
        width          : 25,
        x              : 945,                    
        y              : 163
    },

    {       
        height         : 40,
        width          : 25,
        x              : 1285,                    
        y              : 170
    },

    {       
        height         : 40,
        width          : 25,
        x              : 1290,                    
        y              : 510
    },

    {       
        height         : 40,
        width          : 25,
        x              : 1120,                    
        y              : 95
    },

    {       
        height         : 40,
        width          : 25,
        x              : 1535,                    
        y              : 670
    },

    {       
        height         : 40,
        width          : 25,
        x              : 1806,                    
        y              : 760
    },

    {       
        height         : 40,
        width          : 25,
        x              : 2065,                    
        y              : 873
    },

    {      
        height         : 40,
        width          : 25,
        x              : 1709,                
        y              : 305
    },

    {       
        height         : 40,
        width          : 25,
        x              : 1709,                
        y              : 505
    },

    {        
        height         : 40,
        width          : 25,
        x              : 1195,                
        y              : 1025       // 3 horizontal
    },

    {        
        height         : 40,
        width          : 25,
        x              : 795,                
        y              : 1025       //3 horizontal
    },

    {        
        height         : 40,
        width          : 25,
        x              : 92,              
        y              : 605
    },    
    
    {        
        height         : 40,
        width          : 25,
        x              : 92,              
        y              : 405
    },

    {        
        height         : 40,
        width          : 25,
        x              : 1985,              
        y              : 253
    }
];

class Speech {                                           ///  'MOON' CONSTRUCTOR
    constructor(canvas) {
        this.canvas         = canvas;
        this.ctx            = canvas.getContext('2d');
        this.height         = 120;
        this.width          = 400;
        this.x              = 2000;             
        this.y              = 35;
        // this.height         = 515;
        // this.width          = 502;
        // this.x              = 877;             
        // this.y              = 96; //save these just in case I need to revert
    };
    
    draw() {
        var speechBubble = new Image();
        speechBubble.src = './images/speechBubble.png';   // possible to make this more fluid
        this.ctx.drawImage( 
            speechBubble,
            this.x,
            this.y,
            this.width,
            this.height)
    };
};

class Roshi {                                           ///  'MOON' CONSTRUCTOR
    constructor(canvas) {
        this.canvas         = canvas;
        this.ctx            = canvas.getContext('2d');
        this.height         = 120;
        this.width          = 95;
        this.x              = 2290;             
        this.y              = 130;
        // this.height         = 515;
        // this.width          = 502;
        // this.x              = 877;             
        // this.y              = 96; //save these just in case I need to revert
    };
    
    draw() {
        var roshiImage = new Image();
        roshiImage.src = './images/roshi.png';   // possible to make this more fluid
        this.ctx.drawImage( 
            roshiImage,
            this.x,
            this.y,
            this.width,
            this.height)
    };
};

class Moon {                                           ///  'MOON' CONSTRUCTOR
    constructor(canvas) {
        this.canvas         = canvas;
        this.ctx            = canvas.getContext('2d');
        this.height         = 1100;
        this.width          = 800;
        this.x              = 800;             
        this.y              = 50;
        // this.height         = 515;
        // this.width          = 502;
        // this.x              = 877;             
        // this.y              = 96; //save these just in case I need to revert
    };
    
    draw() {
        var moonImage = new Image();
        moonImage.src = './images/shenron.png';   // possible to make this more fluid
        this.ctx.drawImage( 
            moonImage,
            this.x,
            this.y,
            this.width,
            this.height)
    };
};

class Ramen {                                           ///  RAMEN CONSTRUCTOR
    constructor(canvas) {
        this.canvas         = canvas;
        this.ctx            = canvas.getContext('2d');
        this.height         = 80;
        this.width          = 80;
        this.x              = 210;             
        this.y              = 150;
    };
    
    draw() {
        var ramenImage = new Image();
        ramenImage.src = './images/ramenGame.png';
        this.ctx.drawImage( 
            ramenImage,
            this.x,
            this.y,
            this.width,
            this.height)
    };
};

class Floor {                                               /// FLOOR CONSTRUCTOR 
    constructor(canvas) {
        this.canvas         = canvas,
        this.ctx            = canvas.getContext('2d'), 
        this.height         = 60;
        this.width          = canvas.width;
        this.x              = 0;                     
        this.y              = canvas.height-50;
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
}