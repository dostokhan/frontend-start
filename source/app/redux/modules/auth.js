import axios from 'axios';

import {
  toggleLoading,
  relativeToAbsoluteUrl,
  getTokenData,
} from '@Redux/helpers';
import {
  setCookie,
  getCookie,
  removeCookie,
} from '@Utils/cookie';

export const authLoading = state => state.auth.loading;
export const isAuthenticated = state => Boolean(state.auth.token);
export const isAuthorized = state => Boolean(state.auth.token);
export const getToken = state => state.auth.token;
export const getAuthorizedUser = state => state.auth.user;
export const getAuthUserId = state => (state.auth.user ? state.auth.user.id : null);

// export const authUserId = state => (state.auth.user ? state.auth.user.id : null);

const INITIAL_STATE = {
  loading: false,
  token: null,
};

if (process.browser) {
  const savedToken = getCookie('mj-token');
  if (savedToken) {
    INITIAL_STATE.token = savedToken;
  }
}


// action types
const AUTH_EXPIRED = 'auth/expired';

const SIGNIN = 'auth/signin';
const SIGNIN_SUCCESS = 'auth/signin/signin';
const SIGNIN_ERROR = 'auth/signin/error';

export const authExpired = () => {
  removeCookie('mj-token');
  return ({
    type: AUTH_EXPIRED,
  });
};
const signInRequest = () => ({
  type: SIGNIN,
});
export const signInSuccess = (token) => {
  const tokenData = getTokenData(token);

  if (tokenData) {
    setCookie('mj-token', token);
    // axios.defaults.headers.common['mj-token'] = token;

    return ({
      type: SIGNIN_SUCCESS,
      payload: tokenData,
    });
  }

  return authExpired();
};
const signInError = error => ({
  type: SIGNIN_ERROR,
  payload: error,
});
export const signIn = ({ username, password }) =>
  (dispatch) => {
    dispatch(signInRequest());

    return axios.post(relativeToAbsoluteUrl('v1/auth/signin'), { username, password })
      .then(response => dispatch(signInSuccess(response.data.token)))
      .catch(error => dispatch(signInError(error)));
  };
// action handlers
const ACTION_HANDLERS = {
  [SIGNIN]: prevState => toggleLoading(prevState),
  [SIGNIN_SUCCESS]: (prevState, { payload }) => {
    const state = toggleLoading(prevState, false);
    state.token = payload.token;
    state.user = payload.user;

    return state;
  },
  [SIGNIN_ERROR]: prevState => toggleLoading(prevState, false),


  [AUTH_EXPIRED]: prevState =>
    ({
      ...prevState,
      token: null,
    }),
};


export default function reducer(state = INITIAL_STATE, action = {}) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
