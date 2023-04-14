// Kyle Niswander, Apr. 13, N220 //

// Changes the first div
var div1 = document.getElementById("1");
div1.onclick = function changeColor () {
    //Use the data attribute to get color
    div1.style.backgroundColor = div1.getAttribute("data-color");
}

// Changes the second div
var div2 = document.getElementById("2");
div2.onclick = function changeColor () {
    //Use the data attribute to get color
    div2.style.backgroundColor = div2.getAttribute("data-color");
}

// Changes the third div
var div3 = document.getElementById("3");
div3.onclick = function changeColor () {
    //Use the data attribute to get color
    div3.style.backgroundColor = div3.getAttribute("data-color");
}