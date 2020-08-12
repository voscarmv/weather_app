class Weather {
  constructor(
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
  ) {
    this.temp = temp;
    this.feels_like	= feels_like;
    this.temp_min	= temp_min;
    this.temp_max	= temp_max;
    this.pressure	= pressure;
    this.humidity = humidity;  
  }
}

export default Weather;