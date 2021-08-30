// class Dog {
//     constructor(name,height,color){
//         this.name = name;
//         this.height = height;
//         this.color = color;
//     }

//     bark() {
//         console.log(this.name + " woofs!");
//     }
// }

// var myDog2 = new Dog("Giselle",10,"yellow");

// //Example of why this is immportant.
// for (var i = 0; i < 400; i++){
//     var myDog3 = new Dog("Clifford a" + i,400,"red");myDog3.bark();
// }

// console.log(myDog2);
// myDog2.bark();

//Classes can extend the capabilities of others through something called inheritance
//Lets make a base class of animal:

class Animal{
    constructor(name,weight,color){
        this.name = name;
        this.weight = weight;
        this.color = color;
    }
}

//Now we can extend a specific animal from our class of animal
//Note: the extends and super keywords
//Extends - "take all the capabilities of Animal and add these new features"
//Super - "invoke the constructor of the class that this is extending"
//Dog is now everything Animal is, and the new things we added to dog!

class Dog extends Animal {
    constructor(name,weight,color){
        super(name,weight,color);
        this.kind = "dog";
    }

    bark() {
        console.log(this.name + " barks!");
    }
}


// let animalEx = new Animal("Ex", 10, "green");
let aDog = new Dog("Rex", 45, "black");

console.log("aDog");
aDog.bark();

//Now do it yourself, find something, make a class and try to invoke methods then make an extension.

//What are some things I could make a class over. Video game, book, movie, tv show, class

class Class {
    constructor(title,number,description){
        this.title = title;
        this.number = number;
        this.description = description;
    }
}

class Course extends Class {
    constructor(title,number,description){
        super(title,number,description);
        this.kind = "course";
    }

    desc() {
        console.log(this.title + " is the name of your course!");
    }
}

let aCourse = new Course("Intermediate Media Application Development", 320, "This is a coding course!");

console.log(aCourse);
aCourse.desc();
