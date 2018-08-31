import React from 'react';
import styled from 'styled-components';
import { media } from 'styled/utils';

const StyledFooter = styled.div`
  background-color: #a11c20;
  height: 40px;
  color: #FFF;
  border: 1px solid orange;
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;

  ${media.desktop`
    font-size: 1.4rem;
  `};
`;

const Footer = () =>
  (
    <StyledFooter>Footer</StyledFooter>
  );

export default Footer;
