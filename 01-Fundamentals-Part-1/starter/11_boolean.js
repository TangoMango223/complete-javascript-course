// Boolean and Logical Operators

// Operators in JS:
// && - AND
// || - OR
// ! is NOT operator


// Set variables
const hasDriversLicense = true;
const hasGoodVision = true;


// Examples
console.log(hasDriversLicense && hasGoodVision); // Is now false
console.log(hasDriversLicense || hasGoodVision); // Is true
console.log(!hasDriversLicense);

// Should drive?
const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive) {
//     console.log(`Sarah is able to drive!`)
// } else {
//     console.log(`Someone else should drive!`)
// }


// Next evaluation
const isTired = false; 
console.log(hasDriversLicense && hasGoodVision && isTired); // One operand = false


// Translate to Condition:
// Remember that !isTired is opposite. 
if (hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah can drive!")
} else {
    console.log("Sarah should not drive.")
}

// 