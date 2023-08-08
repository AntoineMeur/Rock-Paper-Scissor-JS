function singleRound () {

    var options = [ "rock", "paper", "scissor"]; 
    var playerScore = 0;
    var computerScore = 0;

   
    
    var playerChoice = prompt( "choose between : rock paper scissor").toLowerCase() ;
    
    if ( options.includes(playerChoice) === false ) {
        alert("please choose between : rock paper scissor")
        return;
    }
    
    var computerChoice = options[Math.floor(Math.random() * options.length)];

alert("you choose : " + playerChoice + "\n" + "computer choose : " + computerChoice) ; 
  
    
    if ( playerChoice === computerChoice){
      alert("tie");
      
    } else if ((playerChoice === "rock" && computerChoice === "scissor") ||
              (playerChoice === "scissor" && computerChoice === "paper") ||
              (playerChoice === "paper" && computerChoice === "rock")) {
      alert("you win");
      return "player";
      
    } else {
      alert("Computer win");
      return "computer";
    }
    }
    
    function bestOfThree() {

        var playerScore = 0;
        var computerScore = 0;
        singleRound();

        while( playerScore < 2 && computerScore < 2) {
            var roundWinner = singleRound();
            if ( roundWinner === "player") {
                playerScore++ ;
            } else if (roundWinner === "computer") {
                computerScore++;
            }
            alert("your score is : " + playerScore + "\n" + "computerScore is :" + computerScore);
        }
        if (playerScore > computerScore) {
            alert("Congratulations ! You win");
        } else ( " Sorry ! you lost");
    }

    function startGame() {
        const playMode = prompt("Choose a mode:\n1. Single Round\n2. Best out of Three").toLowerCase();
        
        if (playMode === '1' || playMode === 'single round') {
          singleRound();
        } else if (playMode === '2' || playMode === 'best out of three') {
          bestOfThree();
        } else {
          alert("Invalid choice. Please choose a valid mode.");
        }
        
        const playAgain = confirm("Do you want to play again?");
        if (playAgain) {
          startGame();
        } else {
          alert("Thank you for playing!");
        }
      }

      startGame();