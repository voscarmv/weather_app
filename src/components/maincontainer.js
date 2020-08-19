import newElement from '../rendering/newelement';

const mainContainer = (() => {
  const name = 'main-display';
  const create = () => newElement('main', 'page', null, null, ['id', name]);
  const display = (page) => {
    document.getElementById(name).innerHTML = '';
    document.getElementById(name).appendChild(page);
  };
  return { create, display };
})();

export default mainContainer;