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

import WithAuth from '@Components/WithAuth/WithAuth';
import UserName from '@Components/UserName/UserName';


class Header extends PureComponent {
  render() {
    console.log(this.props.authUser);

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
              {
                !this.props.authorized && (
                  <Link
                    href="/signin"
                    passHref
                  >
                    <StyledLink>Sign In</StyledLink>
                  </Link>
                )
              }
              {
                this.props.authorized && (
                  <UserName name={this.props.authUser.username} />
                )
              }
            </Column>
          </Row>
        </HeaderWrap>
      </HeaderTag>
    );
  }
}
export default WithAuth(Header);
