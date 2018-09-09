import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import {
  getKhobor,
} from '@Redux/modules/khobor';
import { Anchor } from '@Styled/Elements';


const Khobor = props =>
  (
    <Anchor href={props.khobor.link}>{props.khobor.domain}</Anchor>
  );

Khobor.propTypes = {
  khobor: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) =>
  ({
    khobor: getKhobor(state, props),
  });
export default connect(mapStateToProps)(Khobor);
