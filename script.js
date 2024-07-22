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

console.log(getHumanChoice());