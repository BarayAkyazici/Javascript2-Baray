const button = document.querySelector('#btn');
let songList = document.querySelector('#songList');
const songInput = document.querySelector('#songInput');

button.addEventListener('click', () =>{
    const input = songInput.value.trim();

    const lijst = document.createElement('li');
    lijst.textContent = input;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Verwijderen';

    lijst.appendChild(deleteButton);

    deleteButton.addEventListener('click', () =>{
        lijst.remove();
    });

    songList.appendChild(lijst);
    songInput.value = '';
});