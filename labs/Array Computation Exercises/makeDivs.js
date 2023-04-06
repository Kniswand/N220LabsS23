//Kyle Niswander, Apr. 6 2023, N220 //

//The array
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   //Define the part of the page (div) to append
   let page = document.getElementById("page");

   //For loop
   for (let i = 0; i < objects.length; i++) {
     let object = objects[i];
     //Creates the div
     let divElement = document.createElement("div");
     //Background color
     divElement.style.backgroundColor = object.color;
     //Height
     divElement.style.height = object.height + "px";
     //Width
     divElement.style.width = object.width + "px";
     //Append the page
     page.appendChild(divElement);
   }
