// Functions in Javascript. First time running it, yay!


// You need curly brackets - function buddy, to describe the function
function logger() {
    console.log('My name is Christine');
}

// Now you can use it as many times as you want.
logger();
logger();
logger();

// Example - Food processor, function buddy
function fruitProcessor(apples, oranges) {

    // Initial call will return:
    console.log(apples, oranges);

    // const juice to define the variable:
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice; // Like Python, add a return.
}

// Invoke the function and save it to appleJuice
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0)); // Notice that passing the expression works too.

// Function basics:
// When the function is running, apples and oranges will be called.
// We returned, and the result is provided.
// But since there's no "console log" or saving, it disappears.
// Above, we save it to appleJuice

// Reusability - we can now call it several times.
const appleOrangeJuice = fruitProcessor(2,4);
alert(`Thanks for your groceries, now, we have ${appleOrangeJuice}`);

// Function return vs. Console Log - CL will display, but not save.
// Save problem as Python Prints, you make sure to save the variable values.

// DRY - do not repeat yourself. Try to minimize re-writing code.
// Functions support DRY.

// Number conversion, common function in JS:
const num = Number('23');




