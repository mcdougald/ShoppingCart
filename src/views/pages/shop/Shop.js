import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from "react-redux";
import ProductList from '../../components/products/ProductList/ProductList';
import Cart from '../../components/cart/Cart/Cart';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProductPagination from '../../components/products/Pagination/ProductPagination';


const Shop = () => {

  const searchValue = useSelector( ({ products }) => (products.searchValue) );
  const products = useSelector( ({ products }) => (products.currentPageProducts));

  return (
    <div className="row">
      <h2 className='store-products__title'>
        Browse our Products!
      </h2>
      <div className="store columns">
        <div className='product__column is-paddingless column'>
          <SearchBar searchValue={searchValue} />
          <ProductPagination />
          <div className='store-products'>
            <ProductList products={products} />
          </div>
          <ProductPagination />
        </div>
        <div className='column is-4'>
          <div className='store-cart'>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

Shop.propTypes ={
  searchValue: PropTypes.string,
  products: PropTypes.array
};

export default Shop;
