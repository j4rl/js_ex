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
## Functions
This is how to declare and use functions in JavaScript:
```javascript
function add(x, y) {
    return x + y;
}
let sum = add(5, 10);
console.log(sum);
```
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
