// Example:


// Function to conversion
const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsuis',
        value: prompt("Degrees celsuis:"),
    };
    debugger; // will open the tool - put a breakpoint in the code as well!
    console.log(typeof measurement.value); 
    // Issue, it's being intrepretted as string.
    const kelvin = Number(measurement.value) + 273.15;

    console.table(measurement); // we see it's been converted.
    return kelvin;
}

console.log(measureKelvin());

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