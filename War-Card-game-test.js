//EXAMPLE

// const expect =chai.expect;

// describe('War Card Game', () => {
//         it('should return a string', () => {
//             var x = 'player 1 won'('game.player1.getScore() > game.player2.getScore()');  //add this in
//             expect(typeof warCardGame()).to.equal('string');
//         }
//     )
//     it('should return a string', () => {
//         expect(typeof warCardGame()).to.equal('string');
//     }
// )
// })

//Who's score is higher 3 if statement game.player1.getscore, and etc for player2 and ==
// if (game.player1.getScore() > game.player2.getScore()) {
//     console.log("player 1 won");
//    }
//    if (game.player1.getScore() < game.player2.getScore()) {
//      console.log("player 2 won");
//      game.player2.getScore(); //instead of incrementScore
//    }
//    if(game.player1.getScore() == game.player2.getScore()) {
//     console.log("Tie Game");
//    }
//   describe('War Card Game', function() {
//     describe('#player 1 won ', function(){
//         var x = 'player 1 won'('game.player1.getScore() > game.player2.getScore()');
//         expect(x).to.equal('game.player1.getScore() > game.player2.getScore()');
//     });
//     it ('should throw an error if first parameter is not meet', function(){
//         expect(function() {
//             'player 1 won game.player1.getScore() > game.player2.getScore()'(15, 10);
//         }).tothrow(Error);
//         });
//     });

//*****************************TEST 1************************ */
// Import Chai's expect function
const expect = chai.expect;

// Describe your test cases using Mocha's describe function
describe("War Card Game", function () {
  describe("When player 1 has higher score", function () {
    it("should declare player 1 as the winner", function () {
      // Set up your game with the appropriate scores
      const game = new Game();
      game.player1.score = 15;
      game.player2.score = 10;

      // Call the function you want to test
      let result = "";
      if (game.player1.getScore() > game.player2.getScore()) {
        result = "player 1 won";
      } else if (game.player1.getScore() > game.player2.getScore()) {
        result = "player 2 lost";
      } else {
        result = "Tie Game";
      }

      // Assert the result using Chai's expect
      expect(result).to.equal("player 1 won");
    });
  });

  // Add more test cases as needed
});
//****************** TEST 2*************************** */I did 2 because I was not sure if I did it right the 1st time, too easy.
describe('War Card Game', function (){
  describe(" Both Players received Cards", function (){
    it("Should have both players cards", function(){
      const game = new Game();
      game.player1.receiveCard = 26;
      game.player2.receiveCard =26;
  
      })
    })
  })

