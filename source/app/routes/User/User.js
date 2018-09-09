import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import {
  Container,
} from '@Styled/Responsive';
import WithAuth from '@Components/WithAuth/WithAuth';
import KhoborList from '@Components/KhoborList/KhoborList';
import {
  getUserByUsername,
  fetchUser,
} from '@Redux/modules/user';
import {
  getKhoborIdsByUsername,
  fetchKhoborList,
} from '@Redux/modules/khobor';


class User extends PureComponent {
  componentWillMount() {
    if (!this.props.user) {
      console.log('fetch user');
      this.props.fetchUser(this.props.username);
    } else if (this.props.khoborIds.length === 0) {
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
      <Container>
        <KhoborList ids={this.props.khoborIds} />
      </Container>
    );
  }
}
User.defaultProps = {
  khoborIds: [],
};
User.propTypes = {
  username: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  khoborIds: PropTypes.array,
  fetchUser: PropTypes.func.isRequired,
  fetchKhoborList: PropTypes.func.isRequired,
};
const mapStateToProps = (state, props) =>
  ({
    user: getUserByUsername(state, props),
    khoborIds: getKhoborIdsByUsername(state, props),
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUser,
    fetchKhoborList,
  }, dispatch);
export default WithAuth(connect(mapStateToProps, mapDispatchToProps)(User));
