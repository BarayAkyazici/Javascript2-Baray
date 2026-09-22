// Voeg een event listener toe aan elke knop
// Knop 1: voeg tekst toe aan #message
// Knop 2: voeg een <li> toe aan #list met een tekst
// Knop 3: wissel de klasse 'active' op #message

let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');

let message = document.querySelector('#message');
let list = document.querySelector('#list');

btn1.addEventListener('click', () =>{
    message.textContent = 'Hallo, dit is mijn bericht.';
});

btn2.addEventListener('click', () =>{
    list.innerHTML = '<li>' + message.textContent + '</li>';
});

btn3.addEventListener('click', () =>{
    message.classList.toggle('active');
});