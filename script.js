const URL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=03090868369362093ae55e0a515b253f";
let cityInput = document.querySelector("input");
let btn = document.querySelector("button");
let temperature = document.querySelector(".temperature");
let cityDiv = document.querySelector(".city");
let humidityDiv = document.querySelector("#humidity");
let windSpeedDiv = document.querySelector("#wind-speed");

btn.addEventListener("click", async (evt) => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=03090868369362093ae55e0a515b253f`;
    let response = await fetch(URL);
    let data = await response.json();
    updateData(data);
})

const updateData = (data) => {
    console.log(data);
    let temp = data.main.temp - 273.15;
    temperature.innerHTML = `<h5>${temp.toFixed(1)}&deg; c<h5>`;
    cityDiv.innerText = data.name;
    humidityDiv.innerText = `${data.main.humidity}%`;
    windSpeedDiv.innerText = `${data.wind.speed} km/hr`;
}