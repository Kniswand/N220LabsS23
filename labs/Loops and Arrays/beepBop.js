// Kyle Niswander, N220, Feb. 23 //

function beepBop(){
    // Write a loop that runs 25 times
    for (let i = 0; i < 25; i++) {

        // Create an If statements for if the number is divisble by 3 or 5 or both //
        if(i == 3,6,9,12,18,21,24){
            document.getElementById("main").innerHTML = ("beep");
        }else if(i == 5,10,20,25){
            document.getElementById("main").innerHTML = ("bop");
        }else if(i== 15){
            document.getElementById("main").innerHTML = ("beepbop");
        }

    }

}
