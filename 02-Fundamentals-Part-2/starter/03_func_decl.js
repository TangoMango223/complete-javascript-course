// Strict mode
'use strict';

// Function declaration - can use before it's defined below:
const age1 = calcAge1(1991);
console.log(age1);

// Functions Declarations and Expressions
// Function DECLARATION
function calcAge1(birthYear) {

    // Calculate age
    const age = 2037 - birthYear;
    // Return
    return age;

    // // Alternative:
    // return 2037-birthYear; // faster way of writing this.

}

// Function EXPRESSION
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

// Call it here after definition.
const age2 = calcAge2(1991);
console.log(age1, age2);


// Notes:
// Hoisting in Javascript = allows function declaration to be used BEFORE the function is defined.

// Arguments vs. Parameters - Params are in the function.
// Arguments are filled in.

// Another example. This variable will now store a function call.
// Function without a name - anonymous function.
// calcAge2 is now the function.

// What should you use when coding?
