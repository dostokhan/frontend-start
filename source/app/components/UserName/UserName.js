import React from 'react';

import Link from 'next/link';
import { StyledLink } from 'styled/StyledLink';


const UserName = props =>
  (
    <Link
      href={`/u/${props.name}`}
      passHref
    >
      <StyledLink>{props.name}</StyledLink>
    </Link>
  );

export default UserName;
