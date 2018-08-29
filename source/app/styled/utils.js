import { css } from 'styled-components';

export const media = {
  // small: (...args) => css`
  //   @media (max-width: 36em) {
  //     ${css(...args)}
  //   }
  // `

  handheld: (...args) => css`
    @media (min-width: 36em) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 52em) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 64em) {
      ${css(...args)}
    }
  `,
};
