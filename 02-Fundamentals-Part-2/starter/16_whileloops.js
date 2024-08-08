// While Loops

// Lifting
// for(let rep = 1; rep < 6; rep++){
//         console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
// }

// While loop - will continue running until condition is met
// You can only specify a condition


// While Loop will keep running until condition is met.
// More versatile. Does not need a counter.

// let rep = 1;
// while (rep <=10) {
//     // Action to repeat:
//     console.log(`WHILE: Lifting weights repetition ${rep}🏋️‍♀️`);

//     //Incr condition:
//     rep = rep + 1; // Same structure as for-loop, but the increm. condition must be mentioned here.
// }

// Another example - While Loop - no need for counter:
// Roll a dice until we roll a 6 dice, then we stop.


// Math.random() generates a random float between 0 and 1
// Multiply by 6 to get the dice number.
// Finally, trunc() removes the fractional part, i.e. 0.7444 will be turned to 0
// Add 1 to scale it between 1 to 6.



// We stop rolling until we get a 6
let dice = Math.trunc(Math.random()*6)+1;

while (dice !== 6){

    // Display result.
    console.log(`You rolled a ${dice}.`);

    // Continue rolling. Otherwise it will run infinitely if the num is not 6.
    dice = Math.trunc(Math.random()*6)+1;

    if (dice === 6) console.log(`Loop is about to end, you rolled a ${dice}!`);
}

