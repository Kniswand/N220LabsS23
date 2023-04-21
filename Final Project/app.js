// This defines every card on the play area
const cards = document.querySelectorAll('.card');

//This array holds what cards are flipped and how many
let flippedCards = [];
let cardNumber = 0;
var totalCards = 16;

//This adds an event listener to every card
cards.forEach(card => {
  card.addEventListener('click', () => {
    changeColor(card);
  });
});

//This function will change the colors of the cards on clicked
function changeColor(card) {
  card.style.backgroundColor = card.getAttribute("data-color");

  //These update the variables for card counts
  cardNumber++;
  flippedCards.push(card);
  console.log(flippedCards.length);

  // This checks if two cards are flipped
  if (cardNumber === 2) { 
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];
    
    //This will check if the two flipped cards match
    if (card1.getAttribute("data-color") === card2.getAttribute("data-color")) {
      totalCards = totalCards - 2;
      console.log(totalCards);
      //This will remove the cards after two seconds
      setTimeout(remove, 2000);
      function remove() {
        card1.style.backgroundColor = "white";
        card2.style.backgroundColor = "white";
      }
    } else {
        //This changes the cards back to gray after two seconds
      setTimeout(reset, 2000);
      function reset() {
        card1.style.backgroundColor = "gray";
        card2.style.backgroundColor = "gray";
      }

      //This will reload the page when all cards are removed
    } if (totalCards == 0){
        location.reload(true)
        console.log("it worked")
    }
    
    // This resets the variables
    flippedCards = [];
    cardNumber = 0;
}
}    
