'use strict'

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
        x              : 535,                    
        y              : 255
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
        x              : 2340,                    
        y              : 1090
    },

    {        
        height         : 40,
        width          : 25,
        x              : 1709,                
        y              : 105
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
        x              : 995,                
        y              : 930        // middle of 3 coins (horizontal)
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
        y              : 805
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

class Sasuke {                                           ///  'MOON' CONSTRUCTOR
    constructor(canvas) {
        this.canvas         = canvas;
        this.ctx            = canvas.getContext('2d');
        this.height         = 120;
        this.width          = 60;
        this.x              = 2305;             
        this.y              = 130;
        // this.height         = 515;
        // this.width          = 502;
        // this.x              = 877;             
        // this.y              = 96; //save these just in case I need to revert
    };
    
    draw() {
        var sasukeImage = new Image();
        sasukeImage.src = './images/sasukeFlipped.png';   // possible to make this more fluid
        this.ctx.drawImage( 
            sasukeImage,
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

class WinObject {                                           /// WIN OBJECT CONSTRUCTOR
        constructor(canvas) {
            this.canvas         = canvas;
            this.ctx            = canvas.getContext('2d');
            this.height         = 80;
            this.width          = 80;
            this.x              = 2300;             
            this.y              = 455;
        };
        
        draw() {
            var winImage = new Image();
            winImage.src = './images/Mushroom-3.png';
            this.ctx.drawImage( 
                winImage,
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