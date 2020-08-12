import City from '../classes/city';
import weatherAPI from './weather';

async function cityAPI(cityId) {
  try {
    console.log("hello from city api")
    const getCity = await fetch(
      `https://api.teleport.org/api/cities/geonameid%3A${cityId}/?embed=city%3Acountry%2C%20city%3Aurban_area%2Fua%3Aimages`,
      { mode: 'cors' }
    );
    const cityJSON = await getCity.json();
    console.log(cityJSON);
    let picture = 
      cityJSON._embedded
      ?.['city:urban_area']
      ?._embedded
      ?.['ua:images']
      ?.['photos']
      ?.[0]
      ?.image
      ?.mobile;
    const weather = await weatherAPI(
      cityJSON['name'], 
      cityJSON['_embedded']['city:country']['iso_alpha2']
    );

    return new City(
      cityJSON['name'],
      cityJSON['full_name'],
      cityJSON['_embedded']['city:country']['iso_alpha2'],
      picture,
      weather,
    );
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default cityAPI;