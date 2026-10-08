const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase(). 
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 

const searchFind = document.querySelector('#search-find');
const searchOutput = document.querySelector('#output-find');

const searchIncludes = document.querySelector('#search-includes');
const outputIncludes = document.querySelector('#output-includes');



searchFind.addEventListener('input', () =>{
    const gevonden = names.find(name => name.toLowerCase().startsWith(searchFind.value.toLowerCase()));
    searchOutput.innerHTML = gevonden;
    searchFind.value = '';
});

searchIncludes.addEventListener('input', () => {
    let gevonden = false;

    names.forEach(name => {
        if (name.toLowerCase().includes(searchIncludes.value.toLowerCase())) {
            gevonden = true;
        }
    });

    outputIncludes.innerHTML = gevonden;
    searchIncludes.value = '';
});
