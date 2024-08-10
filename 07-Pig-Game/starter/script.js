// Implement Strict Mode for JS Coding
'use strict';

// Starter Code:
// Recall, selector for unique ID is # hashtag
const score0El = document.querySelector('#score--0');

// Another way. Slightly faster:
const score1El = document.getElementById('score--1'); // Works the same, but no hashtag

// Dice conditions - we will hide later
const diceEl = document.querySelector('.dice');

// Set context to begin at zero
// This will impact the webpage immediately:
score0El.textContent = 0;
score1El.textContent = 0;

// Hide the dice:
//
diceEl.classList.add('hidden');


