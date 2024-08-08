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

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

// Calculate BMI
// john.calcBMI();
// mark.calcBMI();


// Log into the console:
// console.log(`${mark.calcBMI() < john.calcBMI() ?`John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`: `Mark Miller's (${mark.bmi}) is higher than John Smith's BMI (${john.bmi})`});

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
//   }


  // Christine's better solution that calls each function 
  // that defines properties and uses ternary operators.
  console.log(`${mark.calcBMI() < john.calcBMI() ? 
    `John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!` : 
    `Mark Miller's BMI (${mark.bmi}) is higher than John Smith's BMI (${john.bmi})!`}`);
    