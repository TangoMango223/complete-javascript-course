// Equality Operators


// Example #1

const age = '18';

// If you only have one line of code, you don't need curlies
if (age === 18) console.log("You are now an adult!");

// Equality Operator
// == and === are different things in JavaScript

// == -> loose equal operator
// === -> strict equal operator, type must be the same as well.

// Example:
'18' == 18 // True, loose evaluation. Type conversion also done.

'18' === 18 // False, since the type must also be the same.

// Continued:
if (age == 18) console.log("You are now an adult! -- Loose");
if (age === 18) console.log("You are now an adult! -- Strict"); // This will not show up.

// The loose operator has some bugs, as a general rule... use STRICT ===

// Example #2
// This will retrieve a value
favorite = Number(prompt("What is your favorite number?"));
// console.log(favorite); // Printed in white, so it's now a string.


// // Loose
// if (favorite == 23) {
//     console.log("Cool! 23 is also my favorite number :D");
// }

// // Strict - will not show up since types not the same
// if (favorite === 23) {
//     console.log("Cool! 23 is also my favorite number :D");
// } else if (favorite === 7) {
//     console.log("7 is also a cool number!");
// } else {
//     console.log("Boo, your number choices suck.")
// }

// Different operator, not equal to !== and also !===
if (favorite !== 23) {
    console.log("Why not pick 23?")
}


// // Javascript supports self-conversions, good to know.
// favorite = Number(favorite)
// console.log(typeof favorite);