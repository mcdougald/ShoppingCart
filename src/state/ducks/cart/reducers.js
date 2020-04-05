import { createReducer } from '@reduxjs/toolkit';

import * as types from './types';

const initialState = {
  cartItems: [],
  cartSubtotal: null,
  cartShipping: null,
  cartTaxes: null,
  cartTotalCost: null
};

const cartReducer = createReducer(initialState, {
  [types.ADD_TO_CART]: (state, action) => {

    const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);

    if (itemIndex === -1) {

      const cartItems = [
        ...state.cartItems,
        { ...action.payload, quantity: 1, subtotal: action.payload.price }
      ];

      const subtotal = cartItems.reduce((result, cartItem) => cartItem.subtotal + result, 0);
      const cartShipping = ( subtotal * 0.02 );
      const cartTaxes = ( subtotal * 0.08);

      return {
        ...state,
        cartItems,
        cartSubtotal: subtotal,
        cartShipping,
        cartTaxes,
        cartTotalCost: (subtotal + cartShipping + cartTaxes)
      }
    } else {

      const newCartItemsState = state.cartItems.map( ( cartItem, index ) =>
        itemIndex === index
          ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            subtotal: cartItem.subtotal + cartItem.price
          }
          : cartItem
      );

      const subtotal = newCartItemsState.reduce((result, cartItem) => cartItem.subtotal + result, 0);
      const cartShipping = ( subtotal * 0.02 );
      const cartTaxes = ( subtotal * 0.08);

      return {
        ...state,
        cartItems: newCartItemsState,
        cartSubtotal: subtotal,
        cartShipping,
        cartTaxes,
        cartTotalCost: (subtotal + cartShipping + cartTaxes)
      }
    }

  },

  [types.REMOVE_FROM_CART]: (state, action) => {

    const newCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload);
    const subtotal = newCartItems.reduce((result, cartItem) => cartItem.subtotal + result, 0);
    const cartShipping = ( subtotal * 0.02 );
    const cartTaxes = ( subtotal * 0.08);

    return {
      ...state,
      cartItems: newCartItems,
      cartSubtotal: subtotal,
      cartShipping,
      cartTaxes,
      cartTotalCost: (subtotal + cartShipping + cartTaxes)
    }
  },

  [types.EMPTY_CART]: (state) => {
    return {
      ...state,
      cartItems: [],
      cartSubtotal: 0,
      cartShipping: 0,
      cartTaxes: 0,
      cartTotalCost: 0
    }
  }
});

export default cartReducer;
