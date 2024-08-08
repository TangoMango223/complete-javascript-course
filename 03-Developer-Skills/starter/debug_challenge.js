// Example:


// // Function to conversion
// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsuis',
//         value: prompt("Degrees celsuis:"),
//     };
//     debugger; // will open the tool - put a breakpoint in the code as well!
//     console.log(typeof measurement.value); 
//     // Issue, it's being intrepretted as string.
//     const kelvin = Number(measurement.value) + 273.15;

//     console.table(measurement); // we see it's been converted.
//     return kelvin;
// }

// console.log(measureKelvin());

/*

Debugging process:
1) Identify the error - we noticed the Kelvin conversion is off.
2) Find where - we tested and did a console log at each object.

We found that measurement.value's data type is wrong, we expected Number, it's a string
The value is a string! Prompt function always returns a string.

3) Fix - Google, or recall that Number() in JS will convert a number string into a true number

console.table(measurement) is a quick way to check type

4) Prevent - be aware for the future!

*/

/// Coding Challenge #2 - Example

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

*/

// Test data;
let data1 = [17, 21, 23]
let data2 = [12, 5, -5, 0, 4]


function printForecast(arr){

    // Create string to store the full results:
    let output_string = ""; 

    // Loop thru the array
    for (i = 0; i <= arr.length-1; i ++){
        output_string = output_string + `...${arr[i]}C in ${i+1} days`;
    }
    return output_string;

}

// Check:
console.log(printForecast(data1));
console.log(printForecast(data2));

// Explanation of my coding process:
/*
1) Defined all the variables I knew I had, known and unknown.
2) Started the function
3) Used Pseudo code to write down what each code line would do.
4) Created a string and a for-loop
5) Googled and fixed template-strings, and refer to the ith item
6) Added a return function
7) Applied a check for each of the two datasets
8) Noticed I was running into defined, found an issue with the looping and starting at index 0, fixed the for-loop.
9) Done!
*/ 