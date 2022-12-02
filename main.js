
function getComputerChoice(){    
    result = Math.floor(Math.random()*3)
    return result
}

function playRound(playerSelection, computerSelection){
    const CHOICES = ["rock", "paper", "scissors"];

    let numPlayerSelection = CHOICES.indexOf(playerSelection.toLowerCase());
    console.log(`Player choose ${playerSelection}`);
    console.log(`Computer choose ${CHOICES[computerSelection]}`);

    if (((numPlayerSelection + 1) % 3) == computerSelection){
        return `You loose ${CHOICES[computerSelection]} beats ${playerSelection}`
    } else if (numPlayerSelection == computerSelection){
        return "It's a draw"
    } else return `You win ${playerSelection} beats ${CHOICES[computerSelection]}`
}

function game(){

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Make your choice:");
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

game();