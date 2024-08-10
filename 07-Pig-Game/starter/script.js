// Implement Strict Mode for JS Coding
'use strict';

// Starter Code:
// Recall, selector for unique ID is # hashtag

// Define some objects:
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn.btn--new');  // Reset button for new
const btnRoll = document.querySelector('.btn.btn--roll');
const btnHold = document.querySelector('.btn.btn--hold');

// Display current score element 
const current0El = document.querySelector('#current--0'); // Player 0 display score
const current1El = document.querySelector('#current--1'); // Player 1 display score

// Tracker of total player score (at top)
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // Works the same, but no hashtag

// Variable to track game status - playing or ending?
let playing = true;

// Selection Elements for background:
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Variables for score tracking:
let currentScore = 0;
let activePlayer = 0; // Player 0 always begins, 1 is Player 1.

// Store total scores per player - left = Player 0, right = Player 1;
let scores = [0,0]; 

// Starting Conditions:
// Set context to begin at zero
// This will impact the webpage immediately:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // hide dice

// Game Functions:

// 1) Switch Players:
const switchPlayers = function(){

    // CURRENT PLAYER: Current Score needs to be internally reset
    currentScore = 0;

    // CURRENT PLAYER: Visually fix this...
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    // -- Officially change to another player:
    // Change between players at the end:
    activePlayer = (activePlayer === 0 ? 1: 0);

    // Toggle to switch between active players - visual
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};


// // Rolling dice conditions:
btnRoll.addEventListener('click', function() {

    if (playing) {
    // Functionality to switch between players:
    
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
    } else {// All other 
        // Set current player score to zero:
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        console.log(`Current score: ${currentScore}`);

        switchPlayers();}

        // // Switch player - assign the active player
        // // Ternary operator, outcome is enclosed here and saved to activePlayer
        // // If you're 0, then "1" happens, if you're 1, then the alt happens, which is 0
        // activePlayer = (activePlayer === 0 ? 1: 0);

        // // currentScore needs to be set back to zero:
        // currentScore = 0;

        // // Visually change the background when the player changes
        // // Toggle in WebDev - similar to flipping lightswitch.
        // // Toggle means taking turns adding and removing something class related.
        // // Player 0 starting will have this removed, and Player 1 will have it added.
        // // Vice versa infinitely!
        // player0El.classList.toggle('player--active');
        // player1El.classList.toggle('player--active');
    }});

// Functionality to hold score and switch player
btnHold.addEventListener("click", function (){
    if (playing){

    // Internally, let's update the scores array:
    scores[activePlayer] = scores[activePlayer] + currentScore;
    
    // Visually display the new total score
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    // Check if any player's score is or exceeds 100;
    if (scores[activePlayer] >= 20) {
        // Finishes the game:
        playing = false;

        // Remove the active background coloring:
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        // Add the winner coloring
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

        // Get rid of the dice icon:
        diceEl.classList.add('hidden');

    } else { 
        // Activate function to change active player:
        switchPlayers();
    }}
});

// Functionality to fully reset the game
btnNew.addEventListener("click", function(){
    // Set playing variable back to true, restoring functionality:
    playing = true

    // Reset internal variables:
    currentScore = 0;
    scores = [0,0] 

    // Reset the scores for both players. Loop thru both players.
    for(let i = 0; i <2; i ++){
        // Reset the Current Score:
        document.getElementById(`current--${i}`).textContent = 0;

        // Reset the total score at the top:
        document.getElementById(`score--${i}`).textContent = 0;

        // Restore the visual appearance to default for both.
        // Scenario to remove back:
        document.querySelector(`.player--${i}`).classList.remove('player--winner');
        document.querySelector(`.player--${i}`).classList.remove('player--active');

    // Restore the visual appearance. Player 0 will always be the active player at the beginning:
    document.querySelector('.player--0').classList.add('player--active');

    // Set active player back to player 0:
    activePlayer = 0;
    }
});


// Jonas had set a function to establish starting conditions...

const init = function(){

    // Reset scores:
    const scores = [0,0];
    let currentScore = 0;
    let activePlayer = 0;
    let playing = true;


    // Text Content:
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    // Hidden:
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

};


// // Debugging and testing
// console.log(`Active Player is ${activePlayer}!`);


