import React from 'react';
import Shipping from '../../views/components/account/Shipping/Shipping';

export default {
  title: 'ShippingForm',
  component: Shipping,
  excludeStories: /.*Data$/
};

export const Default = () => <Shipping />;
