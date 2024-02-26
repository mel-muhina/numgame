let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
   return Math.floor(Math.random() * 10);
   
}

// Generate guesses and target number


const compareGuesses = (humanGuess, computerGuess, answer) => {

    const score1 = Math.abs(answer - humanGuess);
    const score2 = Math.abs(answer - computerGuess);

    if (score1 < score2) {
               return true;
    } else if (score2 < score1) {
                return false;
    } else {
                return true;
    }
   
} 

const updateScore = (winner) => {
     winner = compareGuesses()

     if (winner === true) {
        humanScore += 1;
       
    } else {
        computerScore += 1;
     
    }
    
}

const advanceRound = () => {
    currentRoundNumber += 1;
    return currentRoundNumber;
}


