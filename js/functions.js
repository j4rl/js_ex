// Function declarations are hoisted, so they can be called before they are defined.
function getGreeting() {
  return "Hello";
}

// Arrow function syntax is often used for short callbacks and expressions.
const getGreetingArrow = () => "Hello";

// Function with parameters.
function multiply(a, b) {
  return a * b;
}

const multiplyArrow = (a, b) => a * b;

// Function with default parameters.
function multiplyWithDefaults(a = 10, b = 20) {
  return a * b;
}

const multiplyWithDefaultsArrow = (a = 10, b = 20) => a * b;

// Rest parameters collect many arguments into one array.
function collectArguments(...args) {
  return args;
}

const collectArgumentsArrow = (...args) => args;

// Spread syntax expands an array into individual arguments.
function addThreeNumbers(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const total = addThreeNumbers(...numbers);

console.log(getGreeting());
console.log(getGreetingArrow());
console.log(multiply(5, 4));
console.log(multiplyArrow(5, 4));
console.log(multiplyWithDefaults());
console.log(multiplyWithDefaultsArrow());
console.log(collectArguments("a", "b", "c"));
console.log(collectArgumentsArrow("a", "b", "c"));
console.log(total);
