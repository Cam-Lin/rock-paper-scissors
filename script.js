//The indexes of the choices array will be used compare the result of the game, using just the first letter in every word also accounts for orthography mistakes.
const choices = ['r', 'p', 's'];
//Two names arrays are used to create the win/lose/tie messages to account for capitalization.
const names = ['rock', 'paper', 'scissors'];
const namesCapitalized = ['Rock', 'Paper', 'Scissors'];

             
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(computer) {
    let userChoice = prompt("What's your choice?").toLowerCase()[0];
    if (computer === choices.indexOf(userChoice)) {
        return `It's a tie! You both chose ${names[computer]}.`;
    } else if (choices.indexOf(userChoice) - computer === -1 || choices.indexOf(userChoice) - computer === 2) {
        return `You lose! ${namesCapitalized[computer]} beats ${names[choices.indexOf(userChoice)]}.`;
    } else if (choices.indexOf(userChoice) - computer === 1 || choices.indexOf(userChoice) - computer === -2) {
        return `You win! ${namesCapitalized[choices.indexOf(userChoice)]} beats ${names[computer]}.`; 
    }
}




console.log(playRound(0));