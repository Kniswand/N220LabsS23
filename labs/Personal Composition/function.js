// Kyle Niswander, Jan. 19, 2023, N220 //

var r = 11
var w = 0

// Create the canvas //
function setup () {
    createCanvas(1200, 650)
    // Make the background purple //
    background(106, 90, 205)
}
// Create a circle that follows the mouse //
function draw () {
    fill(60, 179, 113)
    strokeWeight(0)
    circle(mouseX, mouseY, r)
    
    // Cause the circle to grow when mouse is clicked //
    if (mouseIsPressed){
        r = r + 1;
        w = w + 1
    }
    // Prevent mouse from going past 100 //
    if (r >= 100){
    r = 100;
    console.log("it works");
    // This will make a rectangle w away from the mouse when it hits 100 //
    fill (255, 165, 0)
    rect(mouseX + w, mouseY + w, r + w);
}
}


