// Review Functions


// Calc Age:
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


// Call other functions
const yearsUntilRetirement = function (birthYear, firstName)
{
const age = calcAge(birthYear); // call function to use this function.
const retirement = 65 - age;

if(retirement > 0)
    {
        console.log(`${firstName} retires in ${retirement} years.`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`)
        return -1;
    }
}

// Data Flow:
console.log(yearsUntilRetirement(1991, 'Jonas'));

// Mike - he already retired, fix negative number.
console.log(yearsUntilRetirement(1970, 'Mike'));

// Be careful with return statements, it's the end, nothing else after will occur.

