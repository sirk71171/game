let humanScore = 0;
let computerScore = 0;
let draws = 0;
let computerChoice = "noDecision";
function getComputerChoice() {
    num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return computerChoice = "rock";
    }
    else if (num == 1) {
        return computerChoice = "paper";
    }
    else {
        return computerChoice = "scissors";
    }    
}
function getHumanChoice () {
    let humanChoice = prompt("Choose rock paper or scissors");
    return humanChoice.toLowerCase();
}
function playRound(humanChoice, computerChoice) {


    if (humanChoice == computerChoice) {
        draws = draws + 1;
        return "Draw";
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore = computerScore + 1;
        return "You lose. Paper beats Rock."
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {   
        humanScore = humanScore + 1;
        return "You win! Rock beats Scissors."
        
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore = computerScore + 1;
        return "You lose. Scissors beats Paper."
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore = humanScore + 1;
        return "You win! Paper beats Rock."
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore = computerScore + 1;
        return "You lose. Rock beats Scissors."
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore = humanScore + 1;
        return "You win! Scissors beats Paper."
    }
}
function playGame () {
    //Game 1
    getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice,computerChoice);
    //Game 2
    getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice,computerChoice);
    //Game 3
    getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice,computerChoice);
    //Game 4
    getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice,computerChoice);
    //Game 5
    getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice,computerChoice);
}
playGame();
console.log("You won " + humanScore + " games.");
console.log("The computer won " + computerScore + " games.")
console.log("There were " + draws + " draws.")