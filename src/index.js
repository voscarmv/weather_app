import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles/dashboard.css';
import "core-js/stable";
import "regenerator-runtime/runtime";
import listElements from './rendering/listelements';
import newElement from './rendering/newelement';
import autoComplete from './api/autocomplete';
import cityAPI from './api/city';

// async function citySearch(cityString, cityList) {
//   try {
//     // https://api.teleport.org/api/cities/?search=mat&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Acountry
//     const getCities = await fetch(`https://api.teleport.org/api/cities/?search=${cityString}`, { mode: 'cors' });
//     const apiCities = await getCities.json();
//     console.log(cityString);
//     console.log(apiCities['_embedded']['city:search-results']);
//     console.log("before");
//     cityList.innerHTML = '';
//     apiCities['_embedded']['city:search-results'].forEach(
//       (city, i) => {
//         const newCity = listElements(
//           newElement('li', 'nav-item'),
//           newElement('a', 'nav-link', `${i}: ${city['matching_full_name']}`),
//         );
//         // newCity.setAttribute('value', );
//         // const newCity = document.createElement('option');
//         // newCity.setAttribute('value', `${i}: ${city['matching_full_name']}`);
//         cityList.appendChild(newCity);
//         console.log(newCity);
//       },
//     );
//     console.log("after");
//     // img.src = getGif.data.images.original.url;
//   } catch (error) {
//     console.log("ERROR ERROR ERROR");
//     console.log(error);
//   }
// }

// async function cityWeather(cityString) {
//   try {
//     const getCities = await fetch(`https://api.teleport.org/api/cities/?search=${cityString}`, { mode: 'cors' });
//     const apiCities = await getCities.json();
//     console.log(cityString);
//     console.log(apiCities['_embedded']['city:search-results']);
//     apiCities['_embedded']['city:search-results'].forEach(
//       (city) => {
//         const newCity = document.createElement('option');
//         newCity.setAttribute('value', city['matching_full_name']);
//         cityList.appendChild(newCity);
//       },
//     );


//     // img.src = getGif.data.images.original.url;
//   } catch (error) {
//     console.log("ERROR ERROR ERROR");
//     console.log(error);
//   }
// }

const pagecontent = (() => {
  const cityInput = document.createElement('input');
  cityInput.setAttribute('list', 'cities_list');
  cityInput.setAttribute('class', 'w-100');

  const cityList = listElements(
    newElement('ul', 'nav flex-column', null, null, ['id', 'city_nav']),
    listElements(
      newElement('li', 'nav-item'),
      newElement('a', 'nav-link active', 'City1'),
    ),
    listElements(
      newElement('li', 'nav-item'),
      newElement('a', 'nav-link', 'City2'),
    ),
    listElements(
      newElement('li', 'nav-item'),
      newElement('a', 'nav-link', 'City3'),
    ),
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
                `${i}: ${city['matching_full_name']} ${city['_embedded']['city:item']['geoname_id']}`,
                () => {
                  cityAPI(city['_embedded']['city:item']['geoname_id']);
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

  // const option1 = document.createElement('option');
  // option1.setAttribute('value', 'Chocolate');

  // cities.appendChild(option1);

//   <datalist id="ice-cream-flavors">
//     <option value="Chocolate">
//     <option value="Coconut">
//     <option value="Mint">
//     <option value="Strawberry">
//     <option value="Vanilla">
// </datalist>

document.body.appendChild(cityInput);
document.body.appendChild(cityList);

})();
