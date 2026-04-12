
async function getWeather() {
    const city = document.getElementById("city").value;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ "c4273816f7d9882c5a4c7e8be5bbe7f3"}&units=metric;'

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("weatherBox").classList.remove("hidden");

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
        document.getElementById("condition").innerText = "Condition: " + data.weather[0].main;
        document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
        document.getElementById("wind").innerText = "Wind Speed: " + data.wind.speed + " m/s";

        document.getElementById("error").innerText = "";

    } catch (error) {
        document.getElementById("weatherBox").classList.add("hidden");
        document.getElementById("error").innerText = error.message;
    }
}