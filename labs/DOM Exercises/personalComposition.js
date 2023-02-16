// Kyle Niswander, Feb. 16, N220

//Create the canvas
function setup () {
    createCanvas(1000, 1000)
    background(255, 0, 255)
}

//Make something
function draw () {

var r = 255 + "px"

    fill(0, 255, 255)
    strokeWeight(0)
    circle(300, 300, r)

    //Make it change when the mouse does something
    if(onmouseover){
        fill(255, 255, 0)
        strokeWeight(0)
        circle(300, 300, r)
        //Refresh the page to undo this(?)
    }

// Do something when clicked (change variable)
if (mouseIsPressed){
    r = r--;
}

}