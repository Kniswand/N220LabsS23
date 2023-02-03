// Kyle Niswander, Feb 2, N220


//Define the color
var redColor = 170

//Change the color so that there is no red
var redColor = 0

//Make a circle that will appear with this color
function setup(){
    createCanvas(200, 200)
}

//Draw the circle
function draw(){
    fill(redColor, 200, 150)
    circle(100, 100, 100)
}

//Log the color
console.log(redColor)

