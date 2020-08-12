import Weather from '../classes/weather';

async function weatherAPI(city, country) {
  try {
    console.log("hello from city api")
    const getWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=b0ecf9b6e7ac316267e1a5acaf7c01d3`,
      { mode: 'cors' }
    );
    const weatherJSON = await getWeather.json();
    console.log(weatherJSON);
    return new Weather(
      weatherJSON.main.temp,
      weatherJSON.main.feels_like,
      weatherJSON.main.temp_min,
      weatherJSON.main.temp_max,
      weatherJSON.main.pressure,
      weatherJSON.main.humidity,
      weatherJSON.weather[0].icon,
    );
    // return weatherJSON;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default weatherAPI;