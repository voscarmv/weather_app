import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import clouds from '../assets/img/clouds.jpg';
import newImage from '../rendering/newimage';

const Weather = (city) => {
  const cityweather = city.getWeather();
  const image = city.getPicture() || clouds;

  const temperature = newElement('div', 'temp-data text-center', `${cityweather.getTempC()}&deg;C`);

  const imgTemp = listElements(
    newElement('div', 'imgtemp d-flex flex-row justify-content-center align-items-center'),
    listElements(
      newElement('div'),
      temperature,
      listElements(
        newElement('div'),
        newImage(cityweather.getIcon()),
      ),
      newElement('div', 'desc-data text-center', cityweather.getDescription()),
    ),
  );

  imgTemp.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${image})`;
  imgTemp.style.backgroundSize = 'cover';
  imgTemp.style.backgroundPosition = 'center center';

  const sensation = newElement('div', null, `Thermal sensation of ${cityweather.getFeelsLikeC()}&deg;C`);
  const minmax = newElement('div', null, `Minimum temperatures of ${cityweather.getTempMinC()}&deg;C, maximum of ${cityweather.getTempMaxC()}&deg;C`);

  const weatherData = listElements(
    newElement('div', 'weatherdata d-flex flex-column'),
    sensation, minmax,
    listElements(
      newElement('div'),
      newElement(
        'input', null, null,
        () => {
          temperature.innerHTML = `${cityweather.getTempC()}&deg;C`;
          sensation.innerHTML = `Thermal sensation of ${cityweather.getFeelsLikeC()}&deg;C`;
          minmax.innerHTML = `Minimum temperatures of ${cityweather.getTempMinC()}&deg;C, maximum of ${cityweather.getTempMaxC()}&deg;C`;
        },
        ['id', 'celsius'], ['type', 'radio'], ['name', 'units'], ['checked', 'checked'],
      ),
      newElement('label', null, '&deg;C', null, ['for', 'celsius']),
      newElement(
        'input', null, null,
        () => {
          temperature.innerHTML = `${cityweather.getTempF()}&deg;F`;
          sensation.innerHTML = `Thermal sensation of ${cityweather.getFeelsLikeF()}&deg;F`;
          minmax.innerHTML = `Minimum temperatures of ${cityweather.getTempMinF()}&deg;F, maximum of ${cityweather.getTempMaxF()}&deg;F`;
        },
        ['id', 'farenheit'], ['type', 'radio'], ['name', 'units'],
      ),
      newElement('label', null, '&deg;F', null, ['for', 'farenheit']),
    ),
  );

  const weather = listElements(
    newElement('div'),
    newElement('h1', null, city.getFullName()),
    listElements(
      newElement('div', 'd-flex flex-wrap'),
      imgTemp,
      weatherData,
    ),
  );
  return weather;
};

export default Weather;