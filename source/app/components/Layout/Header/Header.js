import React, { PureComponent } from 'react';

import {
  Row,
  Column,
} from 'styled/Responsive';
import Link from 'next/link';
import { StyledLink } from 'styled/StyledLink';

import {
  HeaderWrap,
  // ContactRow,
  HeaderTag,
} from './Header.styled';


class Header extends PureComponent {
  render() {
    return (
      <HeaderTag>
        <HeaderWrap>
          <Row>
            <Column>
              <Link
                href="/"
                passHref
              >
                <StyledLink>Home</StyledLink>
              </Link>
            </Column>
            <Column ml="auto">
              <Link
                href="/login"
                passHref
              >
                <StyledLink>Login</StyledLink>
              </Link>
            </Column>
          </Row>
        </HeaderWrap>
      </HeaderTag>
    );
  }
}
export default Header;
