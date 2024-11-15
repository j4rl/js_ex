document.addEventListener('DOMContentLoaded', function() {
    let rubrik=document.createElement('h1');
    const btn = document.querySelector('button');
    btn.addEventListener('click', function() {
        alert('Hello World');
    });
    rubrik.innerHTML='Hello World';
    document.appendChild(rubrik);    
});