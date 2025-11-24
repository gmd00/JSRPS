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

    else if (uselet === "p" ||uselet === "P")
        return "paper"
    else {
        console.log("Please try again with a valid input from R, p or s.")
       return getHumanChoice();
    }

}

let PS = 0;
let CS = 0;
let draws = 0;

function playRound(humanChoice, computerChoice)
{
    const OPS = PS;
    if (humanChoice === computerChoice)
    {
        draws = draws + 1;
        console.log("It is a draw")
            console.log(CS)
    console.log(PS)

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
    let msg =""

    if (OPS < PS)
    {
        msg = "You win," + humanChoice + " beats "+ computerChoice;
    }
    else
    {
        msg = "You lose " + humanChoice + " loses to " + computerChoice;
    }
    console.log(msg)
    console.log(CS)
    console.log(PS)
    return 1;
}

function playGame (){
    for ( let i = 0; i < 5 ; i++)
    {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);   
     }
    if (PS === CS)
        console.log("Its a draw. Player -"+ PS +" Computer -"+CS)
    else if (PS > CS)
                console.log("Winner Winner Chicken Dinner. Player -"+ PS +" Computer -"+CS)
    else                console.log("You lose gg. Player: "+ PS +" Computer: "+CS +" Ties: " + draws)
return 1;
}
playGame()