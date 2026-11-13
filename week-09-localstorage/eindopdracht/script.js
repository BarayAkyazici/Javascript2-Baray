let allPokemon = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {
  document.querySelector('#results').innerHTML = items.map((pokemon) =>{
    const isfavoriet = favorites.includes(pokemon.name);

    return `
      <article>
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <button class="favorite-btn">
          ${isfavoriet ? 'Verwijder favoriet' : 'Voeg toe aan favorieten'}
        </button>
      </article>`;
  }).join('');
  // Zet elk item om naar een <article> met map() en toon het in #results
  // Toon de afbeelding en naam van elke Pokémon
  // Voeg een <button class="favorite-btn"> toe per kaartje
  // Gebruik includes() om te checken of de naam al in favorites staat
  // Geef de knop een andere tekst als de Pokémon al een favoriet is

  // Voeg daarna een click event listener toe aan elke .favorite-btn
  // De index i vertelt je welke Pokémon bij welke knop hoort: items[i].name
  document.querySelectorAll('.favorite-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const pokemonNaam = items[i].name;
      if(favorites.includes(pokemonNaam)){
        favorites = favorites.filter(name => name !== pokemonNaam);
      } else{
        favorites.push(pokemonNaam);
      }
      saveFavorites();
      showItems(items);
      // Voeg items[i].name toe aan favorites
      // Roep saveFavorites() aan
      // Roep showItems(items) opnieuw aan
    });
  });
};

document.querySelector('#loading').textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(r => r.json())
  .then(data => {
    document.querySelector('#loading').textContent = '';
      allPokemon = data.results.map((pokemon, index) => ({ ...pokemon, id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }));

    showItems(allPokemon);
    // Sla data.results op in allPokemon, voeg het id toe via de index
    // Roep showItems() aan met allPokemon
  })
  .catch(error => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });

// Maak een eventlistener voor de #show-all button
// Roep showItems() aan met allPokemon

// Maak een eventlistener voor de #show-favorites button
// Filter allPokemon op namen die in favorites staan (gebruik includes())
// Roep showItems() aan met het gefilterde resultaat
// Knop: Mijn favorieten
document.querySelector('#show-all').addEventListener('click', () => {
  showItems(allPokemon);
});

document.querySelector('#show-favorites').addEventListener('click', () => {

  const favoritePokemon = allPokemon.filter(pokemon =>
    favorites.includes(pokemon.name)
  );

  showItems(favoritePokemon);
});