import React from 'react';
import PropTypes from 'prop-types';

import Product from '../Product/Product';


const ProductList = ({ products }) => {
  return (
    <div className={'column is-paddingless'}>
      <ul className="product-list">
        { products.map(product => (
          <li key={product.id} className="product-list__item">
            <Product {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList
