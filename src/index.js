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
  let first = true;

  const astout = async (t) => {
    if (t > 0) {
      await setTimeoutPromise(t);
      if (que.length > 0) {
        console.log(`next ${que.length}`);
        await que.shift()();
      } else {
        first = true;
        timeoutv = 4000;
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
    que.push(async () => { astout(f); });
    console.log(que);
    if (first) {
      (async () => {
        await que.shift()();
      })();
      first = false;
    }
  };

  const container = Layout(pageBody.create(), Home);
  container.appendChild(
    newElement(
      'button',
      null,
      'click',
      () => {
        console.log(timeoutv);
        buttonclick(timeoutv);
        timeoutv -= 1000;
      },
    ),
  );
  return container;
})();

document.body.appendChild(pagecontent);