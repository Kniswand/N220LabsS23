//Create the vanvas
function setup () {
    createCanvas(500, 300)
}

// Draw the walls
function draw (wallOne, wallTwo){

//Establish the left wall
var wallOne = {
    rectOneX: "5", 
    rectOneY: "100", 
    rectOneWidth: "10",
    rectOneHeight: "70"
}

//Establish the right wall
var wallTwo = {
    rectTwoX: "450", 
    rectTwoY: "100", 
    rectTwoWidth: "10",
    rectTwoHeight: "70"
}

//Draw the rectangles (wall)
fill(00, 00, 00)
strokeWeight(0)
    
    rect(wallOne.rectOneX, wallOne.rectOneY, wallOne.rectOneWidth, wallOne.rectOneHeight);

    rect(wallTwo.rectTwoX, wallTwo.rectTwoY, wallTwo.rectTwoWidth, wallTwo.rectTwoHeight);

//function to make the walls move
if ((keyIsDown(UP_ARROW))){
    wallOne.rectOneY++;
    wallTwo.rectTwoY--;
}
//Opposite
if ((keyIsDown(DOWN_ARROW))){
    wallOne.rectOneY--;
    wallTwo.rectTwoY++;
}

}