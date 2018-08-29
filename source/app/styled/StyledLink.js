// import Link from 'next/link';
import styled from 'styled-components';
import { media } from 'styled/utils';

// const commonStyle = styled`
//   color: ${props => props.theme.colors.primary};
//   text-decoration: none;
//   display: inline-block;
//   border-bottom: 1px solid ${props => props.theme.colors.background};
//   &:hover {
//     color: ${props => props.theme.colors.primary};
//     border-bottom: 1px solid ${props => props.theme.colors.primary};
//   }
// `;

// text-decoration: none;
// display: inline-block;
// border-bottom: 1px solid ${props => props.theme.colors.background};
export const StyledLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  &:focus {
    color: ${props => props.theme.colors.active};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  };
  &:hover {
    color: ${props => props.theme.colors.active};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  };

  ${media.handheld`
    font-size: 1.8rem;
  `};
`;
  // &:visited {
  //   color: ${props => props.theme.colors.inactive};
  // }


export const Navigation = styled(StyledLink)`
`;

// export default StyledLink;
