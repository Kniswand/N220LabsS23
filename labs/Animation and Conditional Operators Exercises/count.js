//Create a variable
var n = 1

// This part can be ignored b/c I kinda just copy and pasted it from my big.js file
function draw () {
    background(255, 255, 255)
    fill(255, 255, 0)
    strokeWeight(0)
    circle(200, 150, r)

// This will make the circle bigger when the mouse is NOT pressed
if (mouseIsPressed === false) {
    n = n + 1;
}
}

// Log the varibale
console.log(n)