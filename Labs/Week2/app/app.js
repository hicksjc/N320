class Cat{
    constructor(name){
        this.name = name;
    }

    getScared(){
        console.log(`${this.name} got spooked`)
    }
}

class Alarm{
    constructor(){
        console.log("Making alarm");
        setTimeout( () => { this.buzz() }, 1000 * 2);
    }
}


//test cat
let c = new Cat("Jerry");
let a = new Alarm();

a.buzz = function() {
    console.log("Alarm called!");
    c.getScared();
}