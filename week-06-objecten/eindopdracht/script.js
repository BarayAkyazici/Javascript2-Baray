const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

const userstorage = document.querySelector('#users');

const showUsers = (users) => {
  userstorage.innerHTML = users.map((user) => {
    const { name, email, role, active } = user;

    return `
      <article>
        <h3>${name}</h3>
        <p>${email}</p>
        <p>Rol: ${role}</p>
        <p>${active ? 'Actief' : 'Niet actief'}</p>
      </article>
    `;
  }).join('');

  // Gebruik destructuring voor elke user: const { name, email, role, active } = user
  // Toon elke user als een <article> in #users
};

const filterUsers = () => {
  if (filter === 'admin') {
    const filteredUsers = users.filter((user) => {
      return user.role === 'admin';
    });

    showUsers(filteredUsers);
  } else {
    showUsers(users);
  }
};

// Maak een eventlistener voor de #filter-admin button
// Zet filter op 'admin' en roep filterUsers() aan

// Maak een eventlistener voor de #filter-all button
// Zet filter op 'all' en roep filterUsers() aan
document.querySelector('#filter-all').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

// Maak een eventlistener voor het #user-form submit event
// Lees naam, email en role uit de invoervelden
// Maak een nieuw user object aan met spread op een default object
// Voeg toe aan de array en roep filterUsers() aan

filterUsers();
