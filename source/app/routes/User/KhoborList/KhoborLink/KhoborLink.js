import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

import { StyledLink } from 'styled/StyledLink';

const KhoborLink = (props) => {
  console.log(props);

  return (
    <StyledLink href={props.link.href}>{props.link.title}</StyledLink>
  );
};

KhoborLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default KhoborLink;
