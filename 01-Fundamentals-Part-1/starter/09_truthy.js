// Truthy and Falsey Values

// CONSIDERED FALSE --> 0, empty string, undefined, null, NaN
// Everything else will be considered TRUE
// True -> 1, any true, and {}


// Example:
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); // For some reason, this is true
console.log(Boolean(''));

// What happens - type coercion

// Money Variable
const money = 100;

// Example #1 - Test if the person is broke or has money, lol.
// Uses Truthy and Falsey Values.
if (money) {
    console.log(`Spend your money wisely.`)
} else {
    console.log(`Stop spending money!`)
}


// Example #2 - Test if something exists.
// We know height is undefined, and undefined is a FALSE value.
// Unless we store it, it will be a boolean.

let height;
height = 0 

if (height){
    console.log('Sweet you gave us the height!')
} else {
    console.log(`Height is undefined.`)
}

// When height is 0, it's FALSE value, so else is triggered.
// This is a bug.