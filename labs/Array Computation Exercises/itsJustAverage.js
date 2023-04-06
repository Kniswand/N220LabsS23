//Start of function that runs upon butto being clicked
document.getElementById("button").onclick = function getNumbers(){
    //Gets the numbers user inputs
    var numbers = document.getElementById("input").value; 
    console.log(numbers);

    //Split the numbers at commas
    var advanceNumbers = numbers.split (",")
    console.log(advanceNumbers);

    //Add all the numbers together
    //Using a loop

        let sum = 0;
        for (let i = 0; i < advanceNumbers.length; i++) {
          sum += advanceNumbers[i];
        }

      //Find the average
      var average = sum/advanceNumbers.length;

    //Print these numbers out to the page
    document.getElementById("output").innerHTML = "Sum: " + sum + ", " + "Average: " + average;
};
   
