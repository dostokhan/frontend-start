import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

import { Anchor } from '@Styled/Elements';

const KhoborLink = (props) => {
  console.log(props);

  return (
    <Anchor href={props.link.href}>{props.link.title}</Anchor>
  );
};

KhoborLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default KhoborLink;
