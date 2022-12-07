const choiceBtns = document.querySelectorAll('.btn-choices');
var playerScore = 0;
var computerScore = 0;
var roundNum = 0;
var currentMaxScore = 0;
const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice(){    
    result = Math.floor(Math.random()*3)
    return result
}

function playRound(playerSelection, computerSelection){
    let numPlayerSelection = CHOICES.indexOf(playerSelection.toLowerCase());
    if (((numPlayerSelection + 1) % 3) == computerSelection){
        return -1;
    } else if (numPlayerSelection == computerSelection){
        return 0 
    } else return 1 
    
};

function updateScore(result){
    const container = document.querySelector('#current-score');
    playerScore += Math.max(0, result);
    computerScore += Math.max(0, result*(-1));
    currentMaxScore = Math.max(playerScore, computerScore);

    container.textContent = `${playerScore} - ${computerScore}`;
    roundNum++;
};

function endGame(){
    // change button style to lock style;
    choiceBtns.forEach(element => element.disabled = true);
    const container = document.querySelector('#result-match');
    
    const resultComparison = playerScore - computerScore;

    switch (true) {
        case (resultComparison <= -1):
            container.textContent = "You loose, you looser!";
            break;
        case (resultComparison == 0):
            container.textContent = "It's a draw for this match!";
            break;
        case (resultComparison >= 1):
            container.textContent = "You win this match, for now!";
            break;
    }
    
};

function displayRoundLog(result, playerSelection, computerSelection){
    const container = document.querySelector('#result-log');
    const content = document.createElement('div');
    content.classList.add('result-content');
    switch (result) {
        case -1:
            textResult = `You loose ${CHOICES[computerSelection]} beats ${playerSelection}`;
            break;
        case 0:
            textResult = "It's a draw";
            break;
        case 1:
            textResult = `You win ${playerSelection} beats ${CHOICES[computerSelection]}`;
            break;
    }
    content.textContent = textResult;
    container.appendChild(content);
}

choiceBtns.forEach(element => element.addEventListener('click', e => {
    let playerSelection = e.target.getAttribute('data-choice');
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    displayRoundLog(result, playerSelection, computerSelection);
    updateScore(result);
    currentMaxScore === 5 ? endGame() : null;
}));

// function game(){

//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Make your choice:");
//         let computerSelection = getComputerChoice();
//         result = playRound(playerSelection, computerSelection);
//         console.log(result);
//     }
// }
