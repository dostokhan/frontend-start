import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import {
  Row,
  Column,
  Container,
} from '@Styled/Responsive';

import {
  getKhoborIds,
  khoborLoading,
  fetchKhoborList,
} from '@Redux/modules/khobor';
import KhoborList from '@Components/KhoborList/KhoborList';


class Home extends PureComponent {
  componentWillMount() {
    if (!this.props.loading && this.props.khoborIds.length === 0) {
      console.warn('khobor not fetched');
      this.props.fetchKhoborList();
    }
  }
  render() {
    return (
      <Container>
        <Row wrap="wrap" mb={4}>
          <Column>
            <KhoborList ids={this.props.khoborIds} />
          </Column>
        </Row>


      </Container>
    );
  }
}
Home.propTypes = {
//   authorized: PropTypes.bool.isRequired,
  khoborIds: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,

  fetchKhoborList: PropTypes.func.isRequired,
};

const mapStateToProps = state =>
  ({
    khoborIds: getKhoborIds(state),
    loading: khoborLoading(state),
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchKhoborList,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
