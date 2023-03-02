// Kyle Niswander, March 2, N220 //

//Define the score
var score = 0;

//Make opponent play
var random = Math.floor(Math.random() * 4) + 1;
if (random == 1){
    random == "Rock";
}else if (random == 2){
    random == "Paper";
}else if (random == 3){
    random == "Scissors";
}else if (random == 4){
    random == "Guard";
}

// Score calculations
//Rock
if (document.getElementById("Rock").onClick){
    score=score++
    console.log(score);
}else if(random == "Rock"){
 score=score+0
 console.log(score);
}else if(random == "Paper"){
    score=score--
    console.log(score);
}

//Paper
if (document.getElementById("Paper").onClick){
    score=score++
    console.log(score);
}else if(random == "Paper"){
 score=score+0
 console.log(score);
}else if(random == "Scissors"){
    score=score--
    console.log(score);
}

//Scissors
if (document.getElementById("Scissors").onClick){
    score=score++
    console.log(score);
}else if(random == "Scissors"){
 score=score+0
 console.log(score);
}else if(random == "Rock"){
    score=score--
    console.log(score);
}

//Guard
if (document.getElementById("Scissors").onClick){
    score=score-0.5
    console.log(score);
}

//Score
console.log(score);