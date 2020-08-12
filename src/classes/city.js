class City {
  constructor(
    name,
    fullname,
    country,
    picture,
    weather
  ) {
    this.name = name;
    this.fullname = fullname;
    this.country = country;
    this.picture = picture;
    this.weather = weather;
  }

  setWeather(weather){
    this.weather = weather;
  }

  getWeather(){
    return this.weather;
  }
}

export default City;