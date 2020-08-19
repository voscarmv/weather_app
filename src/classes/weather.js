class Weather {
  constructor(
    temp,
    feelsLike,
    tempMin,
    tempMax,
    pressure,
    humidity,
    icon,
    description,
  ) {
    this.temp = parseInt(temp, 10);
    this.feels_like = parseInt(feelsLike, 10);
    this.temp_min = parseInt(tempMin, 10);
    this.temp_max = parseInt(tempMax, 10);
    this.tempf = Math.round((this.temp * 9) / 5 + 32);
    this.feels_likef = Math.round((this.feels_like * 9) / 5 + 32);
    this.temp_minf = Math.round((this.temp_min * 9) / 5 + 32);
    this.temp_maxf = Math.round((this.temp_max * 9) / 5 + 32);
    this.pressure = pressure;
    this.humidity = humidity;
    this.icon = icon;
    this.description = description;
  }

  getTempC() {
    return this.temp;
  }

  getFeelsLikeC() {
    return this.feels_like;
  }

  getTempMinC() {
    return this.temp_min;
  }

  getTempMaxC() {
    return this.temp_max;
  }

  getTempF() {
    return this.tempf;
  }

  getFeelsLikeF() {
    return this.feels_likef;
  }

  getTempMinF() {
    return this.temp_minf;
  }

  getTempMaxF() {
    return this.temp_maxf;
  }

  getPressure() {
    return this.pressure;
  }

  getHumidity() {
    return this.humidity;
  }

  getIcon() {
    return `https://openweathermap.org/img/wn/${this.icon}@2x.png`;
  }

  getDescription() {
    return this.description;
  }
}

export default Weather;