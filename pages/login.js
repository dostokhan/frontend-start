import React from 'react';
import withRedux from 'next-redux-wrapper';

import create from 'redux/create';
import Login from 'routes/Login/Login';
import Layout from '@Components/Layout/Layout';

const LoginPage = () =>
  (
    <Layout>
      <Login />
    </Layout>
  );


export default withRedux(create)(LoginPage);
