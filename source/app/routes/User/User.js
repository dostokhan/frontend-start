import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Link from 'next/link';
import { StyledLink } from '@Styled/StyledLink';

import WithAuth from '@Components/WithAuth/WithAuth';
import {
  getUserByUsername,
  fetchUser,
} from '@Redux/modules/user';


class User extends PureComponent {
  componentWillMount() {
    if (!this.props.user) {
      this.props.fetchUser(this.props.username);
    }
  }
  render() {
    console.log(this.props.user);
    return (
      <Link
        href="/login"
        passHref
      >
        <StyledLink>Login</StyledLink>
      </Link>
    );
  }
}
User.propTypes = {
  username: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state, props) =>
  ({
    user: getUserByUsername(state, props),
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUser,
  }, dispatch);
export default WithAuth(connect(mapStateToProps, mapDispatchToProps)(User));
