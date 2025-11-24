console.log("Hello World:)")

function getComputerChoice()
{
   let a = Math.random();
    if (a  < 0.3333){
        return "rock";
    }
    else if (a > 0.3333 && a <0.6666)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice()
{
    let uselet = prompt("Enter your choice between (R)ock, (P)aper or(Scissors");

    if (uselet === "R" ||uselet === "r")
        return "rock"
    else if (uselet === "S" ||uselet === "s")
        return "scissors"

    else 
        return "paper"

}

let PS = 0;
let CS = 0;

function playRound(humanChoice, computerChoice)
{
    const OPS = PS;
    if (humanChoice === computerChoice)
    {
        console.log("It is a draw")
        return 1; 
    }
    else if (humanChoice === "paper")
    {
        if (computerChoice === "scissors")
            CS = CS + 1;
        else 
            PS = PS + 1 
    }
    else if (humanChoice === 'rock')
    {
        if (computerChoice === 'paper')
            CS = CS + 1;
        else
            PS = PS + 1
    }
    else 
    {
        if (computerChoice === 'rock')
            CS = CS + 1
        else 
            PS = PS + 1;

    }

    if (OPS > PS)
    {
      const msg = "You win !!!" +humanChoice + " beats "+ computerChoice;
    }
    else
    {
        const msg = "You lose...+" + humanChoice + " loses to" + computerChoice;
    }
    console.log(msg)
    return 1;
}