import styled from 'styled-components';
import { media } from 'styled/utils';
// import theme from 'ui/theme';

const Button = styled.button`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};
  border: ${props => props.theme.colors.background};
  border-radius: .4rem;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  height: 1.8rem;
  letter-spacing: .1rem;
  padding: 0 .4rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  ${media.handheld`
    font-size: .7rem;
  `};

  &:focus,
  &:hover {
    color: ${props => props.theme.colors.active};
    background-color: ${props => props.theme.colors.background};
    border-color: ${props => props.theme.colors.background};
    outline: 0;
  }
  &[disabled] {
    cursor: default;
    opacity: .5;

    &:focus,
    &:hover {
      background-color: ${props => props.theme.colors.background};
      border-color: ${props => props.theme.colors.background};
    }
  }
`;

export default Button;
