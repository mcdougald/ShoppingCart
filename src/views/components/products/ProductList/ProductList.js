import React from 'react';
import PropTypes from 'prop-types';

import Product from '../Product/Product';


const ProductList = ({ products }) => {
  return (
    <div className={'column title is-ancestor is-paddingless'}>
      <ul className="product-list title is-parent is-vertical">
        { products.map(product => (
          <li key={product.id} className="product-list__item title is-child is-vertical">
            <Product {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList
