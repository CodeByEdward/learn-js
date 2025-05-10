// Basic syntax in JavaScript

// Variable declaration
let name = "Edward";      // Use let or const for block-scoped variables
const age = 25;           // const for constant values

// Conditional statement (if-else)
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// Loops (for and while)
for (let i = 0; i < 5; i++) {
    console.log("i is " + i);
}

let counter = 0;
while (counter < 5) {
    console.log("Counter is " + counter);
    counter++;
}
