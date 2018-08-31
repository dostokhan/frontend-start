import fetch from 'isomorphic-fetch';
import axios from 'axios';
import { API_REQUEST } from 'helpers/constants';
// import StoreMan from 'helpers/storeman';
import {
  authExpired,
} from 'redux/modules/auth';
import {
  getCookie,
} from 'utils/cookie';

// axios.defaults.baseURL = process.browser ? `${API_URL}` : `${API_URL_BACK}`;


const addToken = (meta, req) => {
  // add token to meta

  if (meta && meta.token) {
    req.headers['mj-token'] = `${meta.token}`;
  } else if (process.browser) {
    const token = getCookie('mj-token');
    if (token) {
      req.headers['mj-token'] = token;
      // `${meta.token}`;
      // action[API_REQUEST].meta = meta ? { token } : { ...action.meta, token };
    }
  }

  return req;
};

const transformResponse = response =>
  ((response && response.json) ? response.json() : '');

const Api = {
  fetch: (action, dispatch) => {
    const {
      meta,
      url,
      config,
      types,
    } = action[API_REQUEST];

    const options = addToken(meta, {
      credentials: 'include',
      method: config.method,
      body: JSON.stringify(config.body),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return Promise.resolve(response);
        } else if (response.status === 401) {
          return dispatch(authExpired());
        } else if (response.status >= 400) {
          // throw new Error('Bad response from server');
          return dispatch({ type: types[2], payload: 'Bad response' });
        }

        // const error = new Error(response.statusText || response.status);
        // error.response = response;
        return Promise.reject(response);
      })
      .then(response => transformResponse(response))
      .catch((error) => {
        console.log('could not connect to api');
        console.log(error);
        return dispatch({ type: 'CONNECTION_FAILED' });
      });
  },
};

export default Api;
