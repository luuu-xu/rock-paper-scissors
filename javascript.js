function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase());
    if (playerSelection === computerSelection) {
        return `Tie! ${playerSelection} ties ${computerSelection}.`;
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        } else if (computerSelection === 'Scissors') {
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        } else if (computerSelection === 'Scissors') {
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        } else if (computerSelection === 'Rock') {
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    }

}
function whoWon(result) {
    if (result.includes('Tie')) {
        return 'Both';
    } else if (result.includes('win')) {
        return 'Player';
    } else if (result.includes('lose')) {
        return 'Computer';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    playerChoice = window.prompt('Choose either Rock, Paper or Scissors');
    computerChoice = computerPlay();
    result = playRound(playerChoice, computerChoice);
    winner = whoWon(result);
    if (winner === 'Both') {
        playerScore += 1;
        computerScore += 1;
    } else if (winner === 'Player') {
        playerScore += 1;
    } else if (winner === 'Computer') {
        computerScore += 1;
    }
    console.log(`${result} Scoreboard: ${playerScore} : ${computerScore}`);
    // Round 2
    playerChoice = window.prompt('Choose either Rock, Paper or Scissors');
    computerChoice = computerPlay();
    result = playRound(playerChoice, computerChoice);
    winner = whoWon(result);
    if (winner === 'Both') {
        playerScore += 1;
        computerScore += 1;
    } else if (winner === 'Player') {
        playerScore += 1;
    } else if (winner === 'Computer') {
        computerScore += 1;
    }
    console.log(`${result} Scoreboard: ${playerScore} : ${computerScore}`);
    //Round 3
    playerChoice = window.prompt('Choose either Rock, Paper or Scissors');
    computerChoice = computerPlay();
    result = playRound(playerChoice, computerChoice);
    winner = whoWon(result);
    if (winner === 'Both') {
        playerScore += 1;
        computerScore += 1;
    } else if (winner === 'Player') {
        playerScore += 1;
    } else if (winner === 'Computer') {
        computerScore += 1;
    }
    console.log(`${result} Scoreboard: ${playerScore} : ${computerScore}`);
    //Round 4
    playerChoice = window.prompt('Choose either Rock, Paper or Scissors');
    computerChoice = computerPlay();
    result = playRound(playerChoice, computerChoice);
    winner = whoWon(result);
    if (winner === 'Both') {
        playerScore += 1;
        computerScore += 1;
    } else if (winner === 'Player') {
        playerScore += 1;
    } else if (winner === 'Computer') {
        computerScore += 1;
    }
    console.log(`${result} Scoreboard: ${playerScore} : ${computerScore}`);
    // Round 5
    playerChoice = window.prompt('Choose either Rock, Paper or Scissors');
    computerChoice = computerPlay();
    result = playRound(playerChoice, computerChoice);
    winner = whoWon(result);
    if (winner === 'Both') {
        playerScore += 1;
        computerScore += 1;
    } else if (winner === 'Player') {
        playerScore += 1;
    } else if (winner === 'Computer') {
        computerScore += 1;
    }
    console.log(`${result} Scoreboard: ${playerScore} : ${computerScore}`);
    // Announce final winner
    if (playerScore > computerScore) {
        console.log(`You are the winner! Final scoreboard: ${playerScore} : ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Computer is the winner! Final scoreboard: ${playerScore} : ${computerScore}`);
    } else {
        console.log(`It's a tie! Final scoreboard: ${playerScore} : ${computerScore}`);
    }
}

game();