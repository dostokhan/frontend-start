import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  isAuthenticated,
} from 'redux/modules/auth';

class PrivateRoute extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return (<Route {...this.props} />);
    }

    return (<Redirect to='/login' />);
  }
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state =>
  ({
    isAuthenticated: isAuthenticated(state),
  });


export default connect(mapStateToProps)(PrivateRoute);
