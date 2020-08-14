import newElement from '../rendering/newelement';
import nestElements from '../rendering/nestelements';

const Footer = () => {
  const footer = nestElements(
    newElement('footer', 'footer bg-white'),
    newElement('a', 'container', 'View on github', null, ['href', 'https://github.com/voscarmv/weather_app']),
  );
  return footer;
};

export default Footer;