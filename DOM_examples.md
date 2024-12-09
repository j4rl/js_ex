# DOM manipulation in JavaScript
The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes, where each node is an object representing a part of the document.

## Selecting elements in the DOM (IE from the HTML file)
To select an element in the DOM, you can use the `document.querySelector()` method. This method takes a CSS selector as an argument and returns the first element that matches the selector.
here is an example:
```javascript
let element = document.querySelector('.my-class');
```
You can also use the `document.querySelectorAll()` method to select all elements that match the selector. This method returns a NodeList, which is an array-like object that contains all the matching elements.
here is an example:
```javascript
let elements = document.querySelectorAll('.my-class');
//usage
elements.forEach(element => {
    console.log(element);
});
```
## Modifying elements in the DOM
You can modify elements in the DOM by changing their properties or attributes. For example, you can change the text content of an element using the `textContent` property.
here is an example:
```javascript
let element = document.querySelector('.my-class');
element.textContent = 'Hello, world!';
```
You can also change the style of an element using the `style` property. This property is an object that contains all the CSS properties of the element.
here is an example:
```javascript
let element = document.querySelector('.my-class');
element.style.color = 'red';
element.style.fontSize = '24px';
```
## Adding and removing elements in the DOM
You can add new elements to the DOM using the `document.createElement()` method. This method creates a new element with the specified tag name.
here is an example:
```javascript
let newElement = document.createElement('div');
newElement.textContent = 'New element';
document.body.appendChild(newElement);
```
You can also remove elements from the DOM using the `remove()` method. This method removes the element from the document.
here is an example:
```javascript
let element = document.querySelector('.my-class');
element.remove();
```
## Event handling in the DOM
You can handle events in the DOM using event listeners. An event listener is a function that is called when a specific event occurs on an element.
here is an example:
```javascript
let button = document.querySelector('.my-button');
button.addEventListener('click', () => {
    console.log('Button clicked!');
});
```
Eventlistener to check if the document is loaded before running the script:
You do this because the script is loaded before the document is fully loaded, so you need to wait for the document to be loaded before running the script.
```javascript
document.addEventListener('DOMContentLoaded', () => {
    // code to run when the document is loaded
});
```