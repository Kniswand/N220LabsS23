// Kyle Niswander, Mar. 23, N220 //

//Define all the elements
document.getElementById("one").onclick = function() {stringOne()};
document.getElementById("two").onclick = function() {stringTwo()};
document.getElementById("three").onclick = function() {stringThree()};

//Function one
function stringOne() {
stringOne = [" Red", " Orange", " Yellow"]
document.getElementById("string").innerHTML = stringOne;
}

//Switch to string two
function stringTwo() {
    stringTwo = ["Green", " Blue", " Purple"]
    document.getElementById("string").innerHTML = stringTwo;
}

//Switch to string three
function stringThree() {
    stringThree = ["Black", " White", " Gray"]
    document.getElementById("string").innerHTML = stringThree;
}