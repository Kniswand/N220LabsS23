// Kyle Niswander, Mar 1, N220 //

// Make each div do something upon being clicked //

document.getElementById("One").onClick == function() {functionTwo};
document.getElementById("Two").onClick == function() {functionTwo};
document.getElementById("Three").onClick == function() {functionThree};
document.getElementById("Four").onClick == function() {functionFour};
document.getElementById("Five").onClick == function() {functionFive};
document.getElementById("Six").onClick == function() {functionSix};


// Actually make the clicking do something 
function functionOne() {
    document.getElementById("One").style.backgroundColor=rgb(255,00,00);
    document.getElementById("One").style.fontWeight=bold;
}
// Second div
function functionTwo() {
    document.getElementById("Two").style.backgroundColor=rgb(255, 165, 0);
    document.getElementById("Two").style.fontWeight=bold;
}
// Third div
function functionThree() {
    document.getElementById("Three").style.backgroundColor=rgb(60, 179, 113);
    document.getElementById("Three").style.fontWeight=bold;
}
// Foruth div
function functionFour() {
    document.getElementById("Four").style.backgroundColor=rgb(0, 0, 255);
    document.getElementById("Four").style.color=rgb(255,255,255)
    document.getElementById("Four").style.fontWeight=bold;
}
// Fifth div
function functionFive() {
    document.getElementById("Five").style.backgroundColor=rgb(238, 130, 238);
    document.getElementById("Five").style.fontWeight=bold;
}
// Six div
function functionSix() {
    document.getElementById("Six").style.backgroundColor=rgb(106, 90, 205);
    document.getElementById("Six").style.color=rgb(255,255,255)
    document.getElementById("Six").style.fontWeight=bold;
}