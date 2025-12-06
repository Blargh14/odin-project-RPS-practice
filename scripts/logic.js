buttons = document.querySelectorAll("button");

buttons.forEach(element => element.addEventListener("click", playRound));

// choice function logic

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(event) {
    return event.target.id;
}

let computerScore = 0;
let humanScore = 0;

function playRound(event) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice(event);

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("You tied with the computer with rock. Score: " + humanScore + ", " + computerScore);
                    break;
                case "paper":
                    computerScore++;
                    console.log("You lost to the computer with rock. Score: " + humanScore + ", " + computerScore);
                    break;
                case "scissors":
                    humanScore++;
                    console.log("You won against the computer with rock. Score: " + humanScore + ", " + computerScore);
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "paper":
                    console.log("You tied with the computer with paper. Score: " + humanScore + ", " + computerScore);
                    break;
                case "scissors":
                    computerScore++;
                    console.log("You lost to the computer with paper. Score: " + humanScore + ", " + computerScore);
                    break;
                case "rock":
                    humanScore++;
                    console.log("You won against the computer with paper. Score: " + humanScore + ", " + computerScore);
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "scissors":
                    console.log("You tied with the computer with scissors. Score: " + humanScore + ", " + computerScore);
                    break;
                case "rock":
                    computerScore++;
                    console.log("You lost to the computer with scissors. Score: " + humanScore + ", " + computerScore);
                    break;
                case "paper":
                    humanScore++;
                    console.log("You won against the computer with scissors. Score: " + humanScore + ", " + computerScore);
                    break;
            }
            break;
    }
}