// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
// Null-check: toon een melding als er nog niets opgeslagen is

const input = document.getElementById("input");
const opslaanBtn = document.getElementById("save");
const retrieveBtn = document.getElementById("retrieve");
const result = document.getElementById("result");

opslaanBtn.addEventListener('click', () =>{
    const tekst = input.value;
    localStorage.setItem("opgeslagenItem", tekst)
    result.textContent = "opgeslagen";
})

retrieveBtn.addEventListener('click', () => {
    const savedTekst = localStorage.getItem('opgeslagenItem');

    if (savedTekst === null){
        result.textContent = "er is nog geen tekst opgeslagen";
    } else{
        result.textContent = savedTekst;
    }
});