// create array with ['rock', 'paper', 'scissors']
// function chooses integer 0, 1, or 2
// use integer to choose element from array

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    // let num = oneTwoThree();
    // console.log(num); // for debugging
    // return choices[num];
    return choices[oneTwoThree()];
}

// could rewrite this inside the other fxn as a anonymous or arrow fxn
function oneTwoThree() {
    return Math.floor(Math.random() * 3);
}

