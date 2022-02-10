function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
};

function determineResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = `Tie! ${playerSelection} ties ${computerSelection}.`;
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        } else if (computerSelection === 'Scissors') {
            result = `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            result = `You win! ${playerSelection} beats ${computerSelection}.`;
        } else if (computerSelection === 'Scissors') {
            result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            result = `You win! ${playerSelection} beats ${computerSelection}.`;
        } else if (computerSelection === 'Rock') {
            result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    }
    return result;
};

function whoWon(result) {
    //console.log('whoWon ran');
    if (result.includes('Tie')) {
        return 'Both';
    } else if (result.includes('win')) {
        return 'Player';
    } else if (result.includes('lose')) {
        return 'Computer';
    }
};

function updateScores(winner) {
    console.log(winner);
    if (winner === 'Player') {
        playerScore += 1;
    } else if (winner === 'Computer') {
        computerScore += 1;
    }
};

function announceWinner (playerScore, computerScore) {
    if ((playerScore % 5 === 0) && (playerScore !== 0)) {
        let again = confirm('You won!!! Press OK to rematch');
        if (again) {
            rematch();
            //console.log('rematch chose');
        } else {
            announcement.textContent = 'You won!!! Congrats! You beat the computer!';
        }
    } else if ((computerScore % 5 === 0) && (computerScore !== 0)) {
        let again = confirm('You lose... Press OK to rematch');
        if (again) {
            rematch();
            //console.log('rematch chose');
        } else {
            announcement.textContent = 'You lose... try again maybe?';
        }
    }
};

function rematch() {
    playerScore = 0;
    computerScore = 0;
    display.textContent = '';
    scoreboard.textContent = '';
    announcement.textContent = '';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = this.classList.value;
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase());
    //console.log('Your choice: ' + playerSelection);
    //console.log('Computer\'s choice: ' + computerSelection);

    const result = determineResult(playerSelection, computerSelection);
    display.textContent = result;
    
    winner = whoWon(result);
    updateScores(winner);
    scoreboard.textContent = playerScore + ' : ' + computerScore;

    //console.log(playerScore + ' ' + computerScore);
    announceWinner(playerScore, computerScore);
};

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const display = document.querySelector('.display');
const scoreboard = document.querySelector('.scoreboard');
const announcement = document.querySelector('.announcement');
const btnReset = document.querySelector('.reset');

let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);

btnReset.addEventListener('click', rematch);




// game();
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
};