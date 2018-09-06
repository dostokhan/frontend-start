import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Link from 'next/link';
import { StyledLink } from '@Styled/StyledLink';

import WithAuth from '@Components/WithAuth/WithAuth';
import {
  getAuthUser,
  fetchUser,
} from '@Redux/modules/user';


class User extends PureComponent {
  componentDidMount() {
    if (this.props.authorized && !this.props.authUser) {
      this.props.fetchUser();
    }
  }
  render() {
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

const mapStateToProps = state =>
  ({
    authUser: getAuthUser(state),
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUser,
  }, dispatch);
export default WithAuth(connect(mapStateToProps, mapDispatchToProps)(User));
