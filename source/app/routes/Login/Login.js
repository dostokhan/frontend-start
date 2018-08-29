import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Router from 'next/router';

import {
  isAuthenticated,
  login,
} from 'redux/modules/auth';
// import Loader from 'components/Loader/Loader';


class Login extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      Router.push('/');
    }
  }
  render() {
    return (
      <div>
        Login
      </div>
    );
  }
}

Login.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state =>
  ({
    authenticated: isAuthenticated(state),
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login,
  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Login);
