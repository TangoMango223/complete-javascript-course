// Dot and Bracket Notation

// Definition of new object - each key has a value pair (key-value) pair similar in Python
const jonas = {
    firstName: "Jonas",
    lastName: 'Schemedtamann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
}


// How to retrieve and access from JS Object
// Dot notation
console.log(jonas.lastName); // This gets last name

// Brackets notation - but the string must be passed in the parameters using [ ] notation
console.log(jonas['firstName']); // First Name

// Another example of why this makes sense.
const nameKey = 'Name';

// Store:
console.log(jonas['first' + nameKey]); // Gives first name
console.log(jonas['last' + nameKey]); // Gives last name

// // Dot notation does work with  string for example - illegal.
// console.log(jonas.'last' + nameKey);

// Real, final variable name in JS Object must be specified in dots notation.

// When should you use either?
// If you need to compute something, use bracket notation.
// For clean, use dot notation.

// Example:
const interested_in = prompt('What do you want to know about Jonas? Choose between first name, last name, age, job and friends.');

// This will fail, since there's no literal "job" string in the jonas JS Object.
// console.log(jonas.interested_in);

// To solve this, you need to use brackets notation to access.
// The brackets expression will be evaluated.
console.log(jonas[interested_in]);

if (jonas[interested_in]) {
    console.log(jonas[interested_in]);
} else {
    console.log
}

// Add new properties using both approaches.
jonas.location = 'Portugal';
jonas['twitter'] = '@something';

// Access this info, you can mix Template-String and also use both dot notation and brackets.
console.log(`${jonas.firstName} has ${jonas["friends"].length} friends, and his best-friend is ${jonas["friends"][0]}.`);