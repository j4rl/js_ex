function myFunction() {
  return "Hello";     //function returns a value, in this case a string. If you don't return a value, the function will return undefined.
}
//new function syntax
const myFunction = () => {  //arrow function works the same way as the function keyword
  return "Hello";
};

//function with parameters
function myFunction(a, b) {
  return a * b;
}
//new function syntax
const myFunction = (a, b) => {
  return a * b;
};

//function with default parameters
function myFunction(a = 10, b = 20) {   //default parameters are used to assign default values to function parameters
  return a * b;
}
//new function syntax
const myFunction = (a = 10, b = 20) => {
  return a * b;
};

//function with rest parameters
function myFunction(...args) {  //rest parameter is used to pass a variable number of arguments to a function
  return args;
}
//new function syntax
const myFunction = (...args) => { 
  return args;
};

//function with spread operator
function myFunction(a, b, c) {  //spread operator is used to split up array elements or object properties
  return a + b + c;
}
//new function syntax
const myFunction = (a, b, c) => {
  return a + b + c;
};