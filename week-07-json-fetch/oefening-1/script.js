fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    // Toon elk boek als een <li> in #books-list
    const booklist = document.querySelector('#books-list');
    books.forEach(book => {
      const li = document.createElement('li');

      li.textContent = `${book.title} - ${book.author} - ${book.year}`
      booklist.appendChild(li);
    });

  })
  .catch(error => console.error('Fout:', error));
