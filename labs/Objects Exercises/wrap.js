//Create the vanvas
function setup () {
    createCanvas(500, 300)
}

// Draw the ball
function draw (ball){

//Define the ball
    var ball = {
    ballX: 0,
    ballY: 100,
    ballR: 70
}


//Draw the rectangles (wall)
    fill(00, 00, 00)
    strokeWeight(0)
    
    circle(ball.ballX, ball.ballY, ball.ballR)

//Make the ball move
    ball.ballX++;

//Make the ball wrap
    if(ball.X <= 500){
        ball.X == 0


    }
}