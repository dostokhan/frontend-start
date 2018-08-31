import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect'; // You can use any testing library
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';


import {
  relativeToAbsoluteUrl,
} from '@Redux/helpers';
import {
  INITIAL_STATE,
  FETCH_KHOBORS,
  FETCH_KHOBORS_SUCCESS,
  fetchKhoborList,
} from '../khobor';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let httpMock;
  let store;
  beforeEach(() => {
    httpMock = new MockAdapter(axios);
    store = mockStore({ khobor: INITIAL_STATE });
  });

  it('creates FETCH_KHOBORS_SUCCESS when fetching khobors has been done', () => {
    const expectedPayload = [{
      id: 1,
      link: 'https://www.prothomalo.com/bangladesh/article/1553953/%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%B0-%E0%A6%AA%E0%A6%BF%E0%A6%A4%E0%A6%BE-%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%B7%E0%A7%9C%E0%A6%AF%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A7%87-%E0%A6%96%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%A6%E0%A6%BE%E0%A6%93-%E0%A6%9C%E0%A7%9C%E0%A6%BF%E0%A6%A4',
      domain: 'prothomalo.com',
      createdAt: '2018-08-28T00:03:16.878Z',
      updatedAt: '2018-08-28T00:03:16.878Z',
    }];
    const expectedActions = [
      { type: FETCH_KHOBORS },
      {
        type: FETCH_KHOBORS_SUCCESS,
        payload: expectedPayload,
      },
    ];


    httpMock.onGet(relativeToAbsoluteUrl('v1/khobor/list'))
      .reply(
        200,
        expectedPayload,
      );


    return store.dispatch(fetchKhoborList()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

