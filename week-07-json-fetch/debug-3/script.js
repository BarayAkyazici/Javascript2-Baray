// Fout gevonden: in de json file commas verkeerd, apendchild verkeerde ding in gezet, queryselector verkeerde naam, verkeerde bestandspad, bestand inladen in de html...
// Oplossing: alles wat ik heb opgenoemd aanpassen.

fetch('./users.json')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#results');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
