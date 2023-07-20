


//const deck = new Array(SUITES, VALUES);
class Deck {        
    constructor(){
        const suits = ["♠", "♣", "♥", "♦"]
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
        this.deck =[];

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
          
        //deck.sort(() => Math.random() - 0.5); Michael's shuffle
        //fisher yates shuffle method
         }
         shuffle(){ 
          //console.log(this.deck);     
            for (let i = this.deck.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1));
              [this.deck[j], this.deck[i]] = [this.deck[i], this.deck[j]];
            
        }
              
        }
        deal() {
          return this.deck.pop();

        }

} //deck
      
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
  } //end for class players
class Game{
    constructor(){
      this.card = new Deck();
      //card.split();
      this.player1 = new Players();
      this.player2 = new Players();
     
    }
    giveCards(){
      while (this.card.deck.length > 0) {
        this.player1.receiveCard(this.card.deal());
        this.player2.receiveCard(this.card.deal());
      }                 
    }
}//end for class game
 const game = new Game();
 game.card.shuffle();
 game.giveCards();
 for (let i = 0; i < game.player1.hand.length; i++) {
  console.log("player1 hand");
  console.log(game.player1.hand[i]);
  console.log("player2 hand");
  console.log(game.player2.hand[i]);
  if (game.player1.hand[i].value > game.player2.hand[i].value) {
    console.log("player 1 hand is higher");
    game.player1.incrementScore();
  }
  if (game.player1.hand[i].value < game.player2.hand[i].value) {
    console.log("player 2 hand is higher");
    game.player2.incrementScore();
  }
 if(game.player1.hand[i].value == game.player2.hand[i].value) {
  console.log("tie hand");
 }
}
console.log("player1 ", game.player1.getScore());
console.log("player2 ", game.player2.getScore());
//console.log("tie hand");

//hows score is higher 3 if statement game.player1.getscore, and etc for player2 and ==
if (game.player1.getScore() > game.player2.getScore()) {
  console.log("player 1 won");
 }
 if (game.player1.getScore() < game.player2.getScore()) {
   console.log("player 2 won");
   game.player2.getScore(); //instead of incrementScore
 }
 if(game.player1.getScore() == game.player2.getScore()) {
  console.log("Tie Game");
 }

