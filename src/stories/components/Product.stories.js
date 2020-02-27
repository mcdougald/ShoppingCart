import React from 'react';
import Product from '../../views/components/products/Product/Product';

export default {
  title: 'Product',
  component: Product,
  excludeStories: /.*Data$/
};

export const productData = {
  id: 1,
  name: 'Product 1',
  price: 100,
  image: 'product-1.jpg',
  description: 'This is the first product component I\'m working on making'
};

export const product = () => (
  <Product {...productData}>

  </Product>
);
