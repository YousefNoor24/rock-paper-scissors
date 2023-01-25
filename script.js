const choice = document.getElementById('player-selection').querySelectorAll('button');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const announcer = document.getElementById('announcer');


choice.forEach((button) => {

    button.addEventListener('click', () => {
      button.id;
    });
});

function playerScored(){
    return 0;
}

function computerScored() {
    return 1;
}

function getComputerChoice() {

    const computerChoice = Math.floor(Math.random() * 3) + 1;
    
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else if (computerChoice === 3) {
        return "scissors";
    }
}


function capitalizeFirstLetter(word) {

    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1).toLowerCase();
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
}

function playRound(playerSelection, computerSelection) {

    const playerChoice = playerSelection.toLowerCase();
    
    if (playerChoice === "rock" && computerSelection === "paper") {
        announcer.innerHTML = "You Lose! Paper beats Rock.";
        return computerScored();
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        announcer.innerHTML =  "You Win! Rock beats Scissors.";
        return playerScored();
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        announcer.innerHTML =  "You Lose! Scissors beat Paper.";
        return computerScored();
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        announcer.innerHTML =  "You Win! Paper beats Rock.";
        return playerScored();
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        announcer.innerHTML =  "You Lose! Rock beats Scissors.";
        return computerScored();
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        announcer.innerHTML =  "You Win! Scissors beats Paper.";
        return playerScored();
    } else if (playerChoice === computerSelection) {
        announcer.innerHTML =  "Its a Draw! " + capitalizeFirstLetter(playerChoice) + " is equal to " + capitalizeFirstLetter(computerSelection); 
    }
    
}

function game() {
    
    let playerChoice = "";
    let computerChoice = "";
    let playerPoints = 0;
    let computerPoints = 0;
    
    choice.forEach((button) => {

        button.addEventListener('click', () => {
          playerChoice = button.value;
          computerChoice = getComputerChoice();
          playRound(playerChoice, computerChoice)
          if (playRound(playerChoice, computerChoice) === playerScored()){
            playerScore.innerHTML = "Player: " + playerPoints++;
          } else if (playRound(playerChoice, computerChoice) === computerScored()) {
            computerScore.innerHTML = "Computer: " + computerPoints++;
          }
        });
    });
//    for (let i = 1; i <= 5; i++) {
//        //playerChoice = prompt("Type in Rock, Paper, or Scissors");
//        computerChoice = getComputerChoice();
//        console.log("Round " + i + ": " + playRound(playerChoice, computerChoice));    
//    }
//    console.log("Game Over");
    
}

game();
