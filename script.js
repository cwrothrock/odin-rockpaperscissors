let moves = ['rock', 'paper', 'scissors']; 

function computerPlay() {
    return moves[Math.floor(Math.random()*moves.length)]; 
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 
    if (computerSelection == playerSelection) {
        return "It's a draw!"; 
    }
    else if (computerSelection == "rock") {
        if (playerSelection == "paper") return "You win! Paper beats Rock"; 
        else return "You lose! Rock beats Scissors"; 
    }
    else if (computerSelection == "paper") {
        if (playerSelection == "rock") return "You lose! Paper beats Rock"; 
        else return "You win! Scissors beats paper"; 
    } 
    else if (computerSelection == "scissors") {
        if (playerSelection == "paper") return "You lose! Scissors beats Paper"; 
        else return "You win! Rock beats Scissors"; 
    }
    else return "Unknown computer selection"; 
}

function game() {
    let playerWins = 0; 
    let computerWins = 0; 
    let game = 0; 
    while (playerWins < 5 && computerWins < 5) {
        console.log("STARTING GAME " + (++game) + " : " + playerWins + '-' + computerWins); 
        playerSelection = prompt("What is your choice?")
        result = playRound(playerSelection, computerPlay()); 
        if (result.includes("win")) playerWins++;
        else if (result.includes("lose")) computerWins++; 
        console.log(result); 
    }
    if (playerWins == 5) console.log("You win " + playerWins + "-" + computerWins + "!"); 
    else console.log("You lose " + playerWins + "-" + computerWins + "!"); 
}

game(); 