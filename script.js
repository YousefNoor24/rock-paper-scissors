let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Please choose between Rock ('R' or 'r'), Paper ('P' or 'p'), or Scissors ('S' or 's').");

    if (humanChoice === 'R' || humanChoice === 'r') {
        return "Rock";
    } else if (humanChoice === 'P' || humanChoice === 'p') {
        return "Paper";
    } else if (humanChoice === 'S' || humanChoice === 's') {
        return "Scissors";
    } else {
        humanChoice = prompt("Please choose a vaild choice between Rock ('R' or 'r'), Paper ('P' or 'p'), or Scissors ('S' or 's').");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        return "You lose! Rock lose to paper.";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        return "You win! Rock beats scissors.";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        return "You win! Paper beats rock.";
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        return "You lose! Paper lose to scissors.";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;
        return "You lose! Scissors lose to rock.";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        return "You win! Scissors beat paper."
    } else {
        return "Tie! " + humanChoice + " is equal to " + computerChoice;
    }
}


function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    }
}
 
playGame();