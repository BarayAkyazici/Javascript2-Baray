const origineel = document.querySelector('#origineel');
const kopie = document.querySelector('#kopie');

const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

// 1. Toon in #origineel de originele lijst met alleen namen en steden.
origineel.innerHTML = people.map(({city, name}) =>`<p>${city} - ${name}</p>`);
//    Gebruik destructuring in je .map().
// 2. Maak met .map() en de spread operator een nieuwe array waarin
const peopleKopie = people.map(person => ({
  ...person,
  city: 'Den Haag'
}));
//    de stad van elke persoon is gewijzigd naar 'Den Haag'.
//    De originele people-array moet onveranderd blijven.
// 3. Toon deze nieuwe lijst in #kopie, ook met destructuring.
kopie.innerHTML = peopleKopie
  .map(({city, name}) =>`<p>${city} - ${name}</p>`)
  .join('');