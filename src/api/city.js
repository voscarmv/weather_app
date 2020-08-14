import City from '../classes/city';
import weatherAPI from './weather';

async function cityAPI(cityId) {
  const embedded = '_embedded';
  try {
    const getCity = await fetch(
      `https://api.teleport.org/api/cities/geonameid%3A${cityId}/?embed=city%3Acountry%2C%20city%3Aurban_area%2Fua%3Aimages`,
      { mode: 'cors' },
    );
    const cityJSON = await getCity.json();

    const getSafe = (func) => {
      try {
        return func();
      } catch (e) {
        return undefined;
      }
    };
    const picture = getSafe(() => cityJSON[embedded]['city:urban_area'][embedded]['ua:images'].photos[0].image.mobile);
    const weather = await weatherAPI(
      cityJSON.name,
      cityJSON[embedded]['city:country'].iso_alpha2,
    );

    return new City(
      cityJSON.name,
      cityJSON.full_name,
      cityJSON[embedded]['city:country'].iso_alpha2,
      picture,
      weather,
    );
  } catch (error) {
    return error;
  }
}

export default cityAPI;