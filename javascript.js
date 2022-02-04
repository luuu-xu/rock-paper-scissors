function computerPlay() {
    let num = Math.floor(Math.random() * 2);
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
}
/*
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    computerSelection = computerPlay().toLowerCase();
    console.log(computerSelection);
    if (playerSelection === 'rock') {
        message = (computerSelection === 'rock') ? `Tie! ${playerSelection} ties ${computerSelection}` :
            (computerSelection === 'paper') ? `You lose! ${computerSelection} beats ${playerSelection}` :
            `You win! ${playerSelection} beats ${computerSelection}`;
        console.log(message);
    } else if (playerSelection === 'paper') {
        message = (computerSelection === 'rock') ? `You win! ${playerSelection} beats ${computerSelection}` :
            (computerSelection === 'paper') ? `Tie! ${playerSelection} ties ${computerSelection}` :
            `You lose! ${computerSelection} beats ${playerSelection}`;
        console.log(message);
    } else if (playerSelection === 'scissors') {
        message = (computerSelection === 'rock') ? `You lose! ${computerSelection} beats ${playerSelection}` :
            (computerSelection === 'paper') ? `You win! ${playerSelection} beats ${computerSelection}` :
            `Tie! ${playerSelection} ties ${computerSelection}` ;
    }
}
*/

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
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));