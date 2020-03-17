import React from 'react';
import Information from '../../views/components/account/information/Information';

export default {
  title: 'InformationForm',
  component: Information,
  excludeStories: /.*Data$/
};

export const Default = () => <Information />;
