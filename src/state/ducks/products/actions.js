import * as types from './types';

export const fetchProducts = () => ({
  type: types.FETCH_PRODUCTS
});

export const fetchProductsSuccess = (payload) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload
});

export const fetchProductsError = (error) => ({
  type: types.FETCH_PRODUCTS_ERROR,
  error
});

export const filterProductsByName = (searchValue) => ({
  type: types.FILTER_PRODUCTS_BY_NAME,
  searchValue
});

export const filterProductsByCategory = (category) => ({
  type: types.FILTER_PRODUCTS_BY_CATEGORY,
  category
});
