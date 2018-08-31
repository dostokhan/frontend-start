import { createSelector } from 'reselect';
import axios from 'axios';
// import 'cross-fetch/polyfill';
// import Api from 'helpers/api';
// import Router from 'next/router';
// import { API_REQUEST } from '@Helpers/constants';

import {
  toggleLoading,
  relativeToAbsoluteUrl,
} from '@Redux/helpers';

// const relativeToAbsoluteUrl = (relativeUrlPath = '') => {
//   return process.browser ?
//     `${process.env.API_URL}${relativeUrlPath}` :
//     `${process.env.API_URL_BACK}${relativeUrlPath}`;
// };
// import {
//   getToken,
// } from 'redux/modules/auth';


// INITIALSTATE
export const INITIAL_STATE = {
  loading: false,
  byId: {},
  ids: [],
};

// SELECTORS
export const sampleKhobor = () => '';
export const khoborLoading = state => state.khobor.loading;
const getKhobors = state => state.khobor.byId;
const khoborIds = state => state.khobor.ids;

export const getKhobor = (state, params) =>
  (params.id === 'new' ?
    '' : state.khobor.byId[params.id]);
const khoborSlugToId = (state, props) =>
  state.khobor.slugToId[props.slug];

// export const getKhobor = createSelector(
//   [khoborbyid, getKhobors],
//   (khobor, khobors) => {
//     if (!khobor) {
//       return null;
//     }

//     return {
//       ...khobor,
//       content: contents[khobor.slug],
//     };
//   },
// );
const getKhoborBySlug = createSelector(
  [khoborSlugToId, getKhobors],
  (id, khoborObjects) => khoborObjects[id],
);
export const khoborContentBySlug = createSelector(
  [getKhoborBySlug],
  khobor => (khobor ? khobor.content : ''),
);

export const khoborList = createSelector(
  [khoborIds, getKhobors],
  (ids, list) => ids.map(id =>
    ({
      id,
      key: id,
      link: {
        href: list[id].link,
        as: list[id].domain,
        title: list[id].domain,
      },
      date: list[id].createdAt,
    }),
  ).sort((khobor1, khobor2) => {
    const khobor1Date = new Date(khobor1.date);
    const khobor2Date = new Date(khobor2.date);
    if (khobor1Date > khobor2Date) {
      return -1;
    } else if (khobor1Date < khobor2Date) {
      return 1;
    }

    return 0;
  }),
);


// ACTIONS
export const FETCH_KHOBORS = 'khobor/FETCH_KHOBORS';
export const FETCH_KHOBORS_SUCCESS = 'khobor/FETCH_KHOBORS_SUCCESS';
const FETCH_KHOBORS_ERROR = 'khobor/FETCH_KHOBORS_ERROR';

// const GET_KHOBOR = 'khobor/GET';
// const GET_KHOBOR_SUCCESS = 'khobor/GET_SUCCESS';
// const GET_KHOBOR_ERROR = 'khobor/GET_ERROR';

// const POST_KHOBOR = 'khobor/POST';
// const POST_KHOBOR_SUCCESS = 'khobor/POST_SUCCESS';
// const POST_KHOBOR_ERROR = 'khobor/POST_ERROR';

// const PATCH_KHOBOR = 'khobor/PATCH';
// const PATCH_KHOBOR_SUCCESS = 'khobor/PATCH_SUCCESS';
// const PATCH_KHOBOR_ERROR = 'khobor/PATCH_ERROR';

// const DELETE_KHOBOR = 'khobor/DELETE';
// const DELETE_KHOBOR_SUCCESS = 'khobor/DELETE_SUCCESS';
// const DELETE_KHOBOR_ERROR = 'khobor/DELETE_ERROR';


// ACTION CREATOR
// export const fetchKhoborList = () =>
//   ({
//     [API_REQUEST]: {
//       types: [
//         FETCH_KHOBORS,
//         FETCH_KHOBORS_SUCCESS,
//         FETCH_KHOBORS_ERROR,
//       ],
//       config: {
//         url: 'v1/khobor/list',
//         method: 'get',
//       },
//     },
//   });
const fetchKhoborRequest = () => ({
  type: FETCH_KHOBORS,
});
const fetchKhoborListSuccess = khobors => ({
  type: FETCH_KHOBORS_SUCCESS,
  payload: khobors,
});
const fetchKhoborListError = error => ({
  type: FETCH_KHOBORS_ERROR,
  payload: error,
});
export const fetchKhoborList = () =>
  (dispatch) => {
    dispatch(fetchKhoborRequest());
    const url = relativeToAbsoluteUrl('v1/khobor/list');
    console.log(`Request Url: ${url}`);
    return axios.get(url)
      .then(response => dispatch(fetchKhoborListSuccess(response.data)))
      .catch(error => dispatch(fetchKhoborListError(error)));
  };

