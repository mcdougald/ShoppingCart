import React from 'react';
import PropTypes from 'prop-types';

import Product from '../Product/Product';


const ProductList = ({ products }) => {
  return (
    <div className={'column title is-ancestor is-paddingless'}>
      <ul className="product-list is-parent is-vertical">
        { products.map(product => (
          <li key={`productID--${product.id}`} className="product-list__item title is-child is-vertical">
            <Product {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
  }))
};

export default ProductList
