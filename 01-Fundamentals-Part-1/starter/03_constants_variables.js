// Constants and Variables

let age = 30; // We can change this later on.
age = 31;

// Similar to Python, JS is mutable and dynamic.
// Variables can be changed!

// Empty variables, same rules as well.

// You can also change conditions later to change it.

// Example:
const birthYear = 1991;

// If you tried to reassign:
// birthYear = 1997;

// You get an UnCaught Error!


// Constants must have initial values, the below will have an error:
// const job;

// Best practice - use const default.
// For example, a variable that never change, use CONST

// if the variable may change, use "let".
// Changing variables will cause errors and changing.

// You can also introduce variables using var
var job = "programmer"
job = "teacher" // you can use var to define, and it can change later on.
console.log(job);
// Let is block scoped, var is function scoped


// You don't need to use let, const or VAR to create variables.
// It will create a property in global scope.
// For JS, please use let, CONST for definition.
// Avoid this practice like in Python...
lastName = "Tang";
console.log(lastName);
