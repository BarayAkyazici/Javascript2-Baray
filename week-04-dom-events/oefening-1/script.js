// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element
const inputText = document.querySelector('#input');
const addButton = document.querySelector('#add');
let list = document.querySelector('#list');

addButton.addEventListener('click', () =>{
    let userInput = inputText.value.trim();

    let listItem = document.createElement('li');
    listItem.textContent = userInput;

    list.appendChild(listItem);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Verwijderen';

    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', () =>{
        listItem.remove();
    });

    inputText.value = '';
})