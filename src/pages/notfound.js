import newElement from '../rendering/newelement';

const Loading = (() => {
  const loading = newElement('h1', null, 'City not found.'); 
  return loading;
})();

export default Loading;