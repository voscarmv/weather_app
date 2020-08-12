import City from '../classes/city';

async function cityAPI(cityId) {
  try {
    console.log("hello from city api")
    const getCity = await fetch(
      `https://api.teleport.org/api/cities/geonameid%3A${cityId}/?embed=city%3Acountry%2C%20city%3Aurban_area%2Fua%3Aimages`,
      { mode: 'cors' }
    );
    const cityJSON = await getCity.json();
    console.log(cityJSON);
    let picture = "";
    if(cityJSON['_embedded'].hasOwnProperty('city:urban_area')) {
      if(cityJSON['_embedded']['city:urban_area']['_embedded'].hasOwnProperty('ua:images')){
        picture = cityJSON['_embedded']['city:urban_area']['_embedded']['ua:images']['photos']['image']['mobile'];
      }
    }
    return new City(
      cityJSON['name'],
      cityJSON['full_name'],
      cityJSON['_embedded']['city:country']['iso_alpha2'],
      picture,
      null
    );
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default cityAPI;