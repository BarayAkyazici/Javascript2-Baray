let form = document.querySelector('#discount-form');

let amount = document.querySelector('#amount');
let discount = document.querySelector('#discount');
let button = document.querySelector('#btn');
let result = document.querySelector('#result');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    let bedrag = amount.value;
    let korting = discount.value;
    
    if(bedrag === '' || korting === ''){
        result.textContent = 'vul de velden in';
    } else{
        result.textContent = berekenKorting(bedrag, korting);
    }
});

function berekenKorting(bedrag, korting){
    let kortingPrijs = bedrag * (korting / 100);
    let endprijs = bedrag - kortingPrijs;
    return endprijs;
};


// Stap 1: Schrijf calculateTotal(bedrag, korting)
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij
