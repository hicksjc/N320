//Inheritance Example
class Note {
    constructor(pitch, duration){
        this.pitch = pitch;
        this.duration = duration;
    }
}

class FullNote extends Note {
    constructor (pitch){
        //super is getting information from what the class extends from
        super(pitch, 1);
    }
}

class HalfNote extends Note{
    constructor(pitch){
        super(pitch, .5);
    }
}

let aHalfNote = new HalfNote(880);

let aFullNote = new FullNote(720);

console.log(aFullNote);

//Abstraction Example
class vector {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    magnitude() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

let velo = new vector(10, 5);
let speed = velo.magnitude();
console.log(speed);

//Encapsulation Example 
//Protect data that should not be used outside the class.
class Engine{
    constructor(){
        this.oil = 10;
    }

    setOil(newOilAmount){
        if(newOilAmount >= 0){
            this.oil = newOilAmount;
        } else {
            console.error("Cannot set negative oil");
        }
    }

    getOil(){
        return this.oil;
    }
}

//Polymorphism Example
//based off of inheritance 

class Book {
    constructor(pages){
        this.pages = pages;
    }
    read() {
        console.log("You just read " + this.pages + " pages!");
    }
}

class Novel extends Book{
    constructor(){
        super(300);
    }
}
class Comic extends Book{
    constructor(){
        super(16);
    }
}

let books = [];
books[0] = new Comic();
books[1] = new Novel();

books.forEach((book) => {
    book.read();
});

/********TYPES OF RELATIONS********/

//Association Example
//Association happens when two or more classes know about eachother. For example, Food feeds Animal. Person orders from Barista.

class Dog {
    constructor(name){
        this.name = name;
    }

    play(ball){
        ball.catch(this);
    }
}

class Ball{

    constructor(color){
        this.color = color;
    }


    catch(dog) {
        console.log(dog.name + ' caught a ' + this.color + ' ball!');
    }
}

let dog = new Dog("Sadie");
let ball = new Ball("red");
let ball2 = new Ball("blue");

dog.play(ball);


//Aggregation Example
//one-way relationship, not required
//has-a
//Dog has a Bark
class Guitar {
    constructor(make, strings, acoustic){
        this.make = make;
        this.strings = strings;
        this.acoustic = acoustic;
    }

    strumOpen(){
        this.strings.forEach(string =>{
            console.log(string.note + " Plays");
        })
    }
}

class String {
    constructor(note, octave){
        this.note = note;
        this.octave = octave;
    }
}

var strings = [];
strings[0] = new String("E", 4);
strings[1] = new String("A", 3);
strings[2] = new String("D", 4);

var myGuitar = new Guitar("Gibson", strings, false);

myGuitar.strumOpen();

//Composition Example

class Line{
    constructor(p1, p2){
        this.p1 = p1;
        this.p2 = p2;
    }

    draw(){
        line(p1.x, p1.y, p2.x, p2.y);
    }
}

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

let pointA = new Point(10,10);
let pointB = new Point(5,40);
let myLine = new Line(pointA, pointB);
myLine.draw();

//Management
