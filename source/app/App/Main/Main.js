import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'routes/Home/Home';
import Login from 'routes/Login/Login';

// import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const Main = () =>
  (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );

export default Main;
