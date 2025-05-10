// Arrays (Tables in Lua)

let fruits = ["apple", "banana", "orange"]; // Array creation

// Access elements in array
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana

// Add element to the end
fruits.push("grapes");
console.log(fruits); // Output: ["apple", "banana", "orange", "grapes"]

// Remove the last element
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange"]

// Loop through array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach method
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Array with mixed data types
let mixed = [1, "hello", true, [1, 2, 3]];
console.log(mixed[3][1]); // Output: 2
