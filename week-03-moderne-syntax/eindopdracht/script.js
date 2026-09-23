// Stap 1: Selecteer het formulier en de profielenlijst
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart

const form = document.querySelector('#profile-form')

const inputName = document.querySelector('#name');
const inputFunctie = document.querySelector('#role');
const inputAfdeling = document.querySelector('#department');

const profileList = document.querySelector('#profiles-list');

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const name = inputName.value;
    const functie = inputFunctie.value;
    const afdeling = inputAfdeling.value;

    profileList.innerHTML +=`
        <h3> ${name} </h3>
        <p> ${functie} </p>
        <p> ${afdeling} </p>
    `;
    form.reset();
});