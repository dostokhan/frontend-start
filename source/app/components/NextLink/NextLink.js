import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import {
  NavLink,
} from 'styled/NavList';

class NavLink extends PureComponent {
  render() {
    return (
      <NavLink onClick={() => Router.push(this.props.href)}>
        {this.props.children}
      </NavLink>
    );
  }
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default NavLink;
