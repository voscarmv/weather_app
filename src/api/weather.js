import Weather from '../classes/weather';

async function weatherAPI(city, country) {
  try {
    const getWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=b0ecf9b6e7ac316267e1a5acaf7c01d3`,
      { mode: 'cors' },
    );
    const weatherJSON = await getWeather.json();
    return new Weather(
      weatherJSON.main.temp,
      weatherJSON.main.feels_like,
      weatherJSON.main.temp_min,
      weatherJSON.main.temp_max,
      weatherJSON.main.pressure,
      weatherJSON.main.humidity,
      weatherJSON.weather[0].icon,
      weatherJSON.weather[0].description,
    );
  } catch (error) {
    return error;
  }
}

export default weatherAPI;