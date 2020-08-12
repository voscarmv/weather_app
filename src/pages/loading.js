import newElement from '../rendering/newelement';

const Loading = (() => {
  const loading = newElement('h1', null, 'Loading...'); 
  return loading;
})();

export default Loading;