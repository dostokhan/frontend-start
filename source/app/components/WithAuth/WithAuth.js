import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  isAuthorized,
} from 'redux/modules/auth';

const WithAuth = (WrappedComponent) => {
  class Auth extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
  Auth.propTypes = {
    authorized: PropTypes.bool.isRequired,
  };

  const mapStateToProps = state =>
    ({
      authorized: isAuthorized(state),
    });
  return connect(mapStateToProps)(Auth);
};

export default WithAuth;

