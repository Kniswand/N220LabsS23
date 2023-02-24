// Kyle Niswander, N220, Feb. 23 //


function fav() {
    //Define the array of things 
    let things = [
        "Cats",
        "Spicy foods",
        "Video games",
        "Clocks",
        "Pillows"
    ];

    // Make a div say each part of the array, followed by "are some of my favorite things" //
    for (let i = 0; i < 5; i++) {
    document.getElementById("main").innerHTML = (things[i] + "are some of my favorite things");
    }

}