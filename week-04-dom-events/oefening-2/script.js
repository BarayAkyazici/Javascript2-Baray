// Selecteer alle vakken met querySelectorAll als houvast
// Loop met een for of loop door elk vak en voeg aan elk vak een click-event toe dat de klasse 'active' wisselt
const boxen = document.querySelectorAll('.box');

for (let box of boxen){
    box.addEventListener('click', () =>{
        box.classList.toggle('active');
    });
};


