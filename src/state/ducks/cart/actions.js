import * as types from './types';


export const addToCart = (product) => {
  return {
    type: types.ADD_TO_CART,
    payload: product
  }
};

export const removeFromCart = (id) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: id
  }
};

export const incrementQuantity = (product) => {
  return {
    type: types.INCREMENT_CART_ITEM_COUNT,
    payload: product
  }
};

export const decrementQuantity = (product) => {
  return {
    type: types.DECREMENT_CART_ITEM_COUNT,
    payload: product
  }
};

export const emptyCart = () => ({
    type: types.EMPTY_CART
});

export const handleEmptyCart = () => ({


});
