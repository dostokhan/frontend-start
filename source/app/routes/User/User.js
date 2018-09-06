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
import {
  getKhoborsByUser,
  fetchKhoborList,
} from '@Redux/modules/khobor';


class User extends PureComponent {
  componentWillMount() {
    if (!this.props.user) {
      console.log('fetch user');
      this.props.fetchUser(this.props.username);
    } else if (this.props.khobors.length === 0) {
      console.log('got user but no khobor. fetch khobor');
      this.props.fetchKhoborList({ UserId: this.props.user.id });
    }
  }
  compomentWillReceiveProps(nextProps) {
    if (nextProps.user && !this.props.user) {
      this.props.fetchKhoborList({ UserId: nextProps.user.id });
      console.log('got khobor');
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
User.propTypes = {
  username: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  khobors: PropTypes.array.isRequired,
  fetchUser: PropTypes.func.isRequired,
  fetchKhoborList: PropTypes.func.isRequired,
};
const mapStateToProps = (state, props) =>
  ({
    user: getUserByUsername(state, props),
    khobors: getKhoborsByUser(state, props),
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUser,
    fetchKhoborList,
  }, dispatch);
export default WithAuth(connect(mapStateToProps, mapDispatchToProps)(User));
