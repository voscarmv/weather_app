import newElement from '../rendering/newelement';

const Home = (() => {
  const home = newElement('h1', null, 'hello'); 
  return home;
})();

export default Home;