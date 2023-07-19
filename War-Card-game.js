


//const deck = new Array(SUITES, VALUES);
class Deck {        
    constructor(){
        const suits = ["♠", "♣", "♥", "♦"]
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
        let deck =[];

     for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < ranks.length; x++) {            
            let card = {
                suit: suits[i],
                rank: ranks[x],
                value: x,
               
            }
             deck.push(card);
            }
        
        }

         //shuffle the deck below this and before the return.
    //      let i =deck.length;
    //            for (let i = deck.length - 1; i > 0; i--) {
    //                const j = Math.floor(Math.random() * (i + 1));
    //               [deck[i], deck[j]] = [deck[j], deck[i]];
    //            }
    //        }
             
    //  }; 
    // //  let i = deck.length;
    //   while (--i > 0) {
    //       let randIndex = Math.floor(Math.random() -0.5);
    //       [deck[randIndex], deck[i]] = [deck[i], deck[randIndex]];
    //   }
          console.log(deck);
  
         let newDeck = new Deck();
         console.log(newDeck);
          const split1 = newDeck.slice(0-26);
          const split2 = newDeck.slice(27-52);
          console.log(split1);
          console.log(split2);
        
        
        //deck.sort(() => Math.random() - 0.5); Michael's shuffle
        //fisher yates shuffle method
           

    // }

        
    
         }
         shuffle(){
            const shuffle = () => {
                for (let i = this.deck.length - 1; i > 0; i--) { 
                  const j = Math.floor(Math.random() * (i + 1)); 
                  [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; 
                } 
                return this.deck; 
              }; 
                
              // Usage 
              const deck = []; 
              const shuffledDeck = shuffle(deck); 
              
              console.log(deck);  
            
         }
         split(){
            let newDeck = new Deck();
         console.log(newDeck);
          const split1 = newDeck.slice(0-26);
          const split2 = newDeck.slice(27-52);
          console.log(split1);
          console.log(split2);
        
        
         }
     }
     let newDeck = new Deck(); 
     newDeck.shuffle();
     
class players {

     }
class Game{
    
}
