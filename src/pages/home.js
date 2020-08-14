import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';

const Home = (() => {
  const home = listElements(
    newElement('div'),
    newElement('h1', null, 'Welcome to the Weather App 🌩️'),
    newElement('p', null, 'Start typing the name of your city on the navbar above and click on your preferred city name.')
  );
  return home;
})();

export default Home;