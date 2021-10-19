class Board{
    constructor(grid){
        
        //class properties 
        this.cells = document.querySelectorAll(".cell");
        
        

        for(var i = 0; i < this.cells.length; i++){
            //onMouseClick show the players color who's turn it is.
            this.cells[i].addEventListener("click", (event) => {
                let x = event.target.dataset.x;
                let y = event.target.dataset.y;
                let blue = event.target.dataset.color1;
                let green = event.target.dataset.color2;
                blue = false;
                green = false;
                //console.log(blue, green);
                this.whoseTurn(x, y, event.target, blue, green);
                //console.log(x,y);
            })
        }
        //create the board
        this.grid = [
            [new Square(),new Square(),new Square()],
            [new Square(),new Square(),new Square()],
            [new Square(),new Square(),new Square()]
        ]
        this.turn = 0;
        this.winConditions = new WinConditions();
    }
    //determine who's turn it is 
    whoseTurn(x, y, targetColor, blue, green){
            //which square was clicked
            let squarePosition = this.grid[x][y];

            let gridPosition = this.grid;

            let blueSquare = this.grid.blue;
            let greenSquare = this.grid.green;
            squarePosition.blue
            
            
            //is that square empty? Check Color
            if (squarePosition.color == ""){

            //if the color is empty, then change color based on turn
            squarePosition.changeColor(this.turn, targetColor, blue, green);

            
            
            this.nextTurn();
            
            
            
            }
            //check the win conditions of each player based on cell positions
            this.winConditions.WinCondition(gridPosition, targetColor.style.fill,blueSquare,greenSquare);
        }
        
    nextTurn(){ //Increase/decrease the turn count 
        if (this.turn == 0){
            this.turn += 1;
        } else {
            this.turn -= 1;
        }
    }


}

//The square class is responsible for changing the color based on the target.
class Square{
    constructor(color){
     this.color= "";   
    }

    changeColor(counter, targetColor, blue, green){
        console.log(this);
        if(counter == 0){
            //Change this line for the animations
            //the color adds a class that has a keyframe to change the fill amount
             this.color = targetColor.classList.add("selected");
             //this.color = "#0000ff";
             this.blue = true;
             this.green = false;
        } else {

            //the color adds a class that has a keyframe to change the fill amount
             this.color = targetColor.classList.add("selectedGreen");
             
             this.green = true;
             this.blue = false;
             //this.color = "#00ff00";
        }
        //define the color into 
        targetColor.style.fill = this.color;
        console.log(blue);
    }
}

class WinConditions{

    WinCondition(gridPosition, Color, blue, green){
    //determine the wing conditions of each player.
    // if(squarePosition[0][1])
    // ({} == 'red')
    // if (gridPosition[0][0].Color == gridPosition[0][1].Color && gridPosition[0][2].Color == gridPosition[0][1].Color && gridPosition[0][0].Color){
    //     alert(Color + " Wins!");
    // }
    // if (gridPosition[0][0].color == gridPosition[1][0].color && gridPosition[2][0].color == gridPosition[1][0].color && gridPosition[0][0].color){
    //     alert(Color + " Wins!");
    // }

    //for loop, 
    // if (gridPosition[i][0].blue == gridPosition[i][1].blue && gridPosition[i][2].blue == gridPosition[i][1].blue && gridPosition[i][0].blue){
    //     alert("blue Wins!");
    // }
    console.log(gridPosition[0][0].blue, gridPosition[0][1].blue);
    

    for(let i=0; i < 3; i++){
        if (gridPosition[i][0].blue == gridPosition[i][1].blue && gridPosition[i][2].blue == gridPosition[i][1].blue && gridPosition[i][0].blue){
            alert("blue wins!");
        }
        if(gridPosition[i][0].green == gridPosition[i][1].green && gridPosition[i][2].green == gridPosition[i][1].green && gridPosition[i][0].green){
            alert("green wins!");
        }

        if(gridPosition[0][i].blue == gridPosition[1][i].blue && gridPosition[2][i].blue == gridPosition[1][i].blue && gridPosition[0][i].blue){
            alert("blue wins!");
        }
        if(gridPosition[0][i].green == gridPosition[1][i].green && gridPosition[2][i].green == gridPosition[1][i].green && gridPosition[0][i].green){
            alert("green wins!");
        }
    }

    if (gridPosition[0][0].blue == gridPosition[1][1].blue && gridPosition[2][2].blue == gridPosition[1][1].blue && gridPosition[0][0].blue){
        alert("blue wins!");
    }

    if (gridPosition[0][2].blue == gridPosition[1][1].blue && gridPosition[2][0].blue == gridPosition[1][1].blue && gridPosition[0][2].blue){
        alert("blue wins!");
    }
    if (gridPosition[0][0].green == gridPosition[1][1].green && gridPosition[2][2].green == gridPosition[1][1].green && gridPosition[0][0].green){
        alert("green wins!");
    }

    if (gridPosition[0][2].green == gridPosition[1][1].green && gridPosition[2][0].green == gridPosition[1][1].green && gridPosition[0][2].green){
        alert("green wins!");
    }
    

    
    // if ((Myturn == 0) && ((squarePosition % 3)== Color)){
    //     alert("you Win!!");
    // }  
    }
}

const board = new Board();