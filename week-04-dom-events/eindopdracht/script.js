// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken

const form = document.querySelector('#task-form');
const inputTask = document.querySelector('#task-input');
const submitButton = document.querySelector('#submit');

let tasklist = document.querySelector('#tasks');
let counter = document.querySelector('#counter');

let taken = 1;

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    taakToevoegen();
    toonTaken();

    taken++;
});

const taakToevoegen = () =>{
    userInput = inputTask.value.trim();
    listItem = document.createElement('li');
    listItem.textContent = userInput;

    tasklist.appendChild(listItem);

    deleteButton = document.createElement('button');
    deleteButton.textContent = 'verwijderen';
    listItem.appendChild(deleteButton);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);

    deleteButton.addEventListener('click', () =>{
        listItem.remove();
    });
};

const toonTaken = () =>{
    counter.innerHTML = taken;
};


