import styled, { css } from 'styled-components';

import {
  Row,
  Container,
} from '@Styled/Responsive';
import {
  ClearButton,
  Anchor,
} from '@Styled/Elements';
// import { media } from 'styled/utils';


const ContactFontSize = css`
  font-size: ${props => props.theme.font.small};
`;

export const ContactRow = styled(Row)`
  ${ContactFontSize};
  margin-bottom: 4em;
`;

export const Button = styled(ClearButton)`
  margin: 0;
  padding: 0 2em;
  line-height: 1em;
  height: auto;

  ${ContactFontSize};
`;
  // &:hover {
  //   color: ${props => props.theme.colors.secondary};
  //   background-color: transparent;
  // };
  // background-color: transparent;
  // border: none;
export const HeaderWrap = styled(Container)`
  max-width: 100vw;
`;

export const HeaderTag = styled.header`
  background-color: #fff;
  font-size: ${props => props.theme.small};
`;

// box-shadow: 0 0.1rem 0.4rem rgba(0,0,0,.15);
