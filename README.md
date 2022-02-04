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

3. Writes a new function game(), which plays a 5 round game that keeps score and reports a winner or loser at the end:
    - input should be either Rock, Paper or Scissors, inputted by the user, with prompt(), 5 times in total
    - desired ouput should be a declaration of this round's winner, with a scoreboard, each time after user inputs such choice of rock paper scissors, and after 5 times, a announcement of the winner with a final scoreboard
    - plan:
        prompt() asking user to choose either Rock, Paper or Scissors
        with playerChoice use playRound() to play a single round
        computerChoice comes from computerPlay()
        run and let result = playRound(playerChoice, computerChoice)
        declare this round's result
        with result, determine who won this round:
            whoWon(result) returns either 'Both', 'Player', 'Computer'
        winner = whoWon(result)
        add score to either playerScore or computerScore or both(tie)
        return the scoreboard
        repeat for 4 more times
        use the final scoreboard to anounnce the final winner, and return the scoreboard too

Possible improvements:
- playRound() is too messy, maybe I can make three statements of this round's result in the beginning
then return one statement "You win" if the result is that player won.
- maybe I can write a function which takes a parameter of this round's winner (provided by whoWon()),
then does the scorekeeping, returns both playerScore and computerScore.
- the last step in game(), annoucing the final winner, it can be done with another function too
it should take two parameters - playerScore and computerScore, then returns a string of annocement of such result.


