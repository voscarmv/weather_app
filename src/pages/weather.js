import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import newImage from '../rendering/newimage';

const Weather = (city) => {
  let image = null;
  if(city.picture === undefined){
    image = newElement('div');
  } else {
    image = newImage(city.picture);
  }
  const weather = listElements(
    newElement('div'),
    newElement('h1', null, city.fullname),
    image,
    newElement('pre', null, JSON.stringify(city.weather)),
  );
  return weather;
};

export default Weather;