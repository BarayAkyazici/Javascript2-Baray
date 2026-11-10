let allArticles = [];

const showArticles = (articles) => {
  const html = articles.map(article => {
    return `
      <article>
        <h2>${article.title}</h2>
        <p>${article.category}</p>
        <p>${article.summary}</p>
      </article>
    `
  }).join('');

  document.querySelector('#articles').innerHTML = html;
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    allArticles = articles;
    showArticles(articles);
  })
  .catch(error => console.error('Fout bij laden:', error));

document.querySelector('#filter-stad').addEventListener('click', () => {
    const stadArticles = allArticles.filter(article =>{
      return article.category === 'Stad';
    });
    showArticles(stadArticles);
  });

document.querySelector('#filter-technologie')
  .addEventListener('click', () => {
    const showTechnologie = allArticles.filter(article =>{
      return article.category === 'Technologie';
    });
    showArticles(showTechnologie);
  });

document.querySelector('#filter-alle')
  .addEventListener('click', () => {
    showArticles(allArticles);
  });

document.querySelector('#filter-media')
  .addEventListener('click', () => {
    const mediaArticles = allArticles.filter(article => {
      return article.category === 'Media';
    });

    showArticles(mediaArticles);
  });