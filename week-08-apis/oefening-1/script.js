fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data); // Bekijk de structuur
    for (let characters of data.results)
    document.querySelector('#characters').innerHTML += `
    <article>
      <h1>${characters.name}</h1>
      <img src="${characters.image}" alt="" width="200"></img>
    </article>
    `
    // De karakters zitten in data.results
    // Elk karakter heeft een 'name' en 'image' property
    // Toon de naam en afbeelding van elk karakter als <article> in #characters
  })
  .catch(error => console.error('Fout:', error));
