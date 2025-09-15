document.addEventListener('DOMContentLoaded', function() {  
    //Waits for the DOM to be fully loaded before running the script, 
    //Why? because the script is in the head tag and the DOM is not fully loaded yet
    //DOM is the structure of the HTML document, the browser creates a DOM tree from the HTML document
    //DOM stands for Document Object Model, has nothing to do with Vin Diesels character in Fast and Furious
    let rubrik=document.createElement('h1'); //creates a h1 element
    const btn = document.querySelector('button'); //selects the button element

    btn.addEventListener('click', function() { //event listener for the button, when clicked it will append the rubrik to the div in the body
        //append rubrik to the div in the body
        document.querySelector('div').appendChild(rubrik);
        //toggles the innerHTML
        if(rubrik.innerHTML=='Tittut!'){
            rubrik.innerHTML='';
        }
        else{
            rubrik.innerHTML='Tittut!';
        }
    });

});