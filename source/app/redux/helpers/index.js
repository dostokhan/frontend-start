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
