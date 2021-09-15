//Inheritance example 
class Guitar {
    constructor (strum, duration){
        this.strum = strum;
        this.duration = duration;
    }
}

class String extends Guitar {
    constructor (strum){
        super(strum, 2);
    }
}

let aNote = new Guitar(10);

console.log(aNote);