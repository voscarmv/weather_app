import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import autoComplete from '../api/autocomplete';
import cityAPI from '../api/city';
import mainContainer from '../components/maincontainer';
import Loading from '../pages/loading';
import Weather from '../pages/weather';

const Navbar = () => {

  const cityInput = document.createElement('input');
  cityInput.setAttribute('list', 'cities_list');
  cityInput.setAttribute('class', 'w-100');

  const cityList = listElements(
    newElement('ul', 'nav flex-column', null, null, ['id', 'city_nav']),
  );

  cityInput.addEventListener(
    'keyup',
    async () => {
      try {
        cityList.innerHTML = '';
        cityList.appendChild(
          listElements(
            newElement('li', 'nav-item'),
            newElement('a', 'nav-link active', 'Loading...'),
          )
        );
        const cities = await autoComplete(cityInput.value); 
        cityList.innerHTML = '';
        cities.forEach(
          (city, i) => {
            const newCity = listElements(
              newElement('li', 'nav-item'),
              newElement(
                'a',
                'nav-link', 
                `${city['matching_full_name']}`,
                async () => {
                  cityInput.value = city['matching_full_name'];
                  cityList.innerHTML = '';
                  mainContainer.display(Loading);
                  const cityObject = await cityAPI(city['_embedded']['city:item']['geoname_id']);
                  mainContainer.display(Weather(cityObject));
                },
                ['href', '#']
              ),
            );
            cityList.appendChild(newCity);
            console.log(city);
          },
        );
      } catch(e) {
        console.log(e);
      }
    },
  );

  const navbar = listElements(
    newElement('nav', 'navbar navbar-dark sticky-top bg-dark flex-column shadow'),
    cityInput,
    cityList
  );

  return navbar;
};

export default Navbar;
