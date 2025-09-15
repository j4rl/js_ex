# Code examples

##  Variables
This is how to declare and use variables in JavaScript:
The difference between `var` and `let` is that var is function scoped and let is block scoped, 
which means that a variable declared with `var` is available in the whole function, 
while a variable declared with `let` is only available in the block it was declared in.
```javascript
var x = 5; // x is an integer
var name = "John"; // name is a string
var isTrue = true; // isTrue is a boolean
var pi = 3.14; // pi is a float

let y = 10; // y is an integer
let town = "Stockholm"; // town is a string
let isFalse = false; // isFalse is a boolean
let e = 2.718; // e is a float

const z = 15;  // z is an integer
const country = "Sweden"; // country is a string
const isNull = null; // isNull is a null
const phi = 1.618; //phi is a float
```
- Scope of variables is determined by where they are declared.
- Variables declared with `var` are function scoped.
- Variables declared with `let` are block scoped.
- Variables declared with `const` are block scoped and cannot be reassigned.
- Variables can be declared without a value, in which case they are `undefined`.
- JavaScript will automatically determine the type of a variable based on the value assigned to it.

## If statements
This is how to use if statements in JavaScript:
```javascript
let x = 5;
if (x > 0) {
    console.log("x is positive");
} else if (x < 0) {
    console.log("x is negative");
} else {
    console.log("x is zero");
}
```
- The condition in the if statement is enclosed in parentheses.
- The code to be executed if the condition is true is enclosed in curly braces.
- The else if and else statements are optional.
- The else if statement can be used to check multiple conditions.
- Ternary operator can be used as a shorthand for if-else statements:
```javascript
let result = (x > 0) ? "x is positive" : (x < 0) ? "x is negative" : "x is zero";
console.log(result);
```
    - The condition is followed by a question mark `?`.
    - The value to be returned if the condition is true is followed by a colon `:`.
    - The value to be returned if the condition is false is followed by a colon `:`.
    - The ternary operator can be nested.
- The ternary operator can be used to assign a value to a variable based on a condition.

## Switch statements

This is how to use switch statements in JavaScript:
```javascript
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}
```
- The expression in the switch statement is enclosed in parentheses.
- Each case is followed by a colon `:`.
- The code to be executed if the case matches is enclosed in curly braces.
- The break statement is used to exit the switch statement.
- The default case is optional and is executed if none of the cases match.


## Loops
This is how to use loops in JavaScript:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
foreach (let i in [1, 2, 3, 4, 5]) {
    console.log(i);
}
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
do {
    console.log(i);
    i++;
} while (i < 5);
```
- The for loop is used to iterate over a block of code a specific number of times.
- The foreach loop is used to iterate over the elements of an array or object.
- The while loop is used to iterate over a block of code as long as a specified condition is true.
- The do-while loop is similar to the while loop, but it will always execute the block of code at least once, even if the condition is false.
- The loop variable is declared with `let` to limit its scope to the loop.

## Functions
This is how to declare and use functions in JavaScript:
```javascript
function add(x, y) {
    return x + y;
}
let sum = add(5, 10);
console.log(sum);
```
- Functions are declared with the `function` keyword.
- Function parameters are enclosed in parentheses and separated by commas.
- `...` (rest parameters) can be used to represent an indefinite number of arguments as an array.
```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
let total = sum(1, 2, 3, 4, 5);
console.log(total); // Output: 15
```
- The function body is enclosed in curly braces.
- The `return` statement is used to return a value from the function.
- Arrow functions provide a shorter syntax for writing functions:
```javascript
const multiply = (x, y) => x * y;
let product = multiply(5, 10);
console.log(product);
```
    - Arrow functions use the `=>` syntax.
    - If the function has a single expression, the curly braces and `return` statement can be omitted.
    - If the function has a single parameter, the parentheses can be omitted.


## Classes
This is how to declare and use classes in JavaScript:
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let john = new Person("John", 30);
john.greet();
```
- Classes are declared with the `class` keyword.
- The constructor method is used to initialize the object's properties.
- Methods are declared without the `function` keyword.
- The `this` keyword is used to refer to the current object.
- Objects are created using the `new` keyword.
- JavaScript supports inheritance using the `extends` keyword:
```javascript
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    study() {
        console.log(`${this.name} is studying.`);
    }
}
let jane = new Student("Jane", 20, "S12345");
jane.greet();
jane.study();
```
    - The `super` keyword is used to call the parent class's constructor.
    - The child class inherits properties and methods from the parent class.
## Conclusion
This document provided examples of basic JavaScript concepts including variables, if statements, switch statements, loops, functions, and classes. Each section included code snippets and explanations to help understand how to use these features in JavaScript.

## Additional Resources
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools - JavaScript Tutorial](https://www.w3schools.com/js/)
- [JavaScript Info](https://javascript.info/)

