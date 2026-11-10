const output1 = document.querySelector('#output-1');
const output2 = document.querySelector('#output-2');
const output3 = document.querySelector('#output-3');


const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,
  description() {
    // Vul in: geef een zin terug met this.name en this.brand via template literal
    return output1.innerHTML = `
    <h1>De naam van de auto is ${this.name}</h1>
    <p>Het merk van de auto is ${this.brand}</p>
    `;
  },
  isOld() {
    // Vul in: geef true terug als het year voor 2010 is
    return this.year < 2010;
  },
  drive(km) {
    // Vul in: verhoog this.mileage met km en geef de nieuwe km-stand terug
    this.mileage += km;
    return this.mileage
  },
};

// Toon de resultaten in de drie output-elementen
output1.innerHTML += `<p>${car.description()}</p>`
output2.innerHTML += `<p>${car.isOld()}</p>`
output3.innerHTML += `<p>${car.drive(5000)}</p>`