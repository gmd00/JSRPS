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
console.log(getHumanChoice());

