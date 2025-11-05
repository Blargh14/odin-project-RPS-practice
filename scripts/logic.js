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


}