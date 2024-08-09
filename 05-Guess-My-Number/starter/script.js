// Begin with Strict Mode:
'use strict';

// My Code:

// Use this to select items:
// Class --> .classname
// unique id -> #uniqueid
console.log(document.querySelector('.message')); // first DOM

// Other:
console.log(document.querySelector('.message').textContent); // The text is "start guessing..." YAY!

// We will select the message and change text to Connect number.
document.querySelector('.message').textContent = "Correct Number!"

// Console check - we see it's been permanently changed to Correct Number.
// If page is reloaded or changed in another way, it will revert away.
console.log(document.querySelector('.message').textContent); 

// Do the same thing for secret number and score:
// label-score - secret number
// score
document.querySelector('.number').textContent= 50;
document.querySelector('.score').textContent= 100;

// Select the block, get the value entered. Keep in mind "guess" is an input field.
console.log(document.querySelector('.guess').value);

// Manually override too, but instead of user adding
document.querySelector('.guess').value = 50;