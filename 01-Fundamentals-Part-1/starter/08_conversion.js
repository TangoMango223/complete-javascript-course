// Type Conversion - JavaScript - conversions get weird

// Type converson vs. Type coercion
// Remember - literal string will work except for PLUS signs


// Convert the string to a number. You will get a type error here.
const inputYear = '1991';

// Use number function to convert a number string into an actual integer
console.log(Number(inputYear)); // Will convert for you. -- it converts for you
console.log(`The right solution is ${inputYear} + 18`); // This is still a concat!


// Correct solution:
console.log(Number(inputYear) + 18); // Gives us 2009, which is the right solution.

// What if we try converting a string?
console.log(Number('Jonas')); // You'll get a NaN error, not invalid. 

console.log(typeof Nan); // type of NaN is a number, but it's invalid number.


// Another example - string conversions
// white color = strings
console.log(String(23), 23); 


// Type Coercion
// Literal strings will convert string num to num, EXCEPT for plus sign.
console.log(`I am `+ 23 + ` years old`);
console.log(`23` - `10` - 3) 

console.log(`23` / `2`) // Both are converted to numbers - 46

// Guess what happens
let n = `1` + 1; // This will be 11, and the plus operator
n = n - 1 // 11 - 1 = 10

console.log(n) // gives you 10


// Another example:
let p = '22' - 2
console.log(p) // Will give you 20

// Concat example:
// Gives you 9 - 2+3+4 = 9, then concat with 5
2 + 3 + 4 + '5' 

// Same logic
`10` - `4` -`3` - 2 + `5` // Gives you 15

