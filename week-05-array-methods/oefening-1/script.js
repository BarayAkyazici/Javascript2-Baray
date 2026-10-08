const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

// Filter: toon alleen scores boven de 50 in #result-filtered
// Map: verdubbel alle scores en toon in #result-map
// Sort: sorteer van laag naar hoog en toon in #result-sorted

const filtered = document.querySelector('#result-filtered');
const mapResult = document.querySelector('#result-map');
const sorted = document.querySelector('#result-sorted');

// filter
filtered.innerHTML = scores.filter(score => score > 50) ;

// verdubbel
mapResult.innerHTML = scores.map(n => n *2);

// sorteren
sorted.innerHTML = scores.sort((a, b) => a - b);
