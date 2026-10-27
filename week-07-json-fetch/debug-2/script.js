// Fout gevonden: comma op de laatste regel bij de array
// Oplossing: de laatste comma verwijderen

fetch('./products.json')
  .then(r => r.json())
  .then(products => {
    const list = document.querySelector('#results');
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} — €${product.price}`;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
