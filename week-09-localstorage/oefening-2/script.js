const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

// Stap 1: sla het object op zonder JSON.stringify en lees het terug — wat zie je?
// Stap 2: sla het object op MET JSON.stringify en lees het terug met JSON.parse
// Stap 3: toon het resultaat van beide methoden op de pagina

// (voor mij zelf)
// Stringify: omzetten naar tekst.
// Van tekst omzetten naar js.

const zonderJson = document.getElementById("zonder-json");
const metJson = document.getElementById("met-json");

// Zonder JSON
localStorage.setItem("userZonderJson", user);

const resultaatZonderJson = localStorage.getItem("userZonderJson");
zonderJson.innerHTML += `<p>Resultaat: ${resultaatZonderJson}</p>`;

// met stringify
localStorage.setItem("userMetJson", JSON.stringify(user));

// terug lezen
const resultaatMetJson = JSON.parse(localStorage.getItem("userMetJson"));

metJson.innerHTML += `<p>Naam: ${resultaatMetJson.name}</p>`;
metJson.innerHTML += `<p>Leeftijd: ${resultaatMetJson.age}</p>`;
metJson.innerHTML += `<p>Stad: ${resultaatMetJson.city}</p>`;