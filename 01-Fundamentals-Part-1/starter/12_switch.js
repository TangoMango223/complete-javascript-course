// Switch Operators in JS
// In most scenarios, we do not hard-code

const day = 'thursday';

// Use Switch statement
// Structure SWITCH - CASE
// Switch-Case is STRICT operators comparisons

switch(day) {
    case 'monday': // if day === "monday"
        console.log('Today is Monday!');
        break;
    case 'tuesday':
        console.log('Today is Tuesday!');
        console.log('Prepare Theory Videos...')
        break;
    case 'wednesday': // Wed + Thurs
    case 'thursday': 
        console.log('Write code examples!');
        break;
    case 'friday':
        console.log('Record videos.');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy your weekend :D');
        break;
    default: // defaults if anything else, is an error.
        console.log("Not a valid date.")
}

/* Best Practices:
1) You need a break; keyword, otherwise, everything will print until the next break
2) Set defaults to catch errors.
3) You can add multiple conditions as seen above for sat + sun
*/

// // Conditions - too lazy to type the whole thing LOL.
// if (day === 'monday') {

// } else if (day === 'tuesday') {

// } else if (day === 'wednesday') || (day == 'thursday')

// else if (day == 'saturday') || (day == 'sunday')

// else:
