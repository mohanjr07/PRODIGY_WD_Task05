function getWeather() {
  const apiKey = 'YOUR_API_KEY';
  const location = document.getElementById('locationInput').value;
  const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}