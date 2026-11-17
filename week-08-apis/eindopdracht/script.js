
const showWeather = (data) => {
  document.querySelector('#weather-info').innerHTML = `
    <h2>${data.name}</h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weer">
    <p>Temperatuur: ${Math.round(data.main.temp)}°C</p>
    <p>Gevoelstemperatuur: ${Math.round(data.main.feels_like)}°C</p>
    <p>Luchtvochtigheid: ${data.main.humidity}%</p>
    <p>Windsnelheid: ${data.wind.speed} m/s</p>
  `;
};

const getWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      showWeather(data);
    });
};

document.querySelector('#search-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const cityInput = document.querySelector('#city-input');
  const city = cityInput.value;

  getWeather(city);

  cityInput.value = '';
});
