import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Khobor from './Khobor/Khobor';


class KhoborList extends PureComponent {
  render() {
    return (
      <div>
        {
          this.props.ids.map(id => (
            <Khobor id={id} key={id} />
          ))
        }
      </div>
    );
  }
}

KhoborList.propTypes = {
  ids: PropTypes.array.isRequired,
};
export default KhoborList;
