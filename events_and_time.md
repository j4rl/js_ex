# JavaScript Events and Time functions

## Event handling in the DOM
Click events are the most common events used with the HTML elements. Click events occur when an element is clicked.

```javascript
let button = document.querySelector('.my-button');
button.addEventListener('click', () => {
    console.log('Button clicked!');
});
```
Onchange for input fields:
```javascript
let input = document.querySelector('.my-input');
input.addEventListener('change', () => {
    console.log('Input changed!');
});
```
Onsubmit for forms:
```javascript
let form = document.querySelector('.my-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted!');
});
```
## Timing functions in JavaScript
The `setTimeout()` function is used to call a function after a specified amount of time. The first argument is the function to call, and the second argument is the time in milliseconds to wait before calling the function.

```javascript
setTimeout(() => {
    console.log('Hello, world!');
}, 1000);
```
The `setInterval()` function is used to call a function repeatedly at a specified interval. The first argument is the function to call, and the second argument is the time in milliseconds between each call.

```javascript
setInterval(() => {
    console.log('Hello, world!');
}, 1000);
```
To stop the interval, you can use the `clearInterval()` function. This function takes the interval ID as an argument.

```javascript
let intervalId = setInterval(() => {
    console.log('Hello, world!');
}, 1000);
clearInterval(intervalId);
```
The `requestAnimationFrame()` function is used to call a function before the next repaint of the browser. This function is used to create smooth animations.

```javascript
function animate() {
    // code to animate
    requestAnimationFrame(animate);
}
animate();
```
