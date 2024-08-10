// Implement Strict Mode for JS Coding
'use strict';

// Starter Code:
// Recall, selector for unique ID is # hashtag

// Define some objects:
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // Works the same, but no hashtag
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn.btn--new');  // react to buttons
const btnRoll = document.querySelector('.btn.btn--roll');
const btnHold = document.querySelector('.btn.btn--hold');

// Display score element:
const current0El = document.querySelector('#current--0'); // Player 0
const current1El = document.querySelector('#current--1'); // Player 1 display score


// Variables for score tracking:
let currentScore = 0;
let activePlayer = 0; // Player 0 always begins, 1 is Player 1.

// Store total scores:
const scores = [0,0]; 

// Starting Conditions:
// Set context to begin at zero
// This will impact the webpage immediately:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // hide dice

// // Rolling dice conditions:
btnRoll.addEventListener('click', function() {

    // 1. Generate random dice roll. Random num from 1 to 6.
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png` // template literal to get the image!
    console.log(`A ${dice} was rolled`);

    // 3. Check for rolled 1: if true, switch player
    if (dice != 1){
        // Add dice to current score:
        currentScore += dice;

        // Score current set - dynamic set.
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;


        console.log(`Current score: ${currentScore}`);
    } else {// All other 
        // Set current player score to zero:
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        console.log(`Current score: ${currentScore}`);

        // Switch player - assign the active player
        // Ternary operator, outcome is enclosed here and saved to activePlayer
        // If you're 0, then "1" happens, if you're 1, then the alt happens, which is 0
        activePlayer = (activePlayer === 0 ? 1: 0);

        // currentScore needs to be set back to zero:
        currentScore = 0;

    }

    console.log(`Active Player is ${activePlayer}!`)

});




