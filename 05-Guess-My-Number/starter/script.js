// Begin with Strict Mode:
'use strict';

// -------------- LECTURE #1 - SELECTION & MANIPULATION IN DOM --------------

// Use this to select items:
// Class --> .classname
// unique id -> #uniqueid
console.log(document.querySelector('.message')); // first DOM

// Other:
console.log(document.querySelector('.message').textContent); // The text is "start guessing..." YAY!

// We will select the message and change text to Connect number.
// document.querySelector('.message').textContent = "Correct Number!"

// Console check - we see it's been permanently changed to Correct Number.
// If page is reloaded or changed in another way, it will revert away.
// console.log(document.querySelector('.message').textContent); 

// Do the same thing for secret number and score:
// label-score - secret number
// score
// document.querySelector('.number').textContent= 13;
// document.querySelector('.score').textContent= 10;

// // Select the block, get the value entered. Keep in mind "guess" is an input field.
// console.log(document.querySelector('.guess').value);

// // Manually override too, but instead of user adding
// document.querySelector('.guess').value = 23;

// // See it's now permanently 23 due to the permanent set
// console.log(document.querySelector('.guess').value);


// -------------- LECTURE #2 - HANDLE CLICK EVENTS --------------

// Connected to .check object, which is the bottom item itself
// addEventListener() is one of the most popular methods
// Listen for a click.

    // // Show "Correct Number!"
    // document.querySelector('.message').textContent = "Correct Number!";


// Create new number - between 0 and 20:
const secretNumber = Math.trunc(Math.random()*20)+1;

// Show on the webpage:
document.querySelector('.number').textContent = secretNumber;


// Store starting original score
// We could use DOM to read and just update the score from there.
// Not a good practice, should store this somewhere.
let score = 20;


// addEventListener(action, function pass)
// This function is called here, and only exists once in this script scope.
// We did not define the function anywhere else.
document.querySelector('.check').addEventListener('click', function() {
    // Function will receive and console log the guess.
    

    // Save to a variable
    const guess = Number(document.querySelector('.guess').value);

    // Check type
    console.log(typeof guess);

    // Game Logic Evaluation:

     // When number invalid:
    if (!guess){
        document.querySelector('.message').textContent = "Please give a valid whole number!😎";
    } 
    
    // When player wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Great job you guessed the right number 🎊!";
        //Update score and update on the page:
        score = score + 1;

        // Change background color to "green" for victory! it's style.backgroundColor
        // All properties attributes must be a string
        document.querySelector('body').style.backgroundColor = '#60b347'; // Green Color
        document.querySelector('.number').style.width = '30rem';

    } 

    // When number too high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too high!";
            score--;
            document.querySelector('.score').textContent = score;
            console.log(score);
        } else {
            document.querySelector('.message').textContent = "You lose the game! :(";
            document.querySelector('.score').textContent = 0;
            console.log(score);
        }
    } 
     // When number too low
    else if (guess < secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = "Too low!";
            score--;
            document.querySelector('.score').textContent = score;
            console.log(score);
        } else {
            document.querySelector('.message').textContent = "You lose the game! :(";
            document.querySelector('.score').textContent = 0;
            console.log(score);
        }
    }

    // // Show score backend and display the new score.
    // console.log(score);
    // document.querySelector('.score').textContent = score;
    
});

// More DOM manipulation.

