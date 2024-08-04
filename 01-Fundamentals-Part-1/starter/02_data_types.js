// More on Data Types in JS

// JavaScript is dynamic, top to bottom

// Types of Variables:
/*

// Numbers, Big Int, etc.
// Variable and Comment Conventions in JavaScript

*/


// First declaration
javascriptisFUN = "Fuck no.";


// Boolean
true; // This is true
let name_first = "Christine"
if (name_first == "Christine") alert(true);

// Special - type on type off
console.log(typeof true);

// "Jonas" is a string - please make sure quotation marks are there

// Second declaration.
// Notice that javaScriptisFun is defined.
javascriptisFUN = "YES!";


// Notice in the console, it's changed
console.log(javascriptisFUN);

// Type can also change too..
javascriptisFUN = 10000;

// Notice it's changed now to a number
console.log(typeof javascriptisFUN); // define as number in console

// Three most important one

// Undefined - variable is EMPTY. Not legal in Python.
let year;
console.log(year); // undefined -- shows it
console.log(typeof year); // undefined -- shows it

// Value and type of the value

year = 1991;
console.log(year); // Now it's changed to showing 1991


// Null is NOT an object. This is a bug in JS.
console.log(typeof null); // Type of null is an object. This is an error in JS.