//Kyle Niswander, May 1, 2023, N220 // 

// This will add an event listern to the button
document.getElementById("button").addEventListener("click", getName)

// This function will get the inputted name and display it in a div
function getName(){
var name = document.getElementById("text").value;
document.getElementById("div").innerHTML = "Hello " + name;
}