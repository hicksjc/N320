class Rain {
    constructor(rainX, rainY, rainRadius, rainColor){
        this.x = rainX;
        this.y = rainY;
        this.radius = rainRadius;
        this.color = rainColor;
        this.speed = 1 + Math.random() * 2;
    }

    update() {
        this.y = this.y + this.speed;
        //this.speed = this.speed + .1;
        fill(this.color);
        circle(this.x, this.y, this.radius);
        //Change the color of the ground when the raindrops reach a certain X coordinate 
        // if (rainX > width+radius){
        //     rainX = -rainRadius;
        // }
        if (this.y > 300){
            myGround.color[2] += 10;
            this.y = -10;
        }
        
    }
}

class Ground {
    constructor(positionX, positionY, Width, Height, color){
        this.x = positionX;
        this.y = positionY;
        this.Width = Width;
        this.Height = Height;
        this.color = color;
    }

    change(){
        fill(this.color);
        rect(this.x, this.y, this.Width, this.Height);

    }
}




var myRain = [];

// myRain[0] = new Rain(100,10,10,[227,137,64]);
// myRain[1] = new Rain(125,12,10,[227,137,64]);
// myRain[2] = new Rain(150,2,10,[227,137,64]);
// myRain[3] = new Rain(175,5,10,[227,137,64]);
// myRain[4] = new Rain(200,20,10,[227,137,64]);
// myRain[5] = new Rain(225,37,10,[227,137,64]);
// myRain[6] = new Rain(250,50,10,[227,137,64]);
// myRain[7] = new Rain(275,49,10,[227,137,64]);
// myRain[8] = new Rain(300,53,10,[227,137,64]);
// myRain[9] = new Rain(325,74,10,[227,137,64]);

//For loop stores each I variable in an array and creates a new rain object.
for (var i = 0; i < 200; i++){
    myRain[i] = new Rain(Math.random() * 400, Math.random() * 200,4,[0,0,255]);
}

//This loop is supposed to create 100 instances of Rain and have each rain drop in a random x and y value.
// for(i=0; i < 100; i++){
//     myRain[i] = new Rain(Math.random(), Math.random(), 10, [227,137,64]);
//     i++;
// }
var myGround = new Ground(0, 200, 400, 300, [0, 0, 0]);


//Trying to temper with changing the ground by each pixel when an object collides with it.
// if (myRain.rainY == myGround.positionY){
//     myGround.loadpixels();
//     myGround.set(positionX, positionY, orange);
//     myGround.updatepixels();
// }


function setup(){
    createCanvas(400,300);
}

function draw() {
    background(128,128,128);

    // myRain[0].update();
    // myRain[1].update();
    // myRain[2].update();
    // myRain[3].update();
    // myRain[4].update();
    // myRain[5].update();
    // myRain[6].update();
    // myRain[7].update();
    // myRain[8].update();
    // myRain[9].update();

    for(var i=0; i < myRain.length; i++){
        myRain[i].update();
    }

    myGround.change();

    // if (Rain.radius > width+radius){
    //         Rain.radius = -radius;
    //     }
}