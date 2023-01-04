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
        return "You Lose! Paper beats Rock.";
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors.";
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beat Paper.";
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock.";
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors.";
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper.";
    } else if (playerChoice === computerSelection) {
        return "Its a Draw! " + capitalizeFirstLetter(playerChoice) + " is equal to " + capitalizeFirstLetter(computerSelection); 
    } else {
        return "Please choose Rock, Paper, or Scissors";
    }
}

function game() {
    
    let playerChoice = "";
    const computerChoice = getComputerChoice();

    for (let i = 1; i <= 5; i++) {
        playerChoice = prompt("Type in Rock, Paper, or Scissors");
        console.log("Round " + i + ": " + playRound(playerChoice, computerChoice));    
    }
}

game();