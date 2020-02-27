import React from 'react';
import ProductList from '../../views/components/products/ProductList/ProductList';

export default {
  title: 'ProductList',
  component: ProductList,
  excludeStories: /.*Data$/
};

export const defaultProductData = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    image: 'product-1.jpg',
    description: 'This is the first product component I\'m working on making'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    image: 'product-2.jpg',
    description: 'This is the second product component I\'m working on making'
  }
];


export const Default = () => <ProductList products={defaultProductData} />;
