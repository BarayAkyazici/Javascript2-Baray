// Vul eerst movies.json met minimaal 4 films:
// [{"title":"","director":"","year":0,"genre":""}]

// Schrijf daarna de fetch zelf (zelfde patroon als oefening 1)
fetch('./movies.json')
    .then(response => response.json())
    .then(movies =>{
        const movielist = document.querySelector('#films')

        movies.forEach(movie => {
            const li = document.createElement('li');

            li.textContent = `${movie.title} - ${movie.director} - ${movie.year} - ${movie.genre}`

            movielist.appendChild(li);
        });
    })
    .catch(error => console.error('fout', error));