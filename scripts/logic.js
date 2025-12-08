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

let scores = document.querySelector("#scores");
let result = document.querySelector("#result");

function playRound(event) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice(event);

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    result.textContent = "TIE";
                    break;
                case "paper":
                    computerScore++;
                    scores.textContent = score(humanScore, computerScore);
                    result.textContent = "YOU LOSE"
                    break;
                case "scissors":
                    humanScore++;
                    scores.textContent = score(humanScore, computerScore);
                    result.textContent = "YOU WIN"
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "paper":
                    result.textContent = "TIE";
                    break;
                case "scissors":
                    computerScore++;
                    scores.textContent = score(humanScore, computerScore);
                    result.textContent = "YOU LOSE"
                    break;
                case "rock":
                    humanScore++;
                    scores.textContent = score(humanScore, computerScore);
                    result.textContent = "YOU WIN"
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "scissors":
                    result.textContent = "TIE";
                    break;
                case "rock":
                    computerScore++;
                    scores.textContent = score(humanScore, computerScore);
                    result.textContent = "YOU LOSE"
                    break;
                case "paper":
                    humanScore++;
                    scores.textContent = score(humanScore, computerScore);
                    result.textContent = "YOU WIN"
                    break;
            }
            break;
    }

    function score(player, computer) {
        return `Player: ${player} CPU: ${computer}`;
    }

    if (humanScore === 5) {
        buttons.forEach(element => element.removeEventListener("click", playRound));
        alert("Human player wins!");
    }
    if (computerScore === 5) {
        buttons.forEach(element => element.removeEventListener("click", playRound));
        alert("Computer player wins!");
    }
}