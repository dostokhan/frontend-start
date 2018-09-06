import { createSelector } from 'reselect';
import axios from 'axios';

import {
  toggleLoading,
  relativeToAbsoluteUrl,
} from '@Redux/helpers';

import {
  authUserId,
  getToken,
} from '@Redux/modules/auth';

// INITIALSTATE
export const INITIAL_STATE = {
  loading: false,
  byId: {},
  ids: [],
};

// SELECTORS
export const userLoading = state => state.user.loading;
const getUsers = state => state.user.byId;
// const userIds = state => state.user.ids;

export const getUser = (state, props) => state.user.byId[props.id];

export const getAuthUser = createSelector(
  [authUserId, getUsers],
  (id, byId) => (id ? byId[id] : null),
);


// ACTIONS
const FETCH_USER = 'user/FETCH';
const FETCH_USER_SUCCESS = 'user/FETCH_SUCCESS';
const FETCH_USER_ERROR = 'user/FETCH_ERROR';


// ACTION CREATOR
const fetchUserRequest = () => ({
  type: FETCH_USER,
});
const fetchUserSuccess = users => ({
  type: FETCH_USER_SUCCESS,
  payload: users,
});
const fetchUserError = error => ({
  type: FETCH_USER_ERROR,
  payload: error,
});
export const fetchUser = () =>
  (dispatch, getState) => {
    dispatch(fetchUserRequest());
    const state = getState();
    const token = getToken(state);
    return axios({
      url: relativeToAbsoluteUrl('v1/user'),
      headers: { 'mj-token': token },
    })
      .then(response => dispatch(fetchUserSuccess(response.data)))
      .catch(error => dispatch(fetchUserError(error)));
  };


// REDUCERS
const ACTION_HANDLERS = {
  [FETCH_USER]: state => toggleLoading(state),

  [FETCH_USER_SUCCESS]: (prevState, { payload }) => {
    const state = toggleLoading(prevState, false);
    const { user } = payload;

    state.byId = {
      ...state.byId,
      [user.id]: {
        ...user,
      },
    };

    return state;
  },

  [FETCH_USER_ERROR]: state => toggleLoading(state),
};


export default function reducer(state = INITIAL_STATE, action = {}) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
