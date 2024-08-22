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
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    rockBtn.addEventListener("click", () => {
        console.log("Rock button is clicked.");
        return "Rock";
    });

    paperBtn.addEventListener("click", () => {
        console.log("Paper button is clicked.");
        return "Paper";
    });

    scissorsBtn.addEventListener("click", () => {
        console.log("Scissors button is clicked.");
        return "Scissors";
    });
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
    
    
}
 
getHumanChoice();