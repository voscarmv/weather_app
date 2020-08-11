async function autoComplete(cityString, cityList) {
  try {
    const getCities = await fetch(`https://api.teleport.org/api/cities/?search=${cityString}&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Acountry%2C&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurban_area%2Fua%3Aimages`, { mode: 'cors' });
    const apiCities = await getCities.json();
    return apiCities['_embedded']['city:search-results'];
  } catch (error) {
    return error;
  }
}

export default autoComplete;