//Kyle Niswander, May 1, 2023, N220 // 

// This will define the hard coded number
var guess = 10;

// This will check the number upon the button being clicked
document.getElementById("button").addEventListener("click", checkNumber)

function checkNumber(guess){
//If the number is too low
if (document.getElementById("number").value < guess){
    document.getElementById("div").innerHTML = "Your number is too low";
//If the number is too high
} else if (document.getElementById("number").value > guess){
    document.getElementById("div").innerHTML = "";
    document.getElementById("div").innerHTML = "Your number is too high";
// If the number matches
} else if (document.getElementById("number").value == guess){
    document.getElementById("div").innerHTML = "Your number is correct!";
}
}