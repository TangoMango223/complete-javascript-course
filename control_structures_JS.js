// Christine's Cheatsheet - all Control Structures in JS:

// 1. Conditional Statements

// if statement
if (condition) {
    // code to be executed if condition is true
}

// if...else statement
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}

// if...else if...else statement
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both conditions are false
}

// switch statement
switch (expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    default:
        // code to be executed if expression doesn't match any case
}

// 2. Loops

// for loop
for (let i = 0; i < 10; i++) {
    // code to be executed in each iteration
}

// while loop
let i = 0;
while (i < 10) {
    // code to be executed while the condition is true
    i++;
}

// do...while loop
let j = 0;
do {
    // code to be executed at least once, then repeated while condition is true
    j++;
} while (j < 10);

// for...in loop (iterates over the properties of an object)
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    // code to be executed for each property in the object
    console.log(key + ": " + obj[key]);
}

// for...of loop (iterates over the values of an iterable, like an array)
let arr = [1, 2, 3, 4];
for (let value of arr) {
    // code to be executed for each value in the iterable
    console.log(value);
}

// 3. Exception Handling

// try...catch statement
try {
    // code that may throw an error
} catch (error) {
    // code to handle errors
    console.error(error);
}

// try...catch...finally statement
try {
    // code that may throw an error
} catch (error) {
    // code to handle errors
    console.error(error);
} finally {
    // code to be executed regardless of an error
    console.log("Finally block executed");
}

// 4. Control Flow

// break statement (exits a loop or switch)
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exits the loop when i is 5
    }
    console.log(i);
}

// continue statement (skips the current iteration)
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // skips the rest of the loop iteration when i is 5
    }
    console.log(i);
}

// return statement (exits a function and optionally returns a value)
function add(a, b) {
    return a + b; // exits the function and returns the sum
}

// throw statement (throws a user-defined exception)
function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be at least 18 years old.");
    }
    return "Access granted.";
}

// 5. Other Structures

// ternary operator (short form for if...else)
let isAdult = age >= 18 ? "Yes" : "No"; // returns "Yes" if age >= 18, otherwise "No"

// label statement (provides a label to loops or blocks)
outerLoop: // label named 'outerLoop'
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 2) {
            break outerLoop; // breaks out of the outer loop
        }
        console.log("i = " + i + ", j = " + j);
    }
}
