// Kyle Niswander, Feb. 16, N220

//Creating the canvas
function setup () {
createCanvas(1000, 1000)
}

// Create a green (square) div //
function draw () {

var size = 100 + "px"


    fill(0, 255, 0)
    strokeWeight(0)
    rect(0, 0, size, size)


// Make the div * 1.1 bigger when clicked //
     if (mouseIsPressed){
        size = size * 1.1;
    }
}
