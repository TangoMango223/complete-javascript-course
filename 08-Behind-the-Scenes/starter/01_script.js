// Start with Strict Mode:
'use strict';

// -------------- Exercise #1 - Scoping in Practice --------------

// // Global variables:
// const firstName = "Jonas";

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge(){
//         // This will work since birthYear is visible:
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output); // This says Jonas

//         if (birthYear >= 1981 && birthYear <= 1996){
//             const firstName = "Steven" // In this scope, so the variable will supersede the global variable.
//             var millennial = true;
//             const str = `Oh you are a Millennial, ${firstName}`; // This will say Steven
//             // console.log(str);

//             function add(a,b){
//                 return a+b;
//             }
//             // Variable reassignment - this reassignment will affect the output outside.
//             // But if we redefined it as a new variable, it will not affect the console.log(output)
//             // Reassignment:
//             output = "New output!"
//         }
//         // This will fail since out of function scope - console.log(str);
//         // console.log(millennial);
//         // console.log(add(2,3)); // This will fail on strict mode, since functions are now block scoped in ES6 onward

//         // It was manipulated and redefined inside this child scope.
//         console.log(output); 
//         console.log(millennial);
    
//     }
//     // Call printAge()
//     printAge();
//     return age;
// }


// // Call the functions
// calcAge(1991);



// -------------- Exercise #2 - Scoping in Practice --------------

// // Attempt to access the variables:
// // These will fail - you cannot access them before initialization.
// // console.log(me); 
// // console.log(job);
// // console.log(year);

// // Define some variables
// var me = "Jacob";
// let job = "teacher";
// const year = 1991;

// // Functions usage:
// console.log(addDecl(2,3)); // Function Decl are the only scenarios where it will work. Hoisting.
// // console.log(addExp(2,3)); // This will fail.
// // console.log(addArrow(2,3));

// // Function declarations:
// function addDecl(a,b) {
//     return a+b;
// }

// // Function expressions
// const addExpr = function (a,b) {
//     return a+b; // This will fail.
// }

// // Arrow head
// var addArrow = (a,b) => a+b; // This will fail.


// // Bad example of when hoisting and using VAR is a bad idea:
// console.log(undefined);

// // Delete - it happens, why?
// // Hoisting - Functions declaration are moved to top, so is VAR
// // But VAR will move to the top, initialized initially as undefined.
// // Undefined = False condition !False = True
// if (!numProduct) deleteShoppingCart();

// // Number of products
// var numProduct = 10;

// // Function
// function deleteShoppingCart() {
//     console.log("All products deleted.");
// }

// // ----- Best Practices -----
// // Avoid using VAR, always use let and const
// // Write functions and then use them, avoid hoisting.
// // Write clean code!


// -------------- Exercise #3 - This Keyword --------------

// console.log(this); // window function

// const calcAge = function(birthYear) {
//     console.log(2037-birthYear);
//     console.log(this);
// }

// calcAge(1991); // Undefined for THIS

// // Arrow function
// // Arrow function doesn't have "THIS", so it uses this of the parent scope
// // Parent scope is WINDOW
// const calcAgeArrow = birthYear => {
//     console.log(2037-birthYear);
//     console.log(this); // points to parent function, so window function
// }


// // JS - Object
// // When calling "this" keyword inside a JS object, it will point to the object itself.
// // Similar to self.___ in Python

// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this); // This will point to the jonas object
//         console.log(2037 - this.year);
//     },
//     greet: () => console.log(`Hey ${this.firstName}`),
// };

// // See what happens:
// jonas.calcAge();
// jonas.greet();

// // // Second example:
// // const matlida = {
// //     year: 2017
// // }

// // // Copy this function over
// // // Method borrowing
// // matlida["calcAge"] = jonas["calcAge"]


// // // Gave us the correct 
// // matlida.calcAge();

// // Matlida is now an object that inherited the function 

// // This keyword is pointing to the object calling the method.
// // Even though the method is written to matlida, when you access the object, this will point to matlida.


// // // Example of "this" being dynamic - it moves with the context and object it lives in :
// // const f = jonas.calcAge
// // f() // This will fail since f does not have .year, so the calculation fails.


// -------------- Exercise #4 - Regular vs. Arrow Functions --------------

const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this); // This will point to the jonas object
        console.log(2037 - this.year);
    },
    greet: () => console.log(`Hey ${this.firstName}`),
};

// See what happens:
jonas.greet(); // This will give undefined, since arrow functions point to window function, not the JS object


// Christine finish the code in the morning when you have more energy!


// -------------- Exercise #5 - Primitives vs. Objects --------------

