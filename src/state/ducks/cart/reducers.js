import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import * as types from './types';
import * as utils from './utils';

const initialState = {
  cartItems: []
};

const cartReducer = createReducer(initialState, {
  [types.ADD_TO_CART]: (state, action) => {
    return {
      ...state,
      cartItems: [{ ...action.payload, quantity: 1 }, ...state.cartItems]
    }
  },

  [types.REMOVE_FROM_CART]: (state, action) => {
    return {
      ...state,
      cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload)
    }
  },

  [types.EMPTY_CART]: (state, action) => {
    return {
      ...state,
      cartItems: []
    }
  }
});

export default cartReducer;
