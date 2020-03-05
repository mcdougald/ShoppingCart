import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import * as types from './types';
import * as utils from './utils';

const initialState = {
  user: null,
  id: null,
  authToken: null,
  username: null,
  lastActivity: null,
  isAdmin: false,
  type: ['user', 'admin'],
  isAuthenticated: false,
  isRegistered: false,
  isPurchaseEligible: false

};

const userReducer = createReducer(initialState, {
  [types.LOGIN]: (state, payload) => {
    return { ...state,
      isAuthenticated: true,
      authToken: payload.data.token,
      user: { ...payload.data.user }};
  },

  [types.LOG_OUT]: () => {
    return initialState
  }
});

export default userReducer;
