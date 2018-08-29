import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from 'App/App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
}

render(App);

// REACT HOT LOADER
// if (DEBUG) {
if (module.hot) {
  module.hot.accept('App/App', () => { render(App); });
}
// }
