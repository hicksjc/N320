class Instrument {
    constructor(loudness, family, verb){
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }

    play() {
        console.log(this.loudness, this.family, this.verb);
    }
}

//Create classes that extend from the Instrument class. Percussion is an instrument.
class Woodwind extends Instrument{
    constructor(loudness){
        //super is getting information from what the class extends from. the "woodwind" string is in the same position as 'family' in the Instrument contstructor.
        super(loudness, "Woodwind", Math.random() * 10);
    }
}

class Percussion extends Instrument{
    constructor(loudness){
        super(loudness, "Percussion", Math.random() * 20);
    }
}

class String extends Instrument{
    constructor(loudness){
        super(loudness, "String", Math.random() * 40);
    }
}

//Create arrays for the three classes.
let drum = [];
let clarinet = [];
let violin = [];


//For loop to call multiple objects and store them into an array of their own specifications.
for (i = 0; i < 5; i++){
    drum[i] = new Percussion(Math.random() * 400);
    clarinet[i] = new Woodwind(Math.random() * 400);
    violin[i] = new String(Math.random() * 400);
}


//display each object in the array and execute the function in Instrument.
drum.forEach((drums) => {
    drums.play();
})

clarinet.forEach((woodwinds) =>{
    woodwinds.play();
})

violin.forEach((strings) => {
    strings.play();
})