// Conditionals / Ternary Operators

const age = 33;

// Condition Syntax in JS.
// Conditional operator - Ternary Operator - three parts
age >= 18 ? console.log('I like to drink wine!🍷') :
console.log('I like to drink water 💧');

// Syntax of Ternary: condition ?  result : alternative

// If-else = two parts - same thing as above.
// if (age >= 18){
//     console.log("I like to drink wine!")
// } else {
//     console.log("I like to drink water.")
// }


// Variable = expression, ternary and variables
const drink = (age >= 18 ? 'wine': 'water');
console.log(drink);

// drink2 - needs to be defined here, and then it gets assigned inside the if-else block
let drink2

if (age>=18) {
    drink2 = 'give them wine';
} else {
    drink2 = 'give them water';
}

console.log(drink2)

// Ternary Expression - use it in a template literal (F-String)
// You can have conditions inside the template literal, since ternary is an expression result.

console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`); 
// Notice that ternary expression is evaluated in here.


// Ternary is NOT a replacement of IF-Else statements, i.e. more complex stuff
// For quick decisions, Ternary is a good idea.
// Expression expected for template literals, for example.