// Use strict
'use strict';

// Basic Arrays

// Example:
const friends = ["Michael", "Steven", "Peter"];

// Add someone at the end
// friends.push("Jae");

// Value of the length is new array length. Be careful.
// METHOD 1 - PUSH METHOD
const newLength = friends.push('Jae')
console.log(newLength);

// METHOD 2 - UNSHIFT (adds to front of array)
friends.unshift('John');
console.log(friends);

// METHOD 3 - REMOVE ELEMENTS - POP - last element
friends.pop(); // Jae was removed.

// Save what is popped:
const popped = friends.pop();
console.log(popped); // Should be Peter removed.

// Log:
console.log(friends);

// METHOD 4 - removes first element of an array:
friends.shift();
console.log(friends); // John is removed.


// METHOD 5 - friends.indexOf
console.log(friends.indexOf('Steven')); // number 1, or position 2

// If you try this with someone who's not in the array, you get -1
console.log(friends.indexOf('Christine')); // -1

// Includes keywords
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false

// Include 23
friends.push(23);
console.log(friends.includes('23')); // false, diff data type

// Conditional Check as well, with includes.
if (friends.includes('Steven')) {
    console.log(`You have a friend named Steven.`);
}


