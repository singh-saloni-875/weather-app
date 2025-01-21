// function getWeather(){
//     const apikey = '';
//     const city= document.getElementById('city').value;

//     if(!city){
//         alert('please enter a city');
//         return;
//     }
//     const currentWeatherUrl = `https://home.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
//     const forecastUrl= `https://home.openweathermap.org/data/2.5/forcast?q=${city}&appid=${apikey}`;
// }
// function getWeather(){
//     fetch(currentWeatherUrl).then(response => response.json()).then(data => displayWeather(data));
//     })
//     .catch(error =>{
//         console.error('Error fetching current Weather data:', error));
//     alert('Error fetching current weather data. please try again.');
//     });
// }

// Add event listener to the button
document.getElementById("search-btn").addEventListener("click", fetchWeather);

async function fetchWeather() {
    const city = document.getElementById("city").value.trim(); // Get city from input
    const errorMessage = document.getElementById("error-message");
    const weatherDescription = document.getElementById("weather-description");
    const temperature= document.getElementById("temperature");

    // Clear any previous messages or data
    errorMessage.textContent = "";
    weatherDescription.textContent = "";
    temperature.textContent="";

    // Check if the input is empty
    if (city === "") {
        errorMessage.textContent = "Please enter a city name!";
        return;
    }

    const apiKey = "cd8f9a6ae6bd381ab460c6ff91fab546"; //  OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Fetch weather data
        const response = await fetch(apiUrl);

        // Handle errors in the API response
        if (!response.ok) {
            throw new Error("City not found.please try again.");
        }

        const data = await response.json();

        // Display weather information
        document.querySelector("h3").textContent= `${data.name} ${data.sys.country}`

        weatherDescription.textContent=`Weather is: ${data.weather[0].description}`;
        temperature.textContent= `Temperature: ${data.main.temp}°C `;
        } catch (error){
            errorMessage.textContent= error.message || "ohh!! Somethings went wrong...!"
        }
}
