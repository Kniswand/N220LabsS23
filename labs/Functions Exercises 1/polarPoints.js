//Kyle Niswander, Feb 2, N220



//Set up the canvas
function setup () {
    createCanvas(1200, 650)
}

//Define r
var r = 10


function draw () {
    //Defines the variables that will be used for (coordinates)
var x = r * Math.sin(mouseX);
var y = r * Math.cos(mouseX);

//Draw the circle(s)
translate(100,100);
circle(x, y, 10)

}