// export const fetchKhobor = slug =>
//   (dispatch, getState) => {
//     dispatch({ type: GET_KHOBOR });
//     const state = getState();
//     const token = getToken(state);

//     const req = {
//       [API_REQUEST]: {
//         url: process.browser ?
//         `${API_URL}v1/khobor/${slug}` : `${API_URL_BACK}v1/khobor/${slug}`,
//         config: {
//           method: 'GET',
//         },
//         meta: {
//           token,
//         },
//       },
//     };

//     return Api.fetch(req, dispatch)
//       .then(
//         response =>
//           dispatch({
//             type: GET_KHOBOR_SUCCESS,
//             payload: response,
//           }),
//         err =>
//           dispatch({
//             type: GET_KHOBOR_ERROR,
//             payload: err,
//           }),
//       );
//   };

// export const postKhobor = khobor =>
//   (dispatch) => {
//     dispatch({ type: POST_KHOBOR });
//     const req = ({
//       [API_REQUEST]: {
//         url: `${API_URL}v1/khobors`,
//         config: {
//           method: 'POST',
//           body: {
//             khobor: {
//               title: khobor.title,
//               content: khobor.content,
//               date: khobor.date,
//             },
//           },
//         },
//       },
//     });

//     Api.fetch(req).then(
//       (response) => {
//         dispatch({ type: POST_KHOBOR_SUCCESS, paylaod: response });
//         Router.push('/writer');
//       },
//       err => dispatch({ type: POST_KHOBOR_ERROR, payload: err }),
//     );
//   };
// export const patchKhobor = (id, khobor) =>
//   ({
//     [API_REQUEST]: {
//       types: [
//         PATCH_KHOBOR,
//         PATCH_KHOBOR_SUCCESS,
//         PATCH_KHOBOR_ERROR,
//       ],
//       url: `${API_URL}v1/khobors/${id}`,
//       config: {
//         method: 'PATCH',
//         body: { khobor },
//       },
//       meta: {
//         id,
//       },
//     },
//   });
// export const deleteKhobor = (id, title) =>
//   ({
//     [API_REQUEST]: {
//       types: [
//         DELETE_KHOBOR,
//         DELETE_KHOBOR_SUCCESS,
//         DELETE_KHOBOR_ERROR,
//       ],
//       url: `${API_URL}v1/khobors/${id}`,
//       config: {
//         method: 'DELETE',
//         body: {
//           id,
//           title,
//         },
//       },
//     },
//   });


// REDUCERS
const ACTION_HANDLERS = {
  [FETCH_KHOBORS]: state => toggleLoading(state),
  // [GET_KHOBOR]: state => toggleLoading(state),
  // [POST_KHOBOR]: state => toggleLoading(state),
  // [PATCH_KHOBOR]: state => toggleLoading(state),
  // [DELETE_KHOBOR]: state => toggleLoading(state),

  [FETCH_KHOBORS_SUCCESS]: (prevState, { payload }) => {
    const state = toggleLoading(prevState);

    state.byId = {
      ...state.byId,
    };
    state.ids = [...state.ids];

    payload.forEach((khobor) => {
      state.byId[khobor.id] = khobor;
      state.ids.push(khobor.id);
    });

    return state;
  },
  // [GET_KHOBOR_SUCCESS]: (prevState, { payload }) => {
  //   const { khobor, content } = payload;
  //   const state = { ...prevState };

  //   state.slugToId = {
  //     ...state.slugToId,
  //     [khobor.slug]: khobor.id,
  //   };
  //   state.byId = {
  //     ...state.byId,
  //     [khobor.id]: {
  //       ...khobor,
  //       content,
  //     },
  //   };

  //   return state;
  // },
  // [PATCH_KHOBOR_SUCCESS]: (prevState, { payload }) => {
  //   const state = { ...prevState };
  //   const { khobor } = payload;

  //   state.byId = {
  //     ...state.byId,
  //     [khobor.id]: {
  //       ...prevState.byId[khobor.id],
  //       ...khobor,
  //     },
  //   };

  //   return state;
  // },
  // [DELETE_KHOBOR_SUCCESS]: (prevState, { data }) => {
  //   const byId = { ...prevState.byId };

  //   const ids = prevState.ids.filter(id => id !== data.id);
  //   delete byId[data.id];

  //   return {
  //     ...prevState,
  //     byId,
  //     ids,
  //   };
  // },

  [FETCH_KHOBORS_ERROR]: state => toggleLoading(state),
  // [GET_KHOBOR_ERROR]: state => toggleLoading(state),
  // [POST_KHOBOR_ERROR]: state => toggleLoading(state),
  // [PATCH_KHOBOR_ERROR]: state => toggleLoading(state),
  // [DELETE_KHOBOR_ERROR]: state => toggleLoading(state),
};


export default function reducer(state = INITIAL_STATE, action = {}) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
