// Configuration for JS and programming in general:
'use strict';


// Coding problem:

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: 
// "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// PROBLEM 2:
// Function should now receive two arrays.

// What happens with two arrays? - merge the two arrays at the beginning.


// TODO: Ask the client and get answers:
/* 

What is temp amplitude: difference between highest and lowest temperature in an array?
How to calculate max and min tempeoratures?
What does a sensor error look like, and what should we do in the event? - ignore the error

breakdown:
* how to merge two arrays in JS Objects


*/ 

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temp2 = [2,25,50, -10]; // second array

// TODO: Ignore the sensor errors 
// Find max value in temp array
// Find min value in temp array
// Subtract the min from max and return it i.e. use function?


// Example solution:
// let max = testArray[0];
// for (let i = 1; i < testArrayLength; ++i) {
//   if (testArray[i] > max) {
//     max = testArray[i];
//   }
// }

// Let Max...
const calcTempAmplitude = function(temps) {
  // Set max:
  let max = temps[0]; // Assume it's the maximum
  let min = temps[0];

  // For loop
  for (let i=0; i < temps.length; i++){
    const curTemp = temps[i];
      // Remove consideration if the item is not a number...
      if(typeof temps[i] !== 'number') continue;
      if(temps[i]> max) max = curTemp;
      if(temps[i]< min) min = curTemp;
  }
  console.log(max, min);
};

calcTempAmplitude([3,7,4,23]);

// // It works!
// calcTempAmplitude(temperatures);

// Calculate amplititude:
const amplitude = calcTempAmplitude(temperatures);

// New function taking in two arrays:
const calcTempAmplitude2 = function(temp1,temp2) {
  // Merge arrays together:
  const array3 = temp1.concat(temp2);  

  // Set max:
  let max = array3[0]; // Assume it's the maximum
  let min = array3[0];

  // For loop
  for (let i=0; i < array3.length; i++){
    const curTemp = array3[i];
      // Remove consideration if the item is not a number...
      if(typeof array3[i] !== 'number') continue;
      if(array3[i]> max) max = curTemp;
      if(array3[i]< min) min = curTemp;
  }
  console.log(`--- Two Array Solution ----`)
  console.log(max, min);
};

// Test it:
calcTempAmplitude2(temperatures, temp2);