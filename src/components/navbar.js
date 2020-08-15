import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import autoComplete from '../api/autocomplete';
import cityAPI from '../api/city';
import mainContainer from './maincontainer';
import Loading from '../pages/loading';
import Weather from '../pages/weather';
import notFound from '../pages/notfound';

const Navbar = () => {
  const embedded = '_embedded';
  const cityInput = newElement('input', 'w-100', null, null, ['placeholder', 'Type the name of your city here...']);

  const cityList = listElements(
    newElement('ul', 'nav flex-column', null, null, ['id', 'city_nav']),
  );

  const autoCompleteQueue = [];
  let first = true;
  let q = 0;

  const getCitiesList = async (cityString) => {

////////////////////

//      await setTimeoutPromise(t);

    cityList.innerHTML = '';
    cityList.appendChild(
      listElements(
        newElement('li', 'nav-item'),
        newElement('a', 'nav-link active', 'Loading...'),
      ),
    );
    q += 1;
    console.log(`start ${q} ${cityString}`);
    const cities = await autoComplete(cityString);
    console.log(`end ${q} ${cityString} ${cities.length}`);
    cityList.innerHTML = '';
    cities.forEach(
      (city) => {
        const newCity = listElements(
          newElement('li', 'nav-item'),
          newElement(
            'a',
            'nav-link',
            `${city.matching_full_name}`,
            async () => {
              try {
                cityInput.value = city.matching_full_name;
                cityList.innerHTML = '';
                mainContainer.display(Loading);
                const cityObject = await cityAPI(city[embedded]['city:item'].geoname_id);
                mainContainer.display(Weather(cityObject));
              } catch (e) {
                mainContainer.display(notFound);
              }
              return true;
            },
            ['href', '#'],
          ),
        );
        cityList.appendChild(newCity);
      },
    );
    // This ensures that the latest keyup event shows the latest city list,
    // and prevents that the longest-running api request shows on the city list.
    if (autoCompleteQueue.length > 0) {
      console.log(`next ${autoCompleteQueue.length}`);
      await autoCompleteQueue.shift()();
    } else {
      first = true;
    }
    return true;
  };

  const keyupAutocompleteStacker = (cityString) => {
    autoCompleteQueue.push(async () => { getCitiesList(cityString); });
    // console.log(autoCompleteQueue);
    if (first) {
      (async () => {
        await autoCompleteQueue.shift()();
      })();
      first = false;
    }
  };

  cityInput.addEventListener(
    'keyup',
    () => { keyupAutocompleteStacker(cityInput.value); },
  );

  const navbar = listElements(
    newElement('nav', 'navbar navbar-dark sticky-top bg-dark flex-column shadow'),
    cityInput,
    cityList,
  );

  return navbar;
};

export default Navbar;
