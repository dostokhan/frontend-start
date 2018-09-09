import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';


import { Anchor } from '@Styled/Elements';


const UserName = props =>
  (
    <Link
      href={`/u/${props.name}`}
      passHref
    >
      <Anchor>{props.name}</Anchor>
    </Link>
  );

UserName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserName;
