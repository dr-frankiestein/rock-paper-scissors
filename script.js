// create array with ['rock', 'paper', 'scissors']
// function chooses integer 0, 1, or 2
// use integer to choose element from array

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    // let num = oneTwoThree();
    // console.log(num); // for debugging
    // return choices[num];
    return choices[oneTwoThree()];
}

// could rewrite this inside the other fxn as a anonymous or arrow fxn
function oneTwoThree() {
    return Math.floor(Math.random() * 3);
}

// write a function that plays a round of RPS
// takes two parameters playerSelection & computerSelection
// returns string declaring winner of round: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {

    playerSelection = capitalizeChoice(playerSelection);
    
    if ((playerSelection === 'Rock' && computerSelection === 'Paper')
      || (playerSelection === 'Paper' && computerSelection === 'Scissors')
      || (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((computerSelection === 'Rock' && playerSelection === 'Paper')
      || (computerSelection === 'Paper' && playerSelection === 'Scissors')
      || (computerSelection === 'Scissors' && playerSelection === 'Rock')) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === playerSelection){
        return 'Tie! Replay the round';
    };
}



 function capitalizeChoice(playerSelection) {

    let lowSelection = playerSelection.toLowerCase();
    let firstLetter = lowSelection.charAt(0).toUpperCase();
    capitalizedSelection = firstLetter + lowSelection.slice(1);
    // console.log(capitalizedSelection);

    return capitalizedSelection;
 }

 let playerSelection = 'paper'; 
 const computerSelection = getComputerChoice();

 console.log('You: ' + capitalizeChoice(playerSelection));
 console.log('Computer: ' + computerSelection);

 console.log(playRound(playerSelection, computerSelection));