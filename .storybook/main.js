const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    "@storybook/addon-a11y",
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport'
  ],
};
