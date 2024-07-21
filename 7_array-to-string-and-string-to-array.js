/* ********************************************************** */
// Converting a JavaScript Array to a String with .join()
// join() method

const greeting = ["Hello,", "World"];
greeting.join(); // "Hello,,World"

const greeting = ["Hello,", "World"];
greeting.join(" "); // "Hello, World"
greeting.join("--- "); // "Hello,--- World"

const names = ["Alice", "Bob", "Charlie", "Dana"];

let namesString = names.join(", ");
console.log(`Our team members are ${namesString}.`);
// "Our team members are Alice, Bob, Charlie, Dana."

// slice() and join() methods
let namesString = names.length > 1
? `${names.slice(0, -1).join(", ")} and ${names.slice(-1)}`
: names[0];

console.log(`Our team members are ${namesString}.`); // Our team members are Alice, Bob, Charlie, and Dana.

/* ********************************************************** */
// From JavaScript String to Array Using .split()
// split() method
let numberString = "2,4,6,8,10";
let numberString = "2,4,6,8,10";
numberString.split(","); // ["2", "4", "6", "8", "10"]

// The elements in your array are all strings, not numbers!
// If you want to convert them to numbers, you can use the .map() array method with parseInt():
let numberString = "2,4,6,8,10";
numberString.split(",").map((number) => parseInt(number));
// [2, 4, 6, 8, 10]

// You can also do this with a regular for loop:
let numberString = "2,4,6,8,10";
let numberArray = numberString.split(",");
for (let i = 0; i < numberArray.length; i++) {
numberArray[i] = parseInt(numberArray[i]);
}
console.log(numberArray); // [2, 4, 6, 8, 10]


// The split method is called on the string, and the argument passed to the method is the separator. 
let numberString = "2,4,6,8,10";
numberString.split("1"); // ["2,4,6,8,", "0"]

// If you wanted to split every single character in a string into an array, you could pass in a blank string as the separator:
let numberString = "2,4,6,8,10";
numberString.split(""); // ["2", ",", "4", ",", "6", ",", "8", ",", "1", "0"];


/* ********************************************************** */
// Convert a JavaScript Array to a String with .toString()
// toString() method
// The .toString() method is not very flexible, but it's a quick way to convert an array to a string if you don't need to customize the separator.
const greeting = ["Hello", "World"];
greeting.toString(); // "Hello,World"

/* ********************************************************** */
// Use Template Literals to Convert a JavaScript Array to a String
// Template Literals
// The template literal is used to interpolate the array into a string. The result is the same as the .toString() method.
const greeting = ["Hello", "World"];
`${greeting}`; // "Hello,World"


/* ********************************************************** */
// Convert a JavaScript String to an Array with Array.from()
// Array.from() method
const greeting = "Hello, World";
Array.from(greeting); // ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d"]

// It takes an optional map function as an argument, which allows you to manipulate the elements in the array. This is useful if you want to convert the string to an array of numbers, for example:
const numberString = "12345";
Array.from(numberString, (number) => parseInt(number)); // [1, 2, 3, 4, 5]


/* ********************************************************** */
// Convert a JavaScript String to an Array with the Spread Operator
// Spread Operator
// The spread operator is a newer feature of JavaScript that allows you to expand an iterable into its individual elements.
// The spread operator is used to expand the string into its individual characters, which are then wrapped in an array. The result is the same as the Array.from() method.
const greeting = "Hello, World";
[...greeting]; // ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d"]


