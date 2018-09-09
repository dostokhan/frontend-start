import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  Row,
  Column,
} from '@Styled/Responsive';
import { Anchor } from '@Styled/Elements';
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
                <Anchor>Home</Anchor>
              </Link>
            </Column>
            <div>
              {
                !this.props.authorized && (
                  <Link
                    href="/signin"
                    passHref
                  >
                    <Anchor>Sign In</Anchor>
                  </Link>
                )
              }
              {
                this.props.authorized && (
                  <UserName name={this.props.authUser.username} />
                )
              }
            </div>
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
