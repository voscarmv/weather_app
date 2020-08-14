class Weather {
  constructor(
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    icon,
    description,
  ) {
    this.temp = parseInt(temp);
    this.feels_like	= parseInt(feels_like);
    this.temp_min	= parseInt(temp_min);
    this.temp_max	= parseInt(temp_max);
    this.tempf = Math.round((this.temp*9)/5 + 32);
    this.feels_likef	= Math.round((this.feels_like * 9)/5 + 32);
    this.temp_minf	= Math.round((this.temp_min * 9)/5 + 32);
    this.temp_maxf	= Math.round((this.temp_max * 9)/5 + 32);
    this.pressure	= pressure;
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
    return this.humidity;0
  }

  getIcon() {
    return `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
  }

  getDescription() {
    return this.description;
  }
}

export default Weather;