
function game() {
    let score = 0;
    let count = 0;

    while (count<5) {

        showStartMessage(count, score);
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = capitalizeChoice(playerSelection);
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result === true) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            score++;
            count++;
        } else if (result === false) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            // score--;
            count++;
        } else if (result === null) {
            console.log('Tie! Replay the round');
        } else {
            console.log('Not an option. Try again: Rock, Paper, or Scissors?');
        }
    }

    showWinner(count, score);    
 }

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[oneTwoThree()];
}

function oneTwoThree() {
    return Math.floor(Math.random() * 3);
}


function playRound(playerSelection, computerSelection) {
    playerSelection = capitalizeChoice(playerSelection);
    
    if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
      (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
      (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        return false;
    } else if ((computerSelection === 'Rock' && playerSelection === 'Paper') ||
      (computerSelection === 'Paper' && playerSelection === 'Scissors') ||
      (computerSelection === 'Scissors' && playerSelection === 'Rock')) {
        return true;
    } else if (computerSelection === playerSelection){
        return null;
    } else {
        return NaN;
    }
}


 function capitalizeChoice(playerSelection) {
    let lowSelection = playerSelection.toLowerCase();
    let firstLetter = lowSelection.charAt(0).toUpperCase();
    capitalizedSelection = firstLetter + lowSelection.slice(1);
    return capitalizedSelection;
 }


 function showStartMessage(count, score) {
    if (count === 0) {
        console.log('New Game! Best out of 5. \n Round 1')
    } else {
        console.log(`Round ${count+1} \n Score: You ${score} vs Computer ${count-score}`);
    }
 }

 function showWinner(count, score) {
    if (score >= 3) {
        console.log(`Game Over! \n You Win! You: ${score} vs Computer: ${count-score}`);
    } else {
        console.log(`Game Over! \n You Lose! You: ${score} vs Computer: ${count-score}`)
    }
 }