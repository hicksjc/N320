class Rain {
    constructor(rainX, rainY, rainRadius, rainColor){
        this.x = rainX;
        this.y = rainY;
        this.radius = rainRadius;
        this.color = rainColor;
        this.speed = .2 + Math.random() * 1;
    }

    update() {
        this.y = this.y + this.speed;
        fill(this.color);
        circle(this.x, this.y, this.radius);
        //Change the color of the ground when the raindrops reach a certain X coordinate 
        if (this.y > 300){
            // myGround.color[2] += 10;
            this.y = -10;
            let Ix = floor(random(img.width));
            let Iy = floor(random(img.height));

            //set the pixels color to blue 
            let blue = color(0, 0, 255);

            img.set(Ix, Iy, blue);
            img.updatePixels()

        }
    }
}

// class Ground {
//     constructor(positionX, positionY, Width, Height, color){
//         this.x = positionX;
//         this.y = positionY;
//         this.Width = Width;
//         this.Height = Height;
//         this.color = color;
//     }

//     change(){
//         fill(this.color);
//         rect(this.x, this.y, this.Width, this.Height);

        
//         // let Gx = floor(random(this.Width));
//         // let Gy = floor(random(this.Height));
//         // let orange = color(227,137, 64);
//     }
// }

// class Image {
//     constructor (img, positionX, positionY, Width, Height){
//         this.img = img;
//         this.x = positionX;
//         this.y = positionY;
//         this.Width = Width;
//         this.Height = Height;
//         // this.color = color;
//     }

//     changePixels(){
//         if (myRain.rainy > 300){
//             //Gets a random pixel of the image.
//             let Gx = floor(random(this.Width));
//             let Gy = floor(randoms(this.Height));

//             //Set the color to blue 
//             let blue = color(0,0,255);

//             //Load the pixels of the image.
//             (this.img).loadPixels();

//             //set the color to change
//             (this.img).set(Gx, Gy, blue);

//             //update the pixels of the image

//             (this.img).updatePixels();
//         }
//     }
// }

// var myImage = loadImage("img/rectangle.png")

// var myImage2 = new Image(myImage, 0, 200, 400, 300);



var myRain = [];

//For loop stores each I variable in an array and creates a new rain object.
for (var i = 0; i < 1800; i++){
    myRain[i] = new Rain(Math.random() * 400, Math.random() * 200, 2,[0,0,255]);
}

// if (myRain[i] > 15)

//var myGround = new Ground(0, 200, 400, 300, [255, 255, 0]);

let img;
function setup(){
    createCanvas(400,500);
    img = loadImage("img/rectangle.png");
}

function draw() {
    background(128,128,128);

    for(var i=0; i < myRain.length; i++){
        myRain[i].update();
    }

    //load the pixels of the image
    img.loadPixels();
    
    

    image(img, 0, 200);

    // myImage.changePixels();
}