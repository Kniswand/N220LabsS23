// Kyle Niswander, Apr. 13, N220 //

// Define the buttons
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");

// Defines the div that will be appended
var div = document.getElementById("div");

// Changes if button one is clicked
one.onclick = function changeColor () {
    div.innerHTML = one.getAttribute("data-answer");
}

// Changes if button one is clicked
two.onclick = function changeColor () {
    div.innerHTML = two.getAttribute("data-answer");
}

// Changes if button one is clicked
three.onclick = function changeColor () {
    div.innerHTML = three.getAttribute("data-answer");
}