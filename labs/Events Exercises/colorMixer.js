// Kyle Niswander, Apr. 13, N220 //

//Define the colors
var red = 0;
var green = 0;
var blue = 0;

//Make the buttons work
//Red buttons
document.getElementById("red1").onclick = function(red){red = red + 1; change()};
document.getElementById("red5").onclick = function(red){red = red + 5; change()};
document.getElementById("red10").onclick = function(red){red = red + 10; change()};

//Green buttons
document.getElementById("green1").onclick = function(green){green = green + 1; change()};
document.getElementById("green5").onclick = function(green){green = green + 5; change()};
document.getElementById("green10").onclick = function(green){green = green + 10; change()};

//Blue buttons
document.getElementById("blue1").onclick = function(blue){blue = blue + 1; change()};
document.getElementById("blue5").onclick = function(blue){blue = blue + 5; change()};
document.getElementById("blue10").onclick = function(blue){blue = blue + 10; change()};

//Function that updates the main div
function change(){
    document.getElementById("div").style.backgroundColor = "rgb(red, green, blue)";

    //Updates the text
    let text = document.getElementById("color");
    text.innerHTML = "Current Color: rgb(" + red + "," + green + "," + blue +")";
}