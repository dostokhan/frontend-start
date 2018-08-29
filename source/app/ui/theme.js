// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});


const theme = {
  colors: {
    background: '#f8f8f8',
    text: '#2c2d30', // #333',
    // '#e25a5e',
    primary: '#001f3f', //  '#9b4dca',


    // secondary: '#606c76',
    // tertiary: '#f4f5f6',
    // quaternary: '#d1d1d1',
    // quinary: '#e1e1e1',

    active: '#111',
    inactive: '#CECECE', // #CECECE
  },
  xy: {
    navHeight: '60px',
  },
  font: {
    small: '1.2rem',
    regular: '1.6rem',
    big: '3.2rem',
  },
};

export default theme;
