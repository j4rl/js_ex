// The 'defer' attribute on the script tag makes the browser wait until the DOM is fully parsed.
// DOM = Document Object Model: the browser's in-memory tree representation of the HTML document.
const heading = document.createElement('h1'); // creates an h1 element
const container = document.querySelector('div'); // selects the container div
const btn = document.querySelector('button'); // selects the button element

container.appendChild(heading); // append heading to the div once, on load

btn.addEventListener('click', function() { // toggle the heading text on each click
    heading.textContent = heading.textContent === 'Peek-a-boo!' ? '' : 'Peek-a-boo!';
});
