const a = 10;
const b = 20;
const numbers = [1, 2, 3, 4, 5];
const selectedCase = "case2";

// Ternary example.
const ternary = a > b ? "a is greater" : "b is greater";
console.log(ternary);

// If/else example.
if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a and b are equal");
}

// Do-while loop: always runs at least once.
let doWhileCounter = 0;
do {
    console.log(doWhileCounter);
    doWhileCounter++;
} while (doWhileCounter < 3);

// While loop: runs while the condition is true.
let whileCounter = 0;
while (whileCounter < 3) {
    console.log(whileCounter);
    whileCounter++;
}

// For loop.
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// For...in loop - iterates over keys/indices.
for (const index in numbers) {
    console.log(index);
}

// For...of loop - iterates over values.
for (const number of numbers) {
    console.log(number);
}

// Switch case.
switch (selectedCase) {
    case "case1":
        console.log("First case");
        break;
    case "case2":
        console.log("Second case");
        break;
    case "case3":
        console.log("Third case");
        break;
    default:
        console.log("No matching case");
        break;
}
