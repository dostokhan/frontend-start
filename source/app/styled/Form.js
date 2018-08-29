import styled from 'styled-components';

const commonStyles = `
  appearance: none;
  background-color: transparent;
  border: none;
  border-bottom: .1rem solid #333;
  box-shadow: none;
  box-sizing: inherit;
  height: 3.8rem;
  padding: .6rem 1.0rem;
  width: 100%;

  &:focus
    border-color: black;
    outline: 0;
`;

export const Input = styled.input`${commonStyles}`;

export const Form = styled.form``;

