// Code Challenge Code #1:

/* Write your code below. Good luck! 🙂 */

// Define
let massMark, heightMark, massJohn, heightJohn, BMIMark, BMIJohn

// Check that it works
massMark = 78
heightMark = 1.69

massJohn = 92
heightJohn = 1.95


// Calculate BMI
BMIMark = massMark / (heightMark * heightMark)
BMIJohn = massJohn / (heightJohn * heightJohn)

// Log
console.log(BMIMark, BMIJohn)

// BONUS Challenge:
let markHigherBMI
markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)


// ---------------------

// // Code Challenge Code #2:

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
// } else{
//     console.log(`John's BMI ${BMIJohn}is higher than Mark's ${BMIMark}!`)
// }

// 

// ------------------------
// Coding Challenge Code #3:

/* Write your code below. Good luck! 🙂 */

let scoreDolphins, scoreKoalas

scoreKoalas = 88
scoreDolphins = 96

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy")
} else {
    console.log("Both wins the trophy")
}


// ---------------

// Coding Example #4:

// const bill = 275;

// /* Write your code below. Good luck! 🙂 */

// // Add stuff:
// const tip = bill >= 50 && bill <= 300 ? 0.15 * bill:
// 0.2* bill;

// // Check results:
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`)