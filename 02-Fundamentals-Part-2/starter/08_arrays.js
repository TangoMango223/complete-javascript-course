// Arrays in JavaScript

// Variables:
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// An array is a big-ass container, sometimes organized.
// Used to help contain and store data.


// METHOD #1 - Let's make our first array!
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// years definition - you can hold any type.

// METHOD #2 - use square brackets, or use the new Array () notation;
// const years = new Array(1991, 1984, 2008, 2020);

// Counting zero notation, like in Python, we want Michael who is at position 0
console.log(friends[0]);
console.log(friends[2]);

// Number of elements in the array:
console.log(friends.length); // properties of array object

// Retrieve element example:
console.log(friends[friends.length - 1]); // access the last element, position 2 - Peter


// Expression above, friends.length is calculated first
// What is an expression, and what's a statement? 
// Cannot put a statement in there.

// Let's replace Peter, he's not a friend anymore.
// Similar notation to dict and lists in Python.
friends[2] = "Jae";

// Check:
console.log(friends); // Jae is now the new friend, Peter was removed.

// You can change values in a JS array but cannot overwrite the entire thing:
// friends = ["Bob", "Alice"] // Uncaught TypeError


// New example - allows for multiple items in the array
const jonas = ["Jonas", "Sche", 2037-1991, 'teacher', friends]
console.log(jonas);

// Exercises
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

// Not illegal but will not work:
console.log(calcAge(years)); // get NaN

// Position zero:
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// If you start with an array, then you want to finish with it.
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// an easier way is to just store them...
ages = [age1, age2, age3];
console.log(ages);

// Why does this work? JS will place all the results in an array, since the brackets will store expressions.









// ------- Removal CheatSheet -------
// Link: https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769

// // Remove last element
// const x = friends.pop(); // remove the last member, so Jae.
// console.log(friends); 

// // Look for something specific:
// // const list = [😀, 😫, 😀, 😫, 🤪];
// // list.indexOf(😀); // 0
// // list.indexOf(😡); // -1

// // // Code
// // const list = [1, 2, 3, 4, 5];
// // list.indexOf(3); // 2
// // list.indexOf(6); // -1

// // Add something to the end, push
// const y = friends.push("Christine");
// console.log(friends); // Christine is added

// // array.shift() -> removes the first element
// friends.shift();
// console.log(friends); // Michael is removed



