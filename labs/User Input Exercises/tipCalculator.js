//Kyle Niswander, May 1, 2023, N220 // 

// This will add an event listener to the button
document.getElementById("button").addEventListener("click", getTip)

// This function will get the inputted amount and find the tip and total
function getTip(){
var tip = document.getElementById("number").value / 4;
var total = document.getElementById("number").value + tip;

//Display the tip and total
document.getElementById("div").innerHTML = "Tip: $" + tip + ". Total: $" + total + ".";
}