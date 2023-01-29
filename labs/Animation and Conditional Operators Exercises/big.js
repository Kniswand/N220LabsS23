//Create a number that will be the radius
var r =1

//Make the canvas
function setup () {
    createCanvas(400, 300)
    // Make the background purple //
    background(106, 90, 205)
}
// Create a circle that will get bigger
function draw () {
    background(106, 90, 205)
    fill(0, 0, 0)
    strokeWeight(0)
    circle(200, 150, r)

// This will make the circle bigger when the mouse is NOT pressed
if (mouseIsPressed === false) {
    r = r + 1;
}

if (r === 200)
    r === 1;


}
