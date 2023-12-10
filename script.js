const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const dialogue = document.querySelector("#dialogue");
const winTracker = document.querySelector("#wins");
const lossTracker = document.querySelector("#losses");
const tieTracker = document.querySelector("#ties");

let wins = 0;
let losses = 0;
let ties = 0;
let lastButtonUsed;

function getBotChoice()
{
    const num = Math.floor(Math.random() * 3);
    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else return "scissors";
}

function playGame(playerChoice, button)
{
    if (lastButtonUsed !== undefined)
    {
        lastButtonUsed.classList.remove("red", "green", "yellow");
    }
    lastButtonUsed = button;

    const botChoice = getBotChoice();
    switch(true)
    {
        case playerChoice === botChoice:
            tieTracker.textContent = `Ties: ${++ties}`;
            dialogue.textContent = `Tie! The bot picked ${botChoice}.`;
            button.classList.add("yellow");
            break;
        case playerChoice === "rock" && botChoice === "scissors":
        case playerChoice === "paper" && botChoice === "rock":
        case playerChoice === "scissors" && botChoice === "paper":
            winTracker.textContent = `Wins: ${++wins}`;
            dialogue.textContent = `You Win! The bot picked ${botChoice}.`;
            button.classList.add("green");
            break;
        default:
            lossTracker.textContent = `Losses: ${++losses}`;
            dialogue.textContent = `You Lose! The bot picked ${botChoice}.`;
            button.classList.add("red");
    }
}

rockButton.addEventListener("click", () => {
    playGame("rock", rockButton);
});

paperButton.addEventListener("click", () => {
    playGame("paper", paperButton);
});

scissorsButton.addEventListener("click", () => {
    playGame("scissors", scissorsButton);
});