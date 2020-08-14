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

  getName(){
    return this.name;
  }

  getFullName() {
    return this.fullname;
  }

  getCountry() {
    return this.country;
  }

  getPicture() {
    return this.picture;
  }

  getWeather(){
    return this.weather;
  }
}

export default City;