import React from 'react';
import DefaultButton from '../../../views/UI/Buttons/DefaultButton';
import ProductButton from '../../../views/UI/Buttons/ProductButton';

export default {
  title: 'DefaultButton',
  component: DefaultButton
};

export const DefaultButtonWithText = () => (
  <DefaultButton
    value={'Default Button'}>
  </DefaultButton>
);

export const ProductButtonWithText = () => (
  <ProductButton
    value={'Add to Cart'}>
  </ProductButton>
);

export const withEmoji = () => (
  <DefaultButton value={'😀 😎 👍 💯'}>
    <span role="img" aria-label="so cool">

    </span>
  </DefaultButton>
);
