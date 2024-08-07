// Decision Making with Conditions

const age = 15;

// Check
const isOldToDrive = age > 18;

// Check.
console.log(isOldToDrive);

// now, code will execute if else is true
// Control Structure

// Example 1
if (isOldToDrive) {
    console.log("Sarah can start driving with her license!🚗")
}
else{
    const yearsLeft = 18-age;
    console.log(`You're too young, you cannot drive yet👶.
        Please wait another ${yearsLeft} until you can drive!`)
}

// If-Else Control Structure --> this allows you more control with how code is executed.
// It does not execute in a linear way, control blocks of code that should execute, and should not execute.
// Most famous one is if-else

// Example 2
const birthYear = 2100;

// Variables defined inside the code block will not accessed out. Be careful.
// Block scope of variables

// Define century initially on the outside.
// If you're defining it outside the if-else block, you need to remove the "LET" statement
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);