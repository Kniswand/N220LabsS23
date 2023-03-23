// Kyle Niswander, Mar. 23, N220 //

//Define the button
document.getElementById("button").onclick = function() {makeNumber()};

//Function
function makeNumber() {
var random = Math.floor(Math.random() * 11);
document.getElementById("number").innerHTML = random;
}
    