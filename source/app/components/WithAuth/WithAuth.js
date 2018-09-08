import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import {
  isAuthorized,
  getAuthorizedUser,
} from '@Redux/modules/auth';

const WithAuth = (WrappedComponent) => {
  class Auth extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
  // Auth.propTypes = {
  //   authorized: PropTypes.bool.isRequired,
  //   user: PropTypes.bool.isRequired,
  // };

  const mapStateToProps = state =>
    ({
      authorized: isAuthorized(state),
      authUser: getAuthorizedUser(state),
    });
  return connect(mapStateToProps)(Auth);
};

export default WithAuth;

