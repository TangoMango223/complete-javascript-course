// Strings and Concantentation


// Arguments
const firstName = "John";
const job = "teacher";
const birthYear = 1991;
const year = 2037

// Example
// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas)

// Template literals, instead of having to remember the spaces and awkward formatting. Introduced in ES6 
// Use back-ticks, which is above the tab key
// Also need dollar signs

// You can write any expressions here. This is like F-Strings in Python.
const jonasNew = `I'm ${firstName}, a ${year - birthYear} old teacher, and I am a ${job}!`;

// Look it works!
console.log(jonasNew)

// You can use it anywhere in JS
// alert(`Just a regular stringgggg`);

// Multi-line strings. Note that \n\ means new-line
console.log('String with a \n\
    multiple \n\
    lines');

// Now, you can use the back-ticks so it's much easier.
console.log(` This
    is
    now a multi-line!`)