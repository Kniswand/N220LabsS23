
//Make the canvas
function setup () {
    createCanvas(400, 300)
    // Make the background purple //
    background(106, 90, 205)
}
// Create a blue circle that follows the mouse //
function draw () {
    background(106, 90, 205)
    fill(0, 0, 255)
    strokeWeight(1)
    circle(mouseX, mouseY, 20)


    //Make the circle red when on the right
    if(mouseX > 200){
        fill(255, 0, 0)
        strokeWeight(1)
        circle(mouseX, mouseY, 20)
    }

}
