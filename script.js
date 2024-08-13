let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    let computerChoice;
    function getChoice(value) {
        
        if (value == 0) {
            return computerChoice = "Computer chose rock";
        }
        else if (value == 1) {
            return computerChoice = "Computer chose paper";
        }
        else {
            return computerChoice = "Computer chose scissors";
        }    
    }
    getChoice(value);
    console.log(computerChoice);
}
getComputerChoice();