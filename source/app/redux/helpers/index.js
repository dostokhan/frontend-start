import jwtDecode from 'jwt-decode';


export const toggleLoading = (state, loading = false) =>
  ({
    ...state,
    loading,
  });

export const relativeToAbsoluteUrl = (relativePath = '') => {
  return process.browser ?
    `${process.env.API_URL_IN_BROWSER}${relativePath}` :
    `${process.env.API_URL_IN_CONTAINER}${relativePath}`;
};

export const getTokenData = (token) => {
  try{
    const decoded = jwtDecode(token);
    return {
      token,
      token_exp: decoded.exp,
      user: decoded,
    };

  } catch(error) {
    return null;
  }
};
