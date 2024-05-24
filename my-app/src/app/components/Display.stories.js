import React from 'react';
import Display from './Display';

export default {
  title: 'Display',
  component: Display,
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: '123 + 456',
  currentValue: '789',
};

export const WithLongHistory = Template.bind({});
WithLongHistory.args = {
  history: '1 + 2 * 3 / 4 - 5 + 678',
  currentValue: '9',
};
