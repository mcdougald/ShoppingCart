import { createReducer } from '@reduxjs/toolkit';

import * as types from './types';

import { products, searchProductsByName, selectCurrentPage } from './utils';

const initialState = {
  products: products.allProducts,
  filteredProducts: products.allProducts,
  currentPageProducts: selectCurrentPage(products.allProducts, 1),
  searchValue: '',
  totalProducts: products.allProducts.length,
  productsPerPage: 6,
  max_pages: Math.ceil(products.allProducts.length / 6 ),
  currentPage: 1,
};

const productsReducer = createReducer(initialState, {
  [types.FILTER_PRODUCTS_BY_NAME]: ( state, action ) => {

    const filteredProducts = searchProductsByName( state.products, action.searchValue );

    return {
      ...state,
      searchValue: action.searchValue,
      filteredProducts,
      currentPageProducts: selectCurrentPage( filteredProducts, state.currentPage ),
      max_pages: Math.ceil( filteredProducts.length / 6 )
    }
  },
  [types.JUMP_PRODUCT_PAGE]: (state, action) => {

    const newSelectedProducts = selectCurrentPage(state.filteredProducts, action.newPage);

    return {
      ...state,
      currentPage: action.newPage,
      currentPageProducts: newSelectedProducts
    }
  }
});

export default productsReducer;
