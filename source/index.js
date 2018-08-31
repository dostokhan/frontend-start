import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import Layout from '@Components/Layout/Layout';

const render = Component =>
  (
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root'),
    )
  );

render(Layout);

// REACT HOT LOADER
// if (DEBUG) {
if (module.hot) {
  module.hot.accept('Layout/Layout', () => { render(Layout); });
}
// }
