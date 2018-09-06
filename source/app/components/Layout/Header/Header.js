import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Column,
} from 'styled/Responsive';
import Link from 'next/link';
import { StyledLink } from 'styled/StyledLink';

import WithAuth from '@Components/WithAuth/WithAuth';
import UserName from '@Components/UserName/UserName';

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
Header.defaultProps = {
  authUser: null,
};
Header.propTypes = {
  authUser: PropTypes.object,
  authorized: PropTypes.bool.isRequired,
};
export default WithAuth(Header);
