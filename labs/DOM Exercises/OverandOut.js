// Kyle Niswander, Feb. 16, N220

//Creating the canvas
function setup () {
    createCanvas(1000, 1000)
    }
    
// Create a blue square //
function draw () {
    
    fill(0, 0, 255)
    strokeWeight(0)
    rect(0, 0, 100, 100)

    //Make the mouse black on mouse hover
    if(onmouseover){
    fill(255, 255, 255)
    strokeWeight(0)
    rect(0, 0, 100, 100)
    }

    //Do something to make the square blue again when mouse is away
    if(onmouseout){
    fill(0, 0, 255)
    strokeWeight(0)
    rect(0, 0, 100, 100)
    }

}