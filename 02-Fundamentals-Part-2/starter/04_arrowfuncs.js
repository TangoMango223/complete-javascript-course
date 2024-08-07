// Arrow Functions

// Function expression:
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Until Retirement, longer arrow function require
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age; // age assuming from 2037
    // return retirement;

    // Return something else:
    return `${firstName} will retire in ${retirement} years.`;
}

// Function Expression Method:
const years_retirement = function(birthYear) {
    const age = 2024 - birthYear;
    const retirement_age = 65
    const years_reamin = retirement_age - age;
    return years_reamin;
}


// Call function using Function Expression:
let result = years_retirement(1997);
console.log(result);

// Retirement with passing multiple params:
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1997, 'Christine'));

// Should I use arrow functions, function declarations or function expressions?

// Your preference.
// Arrow functions - does not get a keyword flagging.
// Honestly, I prefer function declarations.