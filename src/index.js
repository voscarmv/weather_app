import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Layout from './pages/layout';
import Home from './pages/home';
import pageBody from './components/pagebody';
import newElement from './rendering/newelement';

const pagecontent = (() => {
  const setTimeoutPromise = timeout => new Promise(resolve => {
    setTimeout(() => { console.log(timeout); resolve(); }, timeout);
  });

  let timeoutv = 4000;

  const que = [];

  const astout = async (t) => {
    if (t > 0) {
      await setTimeoutPromise(t);
      if (que.length > 0) {
        await que.shift()();
      }
    } else {
      return true;
    }
    return true;
  };

  // que.push(async () => { astout(3000); });
  // que.push(async () => { astout(2000); });
  // que.push(async () => { astout(1000); });
  // (async () => {
  //   await que.shift()();
  // })();

  const buttonclick = (f) => {
    que.push(f);
    // console.log(que);
    if (que.length === 1) {
      (async () => {
        await que.shift()();
      })();
    }
  };

  const container = Layout(pageBody.create(), Home);
  container.appendChild(
    newElement(
      'button',
      null,
      'click',
      () => {
        buttonclick(async () => { astout(timeoutv); });
        timeoutv -= 1000;
      },
    ),
  );
  return container;
})();

document.body.appendChild(pagecontent);