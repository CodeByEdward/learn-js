// Variables in JavaScript

// Declaring variables
let name = "Edward"; // Let is used for variables that can be reassigned
const age = 25;      // Const is used for constant values

// Changing variable values
name = "Andrew";
console.log(name); // Output: Andrew

// Scope of variables
function testScope() {
    let localVar = "This is local";
    console.log(localVar);
}

testScope();
// console.log(localVar); // Uncommenting this will result in an error, because localVar is not accessible outside the function

// Global variables
globalVar = "I am global";
console.log(globalVar); // Output: I am global

// Type of variables
console.log(typeof name); // Output: string
console.log(typeof age);  // Output: number
console.log(typeof globalVar); // Output: string
