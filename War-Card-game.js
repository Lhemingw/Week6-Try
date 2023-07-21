
// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
//     Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

//const deck = new Array(suits, ranks, and deck array to hold it, the this. is used to refer to an object
//this. is used to access other properties and methods from the saem object.
class Deck {        
    constructor(){
        const suits = ["♠", "♣", "♥", "♦"]
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
        this.deck =[];
// This for loop put together the cards, i is = to 0; and i is less than suits.length(goes through the cards length).
//Second part of the loop is for the ranks which is x, and is less than ranks(goes through all the length).
//let cards are pulling cards together.  The this.deck.push(card) this gives us a new deck.
//I was getting 52 printing of cards of 52 cards with my code, I got help and they added the this.deck.
     for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < ranks.length; x++) {            
            let card = {
                suit: suits[i],
                rank: ranks[x],
                value: x,               
            }
             this.deck.push(card);
            }  
        }          
        //deck.sort(() => Math.random() - 0.5); Michael's shuffle, but I got my fisher yates working
        //I did fisher yates shuffle method, it shuffle better.
         }
         shuffle(){ 
          //console.log(this.deck);     
            for (let i = this.deck.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1));
              [this.deck[j], this.deck[i]] = [this.deck[i], this.deck[j]];           
        }              
        }
        //Dealing cards, deck gets .pop() removes the last element from an array and returns that value to the caller
        deal() {
          return this.deck.pop();
        }
} //deck, this was easier to keep track of the last of the class curly brackets.
//  We need players, including the name(player 1/player2, a score, and a hand to hold the cards).
//We do a return this.name, score, hand, and increment score and a recive card becuase we need to get cards in our hands.      
class Players {
    constructor(name) {
      this.name = name;
      this.score = 0;
      this.hand = [];
    }
  
    getName() {
      return this.name;
    }
  
    getScore() {
      return this.score;
    }
  
    getHand() {
      return this.hand;
    }
  
    incrementScore() {
      this.score++;
    }
  
    receiveCard(card) {
      this.hand.push(card);
    }
  } //end for class players, again this was the easies way for me, so I do not lose it.  The Bracket I mean.
  //We need to put the game together, what fun is it, without the game being put together, the cards, players,
  //we need to giveCards to both players, I  decided to give one card at a time, it is what we do in real life.
class Game{
    constructor(){
      this.card = new Deck();
      //card split
      this.player1 = new Players();
      this.player2 = new Players();
     
    }
    //give cards, becuse the table or floor can not have everything.  Somehow I had player 1 and player 2 get only 18 cards.
    //some cards where on the floor, when I tried a for loop.
    giveCards(){
      while (this.card.deck.length > 0) {
        this.player1.receiveCard(this.card.deal());
        this.player2.receiveCard(this.card.deal());
      }                 
    }
}//end for class game
 const game = new Game();
 game.card.shuffle();  //I had to switch these two, they where giving cards before a shuffle.
 game.giveCards();
 //for loop for player 1 we use the game status, and hand to hold the cards in, we logged both player 1 and player 2
 for (let i = 0; i < game.player1.hand.length; i++) {
  console.log("player1 hand");
  console.log(game.player1.hand[i]);
  console.log("player2 hand");
  console.log(game.player2.hand[i]);
//I used an if loop to say if player 1 is higher than player 1 gets the score.
//I guess I could have said player 2 was higher for a lower number but that would be cheating player 1 :D
  if (game.player1.hand[i].value > game.player2.hand[i].value) {
    console.log("player 1 hand is higher");
    game.player1.incrementScore();
  }
  if (game.player1.hand[i].value < game.player2.hand[i].value) {
    console.log("player 2 hand is higher");
    game.player2.incrementScore();
  }
  //Tie hand nothing done.
 if(game.player1.hand[i].value == game.player2.hand[i].value) {
  console.log("tie hand");
 }
}
//we have a player1 and player 2 get score, we need a score.  I could have had some mischevous fun here.
console.log("player1 ", game.player1.getScore());
console.log("player2 ", game.player2.getScore());
//console.log("tie hand");

//Who's score is higher 3 if statement game.player1.getscore, and etc for player2 and ==
if (game.player1.getScore() > game.player2.getScore()) {
  console.log("player 1 won");  //If I really wanted to hijack the game this is where I could have gone, just a turn of the < or >.
  //I scored player 1 as winner if the score was bigger, which is why getScore is used
 }
 if (game.player1.getScore() < game.player2.getScore()) {
   console.log("player 2 won");
   //Samething is done on player 1 above here.  Just used getScore instead of incrementScore, we want to get score, not increment.
   game.player2.getScore(); //instead of incrementScore
 }
 //Nothing is done with  a tie.
 if(game.player1.getScore() == game.player2.getScore()) {
  console.log("Tie Game", "End Game-is a good movie");
 }

