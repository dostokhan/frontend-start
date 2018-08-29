import React from 'react';
import withRedux from 'next-redux-wrapper';

import create from 'redux/create';
import Login from 'routes/Login/Login';
import App from 'App/App';

const LoginPage = () =>
  (
    <App>
      <Login />
    </App>
  );


export default withRedux(create)(LoginPage);
