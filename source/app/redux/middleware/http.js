import axios from 'axios';

import { API_REQUEST } from '@Helpers/constants';

const http = store => next => (action) => { // eslint-disable-line no-unused-vars
  if (!action[API_REQUEST]) return next(action);

  const { types, config } = action[API_REQUEST];
  const [requestType, successType, errorType] = types;

  next({ type: requestType });

  axios(config)
    .then(response => next({ type: successType, payload: response.data }))
    .catch(error => next({ type: errorType, payload: error }));

  return true;
};

export default http;
