import React from 'react';
import Product from './Product';

export default {
  title: 'Product',
  component: Product
};

export const productData = {
  id: 1,
  name: 'Product-1',
  price: 100,
  image: 'product-1.jpg'
};

export const product = () => (
  <Product {...productData}>

  </Product>
);
