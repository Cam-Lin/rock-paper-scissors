let computerWins = 0;
let userWins = 0;
let userChoice = null;
let computerChoice = null;
const resultsContainer = document.querySelector('#results');
const pResults = document.createElement('p');
const pResults2 = document.createElement('p');
const userWinsText = document.getElementById('user-wins');
const computerWinsText = document.getElementById('computer-wins');

//rock = 0, paper = 1, scissors = 2
//Substracting the  values we can decide the winner and reduce the number of cases
function playRound(computer) {
    pResults.classList.add('p-results');
    pResults2.classList.add('p-results');

    //Add if computerWins = 5, show defeat message, button to restart the game
    //Add if userWins = 5, show victory message, button to restart the game

    if (computer === parseInt(userChoice)) {
        setTimeout(showResults, 1600);
        pResults.textContent = 'Tie';
        pResults2.textContent = 'Never admit defeat!'
        resultsContainer.appendChild(pResults);
        resultsContainer.appendChild(pResults2);
        setTimeout(hideResults, 3000);
        console.log('tie');
    } else if (parseInt(userChoice) - computer === -1 || parseInt(userChoice) - computer === 2) {
        computerWins++;
        setTimeout(showResults, 1600);
        pResults.textContent = 'Lose';
        pResults2.textContent = 'Defeat is heresy!'
        resultsContainer.appendChild(pResults);
        resultsContainer.appendChild(pResults2);
        setTimeout(hideResults, 3000);
        console.log('compWins');
    } else if (parseInt(userChoice) - computer === 1 || parseInt(userChoice) - computer === -2) {
        userWins++;
        setTimeout(showResults, 1600);
        pResults.textContent = 'Win!';
        pResults2.textContent = 'Glory to mankind!'
        resultsContainer.appendChild(pResults);
        resultsContainer.appendChild(pResults2);
        setTimeout(hideResults, 3300);
        console.log('userWins'); 
    }
    setTimeout(scoreUpdate, 1600);
}

//Side menu animation
function openSideMenu() {
    displayOn();
    setTimeout(menuOpacityUp, 0010);
}
function closeSideMenu() {
    menuOpacityDown();
    const menuTime = document.querySelector('#menu-container');
    menuTime.addEventListener('transitionend', displayOff);
}

//Button color change
//User click triggers playRound
const playButtons = document.querySelectorAll('.fig-box');
playButtons.forEach((item) => {
    item.addEventListener('click', () => {
        function removePlay(){
            item.classList.remove('play');
        }
        item.classList.add('play');
        item.addEventListener('transitionend', removePlay);
        userChoice = item['id'];
        getComputerChoice();
        
        setTimeout(computerPlay, 800);
        setTimeout(computerPlayRemove, 1200);

        function computerPlay() {
            const computerButton = document.getElementById(computerChoice);
            computerButton.classList.add('computer-play');
        }
        function computerPlayRemove() {
            const computerButton = document.getElementById(computerChoice);
            computerButton.classList.remove('computer-play');
        }
        playRound(getComputerChoice());
      
    });
});

//Auxiliary playRound() functions
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3)
    return computerChoice;
}
function showResults() {
    resultsContainer.style.display = 'flex';
}
function hideResults() {
    resultsContainer.style.display = 'none';
}
function scoreUpdate() {
    userWinsText.textContent = userWins;
    computerWinsText.textContent = computerWins;
}

//Auxiliary sideMenu() functions
function menuOpacityUp() {
    document.getElementById('menu-container').style.opacity = '1';
}
function menuOpacityDown() {
    document.getElementById('menu-container').style.opacity = '0';
}
function displayOn() {
    document.getElementById('menu-container').style.display = 'flex';
}
function displayOff() {
    document.getElementById('menu-container').style.display = 'none';
}