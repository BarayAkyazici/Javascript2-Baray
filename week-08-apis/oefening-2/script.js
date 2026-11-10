let allPokemon = [];
let searchTerm = ''

const pokemonList = document.querySelector('#pokemon-list');
const counter = document.querySelector('#counter');
const searchBar = document.querySelector('#search-bar');

// De API geeft een object terug met een 'results' array
// Elk item heeft een 'name' property
// Gebruik console.log(data) om de structuur te bekijken

// De afbeelding van een Pokémon staat op:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
// Sla het id op via de index bij het laden: { ...pokemon, id: index + 1 }
const renderProducts = (pokemonArray) => {
  pokemonList.innerHTML = '';

  pokemonArray.forEach(pokemon => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    const pokemonDiv = document.createElement('div');

    pokemonDiv.innerHTML = `
      <img src="${imageUrl}" alt="${pokemon.name}">
      <h3>${pokemon.name}</h3>`;

    pokemonList.appendChild(pokemonDiv);
  });
  counter.textContent = pokemonArray.length;
};

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Bekijk de structuur
    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1
    }));

    renderProducts(allPokemon);
  })
  .catch(error => console.error('Fout:', error));


searchBar.addEventListener('input', () =>{
    searchTerm = searchBar.value.toLowerCase();

    const filtered = allPokemon.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered);
});
// Voeg een event listener toe aan #search-bar
// Filter allPokemon op naam en herrender de lijst
