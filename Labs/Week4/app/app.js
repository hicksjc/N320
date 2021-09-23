
let mach = document.getElementById("mach");

class WashingMachine {
    //properties
    CirclePosition = {x: 100, y: 100};
    CircleColor = [100, 215, 150];
    CircleRadius = 50;
    BaseColor = [215, 215, 215];
    BasePosition = {x: 25, y: 15};
    BaseSize = [150, 150];
    DialPosition = {x: 150, y: 40};
    DialRadius = 10;
    DialColor = [140, 120, 210];

    constructor(MachineXOffset, CircleXOffset, DialXOffset){
        //manipulating offset to display all machines
        this.MachineXOffset = MachineXOffset;
        this.CircleXOffset = CircleXOffset;
        this.DialXOffset = DialXOffset;


        let MachineEl = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        MachineEl.setAttribute("fill", `rgb(${this.BaseColor[0]}, ${this.BaseColor[1]}, ${this.BaseColor[2]})`);
        MachineEl.setAttribute("x", this.BasePosition.x + MachineXOffset);
        MachineEl.setAttribute("y", this.BasePosition.y);
        MachineEl.setAttribute("width", this.BaseSize[0]);
        MachineEl.setAttribute("height", this.BaseSize[1]);
        mach.appendChild(MachineEl);


        let Circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        Circle.setAttribute("fill", `rgb(${this.CircleColor[0]}, ${this.CircleColor[1]}, ${this.CircleColor[2]})`);
        Circle.setAttribute("cx", this.CirclePosition.x + CircleXOffset);
        Circle.setAttribute("cy", this.CirclePosition.y);
        Circle.setAttribute("r", this.CircleRadius);
        mach.appendChild(Circle);

        let Dial = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        Dial.setAttribute("fill", `rgb(${this.DialColor[0]}, ${this.DialColor[1]}, ${this.DialColor[2]})`);
        Dial.setAttribute("cx", this.DialPosition.x + DialXOffset);
        Dial.setAttribute("cy", this.DialPosition.y);
        Dial.setAttribute("r", this.DialRadius);
        mach.appendChild(Dial);
    }
    
};

let machine = [];

for (let i = 0; i<10; i++){
    machine[i] = new WashingMachine(i*250, i*250, i*250);
    console.log("machine");
}

