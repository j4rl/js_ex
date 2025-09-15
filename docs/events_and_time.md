# JavaScript Events and Time functions

## Event handling in the DOM
Click events are the most common events used with the HTML elements. Click events occur when an element is clicked.
```javascript
let button = document.querySelector('.my-button');
button.addEventListener('click', () => {
    console.log('Button clicked!');
});
```
Hover events occur when the mouse pointer is moved over an element.
```javascript
let div = document.querySelector('.my-div');
div.addEventListener('mouseover', () => {
    console.log('Div hovered!');
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
## Usage of events and timing functions, best practices
- Always remove event listeners when they are no longer needed to prevent memory leaks.
- Use event delegation to handle events on multiple elements efficiently.
- Use `setTimeout()` for one-time delays and `setInterval()` for repeated actions, but be cautious with intervals to avoid performance issues.
- Use `requestAnimationFrame()` for animations to ensure they run smoothly and efficiently.
- Debounce or throttle events like scroll and resize to improve performance.
- Always pass a named function to `setTimeout()` and `setInterval()` instead of an anonymous function for better readability and maintainability.
- Use `event.preventDefault()` to prevent default actions when necessary, such as form submissions or link clicks.
- Use `event.stopPropagation()` to stop the event from bubbling up the DOM tree when needed
- Test event handling and timing functions across different browsers to ensure compatibility.
