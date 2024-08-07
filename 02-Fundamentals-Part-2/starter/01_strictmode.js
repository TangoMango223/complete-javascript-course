// Strict Mode activate, statement must be in the beginning
'use strict';

// Why? Strict will create visible errors and let you know, and forbids certain things, like mixing data types.

// Example:
let hasDriversLicense = false;
const passTest = true;

// When they pass the test, hasDriverLicense will set to trust.

// Intentional bug:
if(passTest) hasDriverLicense = true;
