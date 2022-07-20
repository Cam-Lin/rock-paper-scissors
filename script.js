//The indexes of the choices array will be used compare the result of the game, using just the first letter in every word also accounts for orthography mistakes.
const choices = ['r', 'p', 's'];
//Two names arrays are used to create the win/lose/tie messages to account for capitalization.
const names = ['rock', 'paper', 'scissors'];
const namesCapitalized = ['Rock', 'Paper', 'Scissors'];
let computerWins = 0;
let userWins = 0;

//Computer will randomly choose a number between 0-2 as its play
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

//This function plays one round
function playRound(computer) {
    let userChoice = prompt("What's your choice?").toLowerCase()[0];
    
    if (computer === choices.indexOf(userChoice)) {
        return `It's a tie! You both chose ${names[computer]}.`;
    } else if (choices.indexOf(userChoice) - computer === -1 || choices.indexOf(userChoice) - computer === 2) {
        computerWins++;
        return `You lose! ${namesCapitalized[computer]} beats ${names[choices.indexOf(userChoice)]}.`;
    } else if (choices.indexOf(userChoice) - computer === 1 || choices.indexOf(userChoice) - computer === -2) {
        userWins++;
        return `You win! ${namesCapitalized[choices.indexOf(userChoice)]} beats ${names[computer]}.`; 
    }
}

//The full game lasts 5 rounds
function game() {
    let i = 5;
    while (i > 0) {
        i--;
        console.log(playRound(getComputerChoice()));
    }
    return `Computer won: ${computerWins} times
    User won: ${userWins} times`;

}


console.log(game());