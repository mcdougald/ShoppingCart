import React from 'react';
import ProductButton from '../../../views/UI/Buttons/ProductButton';

export default {
  title: 'ProductButton',
  component: ProductButton
};


export const withText = () => (
  <ProductButton
    value={'Add to Cart'}>
  </ProductButton>
);


