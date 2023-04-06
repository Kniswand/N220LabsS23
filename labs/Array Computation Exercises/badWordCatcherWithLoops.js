//Start of function that runs upon butto being clicked
document.getElementById("button").onclick = function filterWords(){
    //Gets the words the user inputs
    var words = document.getElementById("input").value; 
    console.log(words);

    //Split the words at the commas
    var advanceWords = words.split (",")
    console.log(advanceWords);

    //If statement to find bad words
    for (let i = 0; i < advanceWords.length; i++) {
        var badWordCount = 0;
        if ([i] == "clear" || [i] == "water" || [i] == "tires")
        badWordCount = badWordCount + 1;
        console.log("badWordCount")
      }

    //Make results appear on the page
    if (badWordCount == 0){
        //No bad words
        document.getElementById("output").innerHTML = "No bad words detected"
    } else {
        //Bad words
        document.getElementById("output").innerHTML = badWordCount + "bad words were detected"
    }

};
   