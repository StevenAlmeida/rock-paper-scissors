const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");
const display = document.querySelector("p");

function getBotChoice()
{
    const num = Math.floor(Math.random() * 3);
    if (num === 0) return "Rock";
    else if (num === 1) return "Paper";
    else return "Scissors";
}

function newGame(playerChoice)
{
    const botChoice = getBotChoice();
    switch(true)
    {
        case playerChoice === botChoice:
            display.textContent = `Tie! The bot chose ${botChoice}`;
            break;
        case playerChoice === "Rock" && botChoice === "Scissors":
        case playerChoice === "Paper" && botChoice === "Rock":
        case playerChoice === "Scissors" && botChoice === "Paper":
            display.textContent = `You Win! The bot chose ${botChoice}`;
            break;
        default:
            display.textContent = `You Lose! The bot chose ${botChoice}`;
    }
}

rockButton.addEventListener("click", () => {
    newGame("Rock");
});

paperButton.addEventListener("click", () => {
    newGame("Paper");
});

scissorsButton.addEventListener("click", () => {
    newGame("Scissors");
});