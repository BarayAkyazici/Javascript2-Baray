const title = document.querySelector('#title');
const btn = document.querySelector('#btn');
const section = document.querySelector('#section');

let naam = "Baray";
let functie = "Software developer";

let aantalKlikken = 0;

const berekenPunten = (klikken) =>{
    return klikken * 10;
};

btn.addEventListener('click', () => {
    aantalKlikken++;
    console.log(berekenPunten(aantalKlikken));

    title.innerHTML = `Hoi, ik ben ${naam} en ik doe de opleiding ${functie}.`;
    title.classList.toggle('active');

    const nieuwP = document.createElement('p');
    nieuwP.textContent = `Klik ${aantalKlikken}: je hebt nu ${berekenPunten(aantalKlikken)} punten.`;
    section.appendChild(nieuwP);

});
