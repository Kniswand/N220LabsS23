// Kyle Niswander, Mar. 23, N220 //

// Set up elements
document.getElementById("one").onmouseover = function() {changeStyleOne()};
document.getElementById("two").onmouseover = function() {changeStyleTwo()};
document.getElementById("one").onmouseover = function() {changeStyleTwo()};

// Make square 1 change
function changeStyleOne(){
    document.getElementById("one").style.color = "blue";
    document.getElementById("one").style.width = "75px";
}

// Make square 2 change
function changeStyleTwo(){
    document.getElementById("two").style.color = "blue";
    document.getElementById("two").style.width = "75px";
}

// Make square 3 change
function changeStyleThree(){
    document.getElementById("three").style.color = "blue";
    document.getElementById("three").style.width = "75px";
}

