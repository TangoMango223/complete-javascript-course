/* Write your code below. Good luck! 🙂 */


// // Function call
// function calcAverage(score1,score2,score3){
//     return (score1+score2+score3) / 3;
// }

// Arrow Function:
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// Definition of variables
let scoreDolphins, scoreKoalas

// Calculate per team:
scoreDolphins = calcAverage(44,23,71)
scoreKoalas = calcAverage(65,54,49)

// Check winner

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
    }
        else {
            console.log('No team wins...');
        }
    }

// Fix Logic:
checkWinner(scoreDolphins, scoreKoalas);