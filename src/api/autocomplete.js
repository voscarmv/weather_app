async function autoComplete(cityString) {
  const embedded = '_embedded';
  try {
    const getCities = await fetch(
      `https://api.teleport.org/api/cities/?search=${cityString}&embed=city%3Asearch-results%2Fcity%3Aitem`,
      { mode: 'cors' },
    );
    const apiCities = await getCities.json();
    return apiCities[embedded]['city:search-results'];
  } catch (error) {
    return error;
  }
}

export default autoComplete;