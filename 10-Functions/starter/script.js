// Start with Strict
'use strict';

// Example:
const flight = "LH234";
const jonas = {
    name: 'Jonas Schmedtmann',
    password: 123241412123,
}

// Make a check-in function
const checkIn = function(flightNum, passenger){

    // Change the Flight Number, not a good practice:
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    // Check:
    if (passenger.password === 123241412123) {
        alert('Check In!');
    } else {
        alert(`Wrong passport!`);
    };

}

checkIn(flight, jonas);