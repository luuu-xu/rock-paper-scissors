# rock-paper-scissors
A project from TOP: creating rock paper scissors with HTML, CSS and JS.

Here's how the project is solved following TOP steps:

1. The game is played against the computer, so I need a function called computerPlay() that randomly returns either 'Rock', 'Paper' or 'Scissors':
    - there should be no input
    - desired output should be either rock, paper or scissors
    - plan: 
        when computerPlay() is called
        a random integer between 0, 1, 2 should be picked
        if 0, then return 'Rock'
        if 1, then return 'Paper'
        if 2, then return 'Scissors'

2. Writes a function that plays a single round of Rock Paper Scissors, which takes two parameters - the playerSelection and computerSelection - and then return a string which declares the winner of the round:
    - these two inputs should be both strings, either rock paper or scissors
    - desired output is a string, declaring the winner, and explains the reason
    - plan:
        input playerSelection, and computerSelection
        computerSelection should be from computerPlay()
        playerSelection should be a string (case insensitive)
        change both selections to lowercase with first letter uppercase
        if playerSelection === computerSelection
        then return e.g. "Tie! Rock ties Rock."
        if playerSelection !== computerSelection
            if playerSelection is Rock
                if computerSelection is Paper, then return "You lose! Paper beats Rock."
                if computerSelection is Scissors, then return "You win! Rock beats Scissors."
            if playerSelection is Paper
                if computerSelection is Rock then return "You win! Paper beats Rock."
                if computerSelection is Scissors, then return "You lose! Scissors beats Paper."
            if playerSelection is Scissors
                if computerSelection is Rock then return "You lose! Rock beats Scissors."
                if computerSelection is Paper then return "You win! Scissors beats Paper."
        
