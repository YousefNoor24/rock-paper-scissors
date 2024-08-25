function humanScored() {
    return 0;
}

function computerScored() {
    return 1;
}

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

function playRound(humanChoice, computerChoice, computerScore, humanScore, announcer) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        announcer.textContent = "You lose! Rock lose to paper.";
        return computerScored();
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        announcer.textContent = "You win! Rock beats scissors.";
        return humanScored();
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        announcer.textContent = "You win! Paper beats rock.";
        return humanScored();
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        announcer.textContent  = "You lose! Paper lose to scissors.";
        return computerScored();
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        announcer.textContent  = "You lose! Scissors lose to rock.";
        return computerScored();
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        announcer.textContent  = "You win! Scissors beat paper."
        return humanScored();
    } else {
        announcer.textContent  = "Tie! " + humanChoice + " is equal to " + computerChoice;
    }
}


function playGame() {
    const computerScoreDiv = document.querySelector("#computer-score");
    const humanScoreDiv = document.querySelector("#human-score");
    const announcer = document.querySelector("#announcer");
    const choice = document.querySelector('#human-choice').querySelectorAll('button');

    let computerScore = 0;
    let humanScore = 0;
    let humanChoice = "";
    let computerChoice = "";
    let gameOn = true;

    choice.forEach((button) => {

        button.addEventListener('click', () => {
            if (gameOn) {
                humanChoice = button.value;
                computerChoice = getComputerChoice();
                roundPlay = playRound(humanChoice, computerChoice, computerScore, humanScore, announcer);
                roundPlay;
                if (roundPlay === humanScored()) {
                    humanScore++;
                    humanScoreDiv.textContent = `Human Score: ${humanScore}`;

                } 
                
                if (roundPlay === computerScored()) {
                    computerScore++;
                    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
                }

                if (humanScore >= 5 ) {
                    announcer.textContent = "Game Over! Congrats you won."
                    gameOn = false;
                }
                if (computerScore >= 5) {
                    announcer.textContent = "Game Over! You lose."
                    gameOn = false;
                }
            }
        });
    });
    
}
 
playGame();