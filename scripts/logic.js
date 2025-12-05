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

function getHumanChoice() {
    let choice = prompt("Please enter ROCK, PAPER, or SCISSORS.", "rock");
    choice = choice.toLowerCase();

    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        return "rock"; // default to rock even though they say not to handle it.
    } else {
        return choice;
    }
}

// Main game function

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    if (humanScore > computerScore) {
        return "YOU WIN";
    } else if (computerScore > humanScore) {
        return "YOU LOSE";
    } else {
        return "YOU TIE";
    }

    function playRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

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
}

let result = playGame();
console.log(result);