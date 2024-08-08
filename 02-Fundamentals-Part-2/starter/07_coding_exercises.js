/* Write your code below. Good luck! 🙂 */

// ------------------------------------ 
// Coding Challenge #1 - Dolphins vs. Koalas

// // Function call
// function calcAverage(score1,score2,score3){
//     return (score1+score2+score3) / 3;
// }

// // Arrow Function:
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// // Definition of variables
// let scoreDolphins, scoreKoalas

// // Calculate per team:
// scoreDolphins = calcAverage(44,23,71)
// scoreKoalas = calcAverage(65,54,49)

// // Check winner

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
//     }
//         else {
//             console.log('No team wins...');
//         }
//     }

// // Fix Logic:
// checkWinner(scoreDolphins, scoreKoalas);

// ------------------------------------ 
// Coding Challenge #2 - Steven's Tip calculator

// function calcTip(bill) {
//     if (bill <= 300 && bill >= 50){
//         return 0.15 * bill;
//     } else {
//         return 0.2 * bill;
//     }
// }

// // Create arrays
// let bills, tips;


// // Define bill
// bills = [125, 555, 44];

// // Define tip
// tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];
// console.log(tips);

// // BONUS Challenge:
// const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
// console.log(totals);

// ------------------------------------ 
// Coding Challenge #3 - BMI Calculator again

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// // Calculate BMI
// // john.calcBMI();
// // mark.calcBMI();


// // Log into the console:
// // console.log(`${mark.calcBMI() < john.calcBMI() ?`John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`: `Mark Miller's (${mark.bmi}) is higher than John Smith's BMI (${john.bmi})`});

// // if (mark.bmi > john.bmi) {
// //     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// //   } else if (john.bmi > mark.bmi) {
// //     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// //   }


//   // Christine's better solution that calls each function 
//   // that defines properties and uses ternary operators.
//   console.log(`${mark.calcBMI() < john.calcBMI() ? 
//     `John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!` : 
//     `Mark Miller's BMI (${mark.bmi}) is higher than John Smith's BMI (${john.bmi})!`}`);


// ------------------------------------ 
// Coding Challenge #4 - Steven needs a new tip calculator - again!

// Starter code
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

// Create array for bills
let bills = [];
let tips = [];
let totals = [];

// Thru calculation using test data:
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Loop thru each item
for (n = 0; n <= bills.length - 1; n ++){
    // Calculate tip:
    const n_tip = calcTip(bills[n]);
    const n_total = bills[n] + n_tip;

    // Append to the arrays:
    tips.push(n_tip);
    totals.push(n_total);

}

// Sanity Check:
console.log(bills);
console.log(tips);
console.log(totals);

// Bonus Challenge - calcAverage

let test_array = [1,2,3];

// console.log(test_array[0] + test_array[1]  + test_array[2] );

// console.log(typeof test_array[0]);

// console.log(test_array.length);

function calcAverage(arr){
    // Store result - set as number:
    let sum = 0;

    // For loop:
    for (i = 0; i <= arr.length - 1; i++){
        // Add the number to sum
        sum = arr[i] + sum;
        console.log(sum);
    }
    // Once done, return the result;
    return (sum/arr.length);

}

// Call function
console.log(`Hello! The average is ${calcAverage(test_array)}`);

// alert("Hi there Christine!");