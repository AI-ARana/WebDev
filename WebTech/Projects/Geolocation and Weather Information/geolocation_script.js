function getWeather() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const apiKey = 'fb964e2ce62fc4c70c200c8e1cf86369';
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            try {
                // Fetch the weather data
                const response = await fetch(weatherUrl);

                if (!response.ok) { // If response is not successful (e.g., 401, 404)
                    throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();
                displayWeather(data);

            } catch (error) {
                // Log the error details for debugging
                console.error('Error fetching weather data:', error);
                alert('Failed to retrieve weather data. Please check your API key and try again.');
            }
        }, (error) => {
            console.error('Geolocation error:', error);
            alert('Unable to retrieve your location.');
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

function displayWeather(weather) {
    if (weather && weather.main && weather.main.temp) {  // Ensure weather data is valid
        const weatherInfo = document.getElementById('weather-info');
        const temp = weather.main.temp;
        const city = weather.name;
        const description = weather.weather[0].description;

        weatherInfo.innerHTML = `
      <h2>Weather in ${city}</h2>
      <p>Temperature: ${temp}°C</p>
      <p>${description}</p>
    `;
    } else {
        // Log the invalid weather data for debugging
        console.error('Invalid weather data:', weather);
        alert('Failed to retrieve valid weather data.');
    }
}
