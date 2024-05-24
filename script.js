console.log("Hello World");

function getHumanChoice() {
    let choice = prompt("What's your choice: ");
    choice = choice.toLowerCase();
    if (!(choice == "rock" || choice == "paper" || choice == "scissors")) {
        alert ("Please type one of the following options \nrock\npaper\nscissors")
        return getHumanChoice();
    }
    return choice;
}

function getComputerChoice() {
    let choice = (Math.floor(Math.random()*3));
    // console.log(choice);
    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "paper"
    } else if (choice === 2) {
        return "scissor"
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    console.log(humanSelection);
    console.log(computerSelection);



    if ((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper")) {
        humanScore++;
        console.log(`You win ${humanSelection} beats ${computerSelection}`);
    } else if (humanSelection === computerSelection) {
        console.log(`Draw, you both choose ${humanSelection}`);
    } else {
        computerScore++;
        console.log(`You lose ${computerSelection} beats ${humanSelection}`);
    }
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    // console.log(humanScore);
    // console.log(computerScore);
    if (humanScore > computerScore) {
        console.log(`Congrats! You win ${humanScore} - ${computerScore}`);
    } else if (humanScore == computerScore) {
        console.log(`Draw ${humanScore} - ${computerScore}`);
    } else {
        console.log(`You lose ${computerScore} - ${humanScore}`);
    }

    humanScore = 0;
    computerScore = 0;

    // console.log(humanScore);
    // console.log(computerScore);

}