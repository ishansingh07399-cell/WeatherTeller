console.log("hello world");
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temperature');
const descpt = document.querySelector('.description');  // . lagana mat bhulna class name ke pehle

async function checkWeather(city) {
  const api_key = "19a6161131d49f66c40aa4790a258845";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(url)
    .then(response => response.json());
    console.log(weather_data);
    
  temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  descpt.innerHTML=`${weather_data.weather[0].description}`

  switch(weather_data.weather[0].main)
  {
    case 'Clouds':
    weather_img.src="/assets/cloudy.jpeg"
    break;
    case 'Clear':
    weather_img.src="assets/clear.jpeg";
    break;

    case 'Rain':
    weather_img.src="assets/rain.png";
    break;
    case 'Mist':
    weather_img.src="assets/mist.jpeg";
    break;
    case 'Snow':
    weather_img.src="assets/snow.jpeg";
    break;   
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(inputBox.value);
});
