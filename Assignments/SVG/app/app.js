//Class that contains the logic for the game
class Game {

    //class properties 
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#99FF00";
    normalColor = "#7700AA";
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar();

    constructor(){
        //make the circles 
        for(var i = 0; i < 25; i++){
            //Create Circle
            let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            //add circle style class
            newCircle.classList.add("gameCirc");
            newCircle.setAttribute("cx", Math.random() * 400);
            newCircle.setAttribute("cy", Math.random() * 400);


            //randomly choose what reveal color the circle is 
            if(Math.random() < .3){
                //set to be the looking for color
                newCircle.dataset.hiddenColor = this.searchColor;
                this.totalCircles ++;
            } else {
                newCircle.dataset.hiddenColor = this.normalColor;
            }

            //Mouse events
            //on mouse over, show the hidden color in the data-hiddencolor attribute
            newCircle.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;
            })

            newCircle.addEventListener("mouseout", (event) => {
                event.target.style.fill = "#000";
            })

            newCircle.addEventListener("click", (event) => {
                //if the user clicked on something with the "looking for" color 
                if(event.target.dataset.hiddenColor == this.searchColor) {
                    event.target.remove();

                    //store how many have been clicked on
                    this.foundCircles++;

                    //update found UI
                    this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                }
            })

            

            //add the circle to the screen
            this.gameZone.appendChild(newCircle);
        }
    }
}

class FoundBar {
    element = document.getElementById("foundBar");
    maxSize = 130;
    percent = 0;

    setPercent(percent){
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
}

// let f = new FoundBar();
// f.setPercent(0);

let g = new Game();