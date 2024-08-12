// Start with Strict Mode:
'use strict';

// Exercise #1 - Scoping in Practice

// Global variables:
const firstName = "Jonas";

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge(){
        // This will work since birthYear is visible:
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output); // This says Jonas

        if (birthYear >= 1981 && birthYear <= 1996){
            const firstName = "Steven" // In this scope, so the variable will supersede the global variable.
            var millennial = true;
            const str = `Oh you are a Millennial, ${firstName}`; // This will say Steven
            console.log(str);

            function add(a,b){
                return a+b;
            }
            // Variable reassignment - this reassignment will affect the output outside.
            // But if we redefined it as a new variable, it will not affect the console.log(output)
            // Reassignment:
            output = "New output!"
        }
        // This will fail since out of function scope - console.log(str);
        // console.log(millennial);
        // console.log(add(2,3)); // This will fail on strict mode, since functions are now block scoped in ES6 onward

        // It was manipulated and redefined inside this child scope.
        console.log(output); 
        console.log(millennial);
        
    printAge();
    }

    return age;
}

calcAge(1991);

