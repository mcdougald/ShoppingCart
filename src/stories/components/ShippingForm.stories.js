import React from 'react';
import Shipping from '../../views/components/account/shipping/Shipping';

export default {
  title: 'ShippingForm',
  component: Shipping,
  excludeStories: /.*Data$/
};

export const Default = () => <Shipping />;
