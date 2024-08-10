/* ********************************************************** */
// Lexical Scoping: A Hierarchical Approach
function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const newFunction = outerFunction();
newFunction(); // Outputs: 'I am outside!'


/* ********************************************************** */
// Practical Example: Variable Scope in Nested Functions
function outer() {
  let movie = 'Amadeus';

  function inner() {
    let movie = 'The Shining';
    console.log(movie);
  }

  inner();
}

outer(); // The Shining

/* ********************************************************** */
// Closure: A Function's Scope Chain
function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    // This is where the closure happens
    console.log(outerVariable); // It remembers outerVariable
  }

  // returns the function which has a closure over outerVariable
  return innerFunction;
}

// Trying to access outerVariable here will not work
console.log(outerVariable); // ReferenceError

// But you can use innerFunction, which remembers outerVariable!
const newFunction = outerFunction();
newFunction(); // This will correctly log 'I am outside!'

/* ********************************************************** */
// Higher-Order Functions: Taking Functions as Arguments
function fToC(tempInF) {
  return (tempInF - 32) * (5 / 9);
}

function cToF(tempInC) {
  return tempInC * 1.8 + 32;
}

// A higher-order function
function tempConverter(temp, conversionFunction) {
  return conversionFunction(temp);
}

console.log(tempConverter(40, fToC)); // 4.444444444444445

/* ********************************************************** */
// Array Manipulation with .map(), .filter(), and .reduce()

// .map(): This method transforms an array by applying a function to
// each element without changing the original array.
// For instance, converting a list of temperatures from Celsius to Fahrenheit:
let celsius = [0, 30, 45];
celsius.map((temp) => temp * 1.8 + 32); // [32, 86, 113]

// .filter(): Used for filtering an array based on a condition.
// For example, filtering a list of numbers to get only the even ones:
let numbers = [1, 2, 3, 4, 5, 6];
numbers.filter((number) => number % 2 === 0); // [2, 4, 6]


// .reduce(): This method reduces an array to a single value by applying
// a function to each element and accumulating the result.
// It's useful for operations like summing all values in an array:
let numbers = [1, 2, 3, 4, 5, 6];
numbers.reduce((total, current) => total + current, 0); // 21

/* ********************************************************** */
// Higher-Order Functions and Closures
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2


/* ********************************************************** */
// How to Write Arrow Function Expressions
// Function Expression
let fToC = function (tempInF) {
  return (tempInF - 32) * (5 / 9);
};

// Arrow Function Expression
let fToC = (tempInF) => {
  return (tempInF - 32) * (5 / 9);
};


/* ********************************************************** */
// How Are Arrow Functions Actually Different?
let demo = {
  showThis: () => console.log(this),
};

demo.showThis(); // Window { ... }



let demo = {
  showThis: function () {
    console.log(this);
  },
};

demo.showThis(); // {showThis: f}

/* ********************************************************** */
// Example of Leveraging the Arrow Function's this Behavior
let demo = {
  name: "demo",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayHelloLater: function () {
    setTimeout(() => console.log(`Hello, ${this.name}!`), 1000);
  },
};

demo.sayHello(); // Hello, demo!
demo.sayHelloLater(); // Hello, demo! (after 1 second)



let demo = {
  name: "demo",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayHelloLater: function () {
    setTimeout(this.sayHello.bind(this), 1000);
  },
};

/* ********************************************************** */
// Arrow Functions and the arguments Object
function showArgs() {
  console.log(arguments);
}

showArgs("Hello", "nomad!");
// Arguments(2) ["Hello", "nomad!", callee: ƒ, Symbol(Symbol.iterator): ƒ]


let showArgs = () => console.log(arguments);

showArgs("Hello", "nomad!"); // ReferenceError: arguments is not defined


/* ********************************************************** */
// The .forEach() Method
array.forEach((element) => {
  // do something with element
});


/* ********************************************************** */
// Arguments of the .forEach() Callback Function
array.forEach((element, index, array) => {
  // do something with element, index, and array
});

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
  console.log(`The number at index ${index} is ${number}`);
  console.log(`The array is ${array}`);
});

/*
OUTPUT
The number at index 0 is 1
The array is 1,2,3,4,5
The number at index 1 is 2
The array is 1,2,3,4,5
The number at index 2 is 3
The array is 1,2,3,4,5
The number at index 3 is 4
The array is 1,2,3,4,5
The number at index 4 is 5
The array is 1,2,3,4,5
*/




