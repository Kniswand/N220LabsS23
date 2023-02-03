// Kyle Niswander, Feb 2, N220

// Create the canvas //
function setup () {
    createCanvas(1200, 650)
}

// Make a table that will follow the mouse
function draw () {
    background(255, 255, 255)
    fill(130, 94, 92)
    strokeWeight(0.5)

    // Make the table's top
    rect(20, mouseY, mouseX + 20, 20)

    //Make the right table leg
    fill(196, 164, 132)
    rect(mouseX + 15, mouseY, 20, 100)

    //Make the left table leg
    rect(25, mouseY, 20, 100)

    //Make a red "apple"
    fill(255, 0, 0)
    circle(mouseX - 150, mouseY, 50)

    //Make a green "apple"
    fill(0, 255, 0)
    circle(mouseX - 350, mouseY, 50)

    //Make a "blue" "apple"
    fill(0, 0, 255)
    circle(mouseX - 950, mouseY, 50)
}