import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import * as types from './types';
import * as utils from './utils';

const initialState = {

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
  [types.LOGIN]: (state, action) => {
    return {
      ...state,
      isAuthenticated: true,
      authToken: action.payload.token,
      username: action.payload.user.username,
      id: 'id',
      password: action.payload.user.password

    };
  },

  [types.LOG_OUT]: () => {
    return initialState
  }
});

export default userReducer;
