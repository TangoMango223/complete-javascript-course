// Let's look at Math Operators - Part 2

// Let's look back at precedence again:
// Due to operator precendence - PEDMAS

// How does JS know what to do first?
// now = 2037 year
// The command below follows PEDMAS

const now = 2037;

console.log(now - 1991 > now - 2018);


// MDN Operator Precedence.
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators


// Check math
console.log(25-10-5);

// Right to left - right to left assignment
// You can define too variables at once!
let x, y; 

x = y = 25 - 10 - 5;

// Result
console.log(x,y);

// It equals to 10, since y = 10, and since x = y, then x will also be 10
// y = 25 - 10 - 5 = 10, and x = y so x = 10
// This is example of right to left, since we evaluate the expression on the right, before assignment to x and y

// Higher - which is grouping - same as mathematics (PEDMAS)
const ageSarah = now - 2018;
const ageJonas = now - 1991;

console.log(ageJonas, ageSarah);

// Calculate age average
const avgAge = (ageJonas + ageSarah)/2
console.log(ageJonas, ageSarah, avgAge)




