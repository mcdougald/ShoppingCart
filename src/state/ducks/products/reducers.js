import { createReducer } from '@reduxjs/toolkit';

import * as types from './types';

import { allProducts, searchProductsByName } from './utils';

const initialState = {
  products: allProducts,
  filteredProducts: allProducts,
  searchValue: '',
};

const productsReducer = createReducer(initialState, {
  [types.FILTER_PRODUCTS_BY_NAME]: ( state, action ) => {
    return {
      ...state,
      searchValue: action.searchValue,
      filteredProducts: searchProductsByName(state.products, action.searchValue),
    }
  }
});

export default productsReducer;
