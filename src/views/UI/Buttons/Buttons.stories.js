import React from 'react';
import { DefaultButton } from './Button';

export default {
  title: 'DefaultButton',
  component: DefaultButton
};

export const withText = () => (
  <DefaultButton
    value={'Default Button'}>
  </DefaultButton>
);

export const withEmoji = () => (
  <DefaultButton value={'😀 😎 👍 💯'}>
    <span role="img" aria-label="so cool">

    </span>
  </DefaultButton>
);
