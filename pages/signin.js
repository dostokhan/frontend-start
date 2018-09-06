import React from 'react';
import withRedux from 'next-redux-wrapper';

import create from 'redux/create';
import SignIn from 'routes/SignIn/SignIn';
import Layout from '@Components/Layout/Layout';

const SignInPage = () =>
  (
    <Layout>
      <SignIn />
    </Layout>
  );


export default withRedux(create)(SignInPage);
