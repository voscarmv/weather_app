import newElement from '../rendering/newelement';

const Weather = (() => {
  const weather = newElement('h1', null, 'Weather'); 
  return weather;
})();

export default Weather;