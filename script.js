let score = 0;
let count = 0;

const gameArea = document.querySelector(".game");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', () => {
    fadeIcon(".scissors");
    fadeIcon(".paper");

    let playerSelection = "Rock";

    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    showRoundResult(result, playerSelection, computerSelection);
    score = gameScore(result, score);
    count = countRound(result, count);

    let resetBtn = createResetBtn();
        
    
    resetBtn.addEventListener('click', () => {
        reset(".choice");
        document.querySelector(".reset-container").removeChild(resetBtn);
    });
    
});

paper.addEventListener('click', () => {
    fadeIcon(".scissors");
    fadeIcon(".rock");

    let playerSelection = "Paper";

    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    showRoundResult(result, playerSelection, computerSelection);
    score = gameScore(result, score);
    count = countRound(result, count);

    let resetBtn = createResetBtn();    
    
    resetBtn.addEventListener('click', () => {
        reset(".choice");
        document.querySelector(".reset-container").removeChild(resetBtn);
    });
    
});

scissors.addEventListener('click', () => {
    fadeIcon(".paper");
    fadeIcon(".rock");

    let playerSelection = "Scissors";

    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    showRoundResult(result, playerSelection, computerSelection);
    score = gameScore(result, score);
    count = countRound(result, count);

    let resetBtn = createResetBtn();    
    
    resetBtn.addEventListener('click', () => {
        reset(".choice");
        document.querySelector(".reset-container").removeChild(resetBtn);
    });
    
});


// function game() {
//     let score = 0;
//     let count = 0;

//     while (count<5) {

//         showStartMessage(count, score);
//         let playerSelection = prompt("Rock, Paper, or Scissors?");
//         playerSelection = capitalizeChoice(playerSelection);
//         let computerSelection = getComputerChoice();
//         let result = playRound(playerSelection, computerSelection);

//         if (result === true) {
//             console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
//             score++;
//             count++;
//         } else if (result === false) {
//             console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
//             // score--;
//             count++;
//         } else if (result === null) {
//             console.log('Tie! Replay the round');
//         } else {
//             console.log('Not an option. Try again: Rock, Paper, or Scissors?');
//         }
//     }

//     showWinner(count, score);    
//  }

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

 function fadeIcon(icon) {
    let toFade = document.querySelector(icon);

    toFade.style.opacity = 0.1;
 }

 function showRoundResult(result, playerSelection, computerSelection) {
    if (result === true) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        // score++;
        // count++;
    } else if (result === false) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        // count++;
    } else if (result === null) {
        console.log('Tie! Replay the round');
    } else {
        console.log('Not an option. Try again: Rock, Paper, or Scissors?');
    }
 }

 function gameScore(result, score) {
    if (result === true) score++;
    return score;
 }

 function countRound(result, count) {
    if ((result === true) || (result === false)) {
        count++;
    }
    return count;
 }

 function reset(icons) {
    const toReset = document.querySelectorAll(icons);

    toReset.forEach((icon) => {
      icon.style.opacity = 1;
    });
 }

 function createResetBtn() {
    const resetContainer = document.querySelector(".reset-container");
    const resetBtn = document.createElement('div');
    resetBtn.classList.add("reset");
    resetBtn.textContent = 'Click to Reset!';
    resetBtn.setAttribute('style', 'font-size: 30px; font-weight: 500; border: 1px solid #000; padding:10px;');
    resetContainer.appendChild(resetBtn);
    
    return resetBtn;
 }